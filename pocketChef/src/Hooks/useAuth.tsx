import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import { Alert } from "react-native";

const apiUrl = "https://6639731c1ae792804bebc13f.mockapi.io/api/v1/emailEsenha";

axios.get(apiUrl).catch((error) => {
  console.error("Erro ao carregar API:");
});

export interface PropsApi {
  id: number;
  title: string;
  image?: string;
  imageType?: string;
};

export type PropsContext = {
  favoritos: PropsApi[],
  setFavoritos: (value: PropsApi[]) => void,
  email: string;
  setEmail: (email: string) => void;
  password: string;
  setPassword: (password: string) => void;
  cadastroAuth: (email: string, password: string) => void;
  handleLoginAuth: (email: string, password: string) => void;
  modalAberto: boolean;
  setModalAberto: (value: boolean) => void;
  favoritar: (item: PropsApi) => void;
  isFavorite: (id: number) => boolean;
};

//criador do contexto
const AuthContext = createContext<PropsContext>({
  favoritos: [],
  setFavoritos: () => {},
  email: "",
  setEmail: () => {},
  password: "",
  setPassword: () => {},
  cadastroAuth: () => {},
  handleLoginAuth: () => {},
  modalAberto: false,
  setModalAberto: () => {},
  favoritar: () => {},
  isFavorite: () => false,
});

//o contexto de todo a aplicação esta aqui dentro do authProvider
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const navigator = useNavigation();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [modalAberto, setModalAberto] = useState<boolean>(false);
  const [favoritos, setFavoritos] = useState<PropsApi[]>([]);

  useEffect(() => {
    checkLogin();
    loadFavoritos();
  }, []);

  const checkLogin = async () => {
    try {
      const EmailArmazenado = await AsyncStorage.getItem("EmailUsuario");
      if (EmailArmazenado) {
        setEmail(EmailArmazenado);
        navigator.navigate("StackHome", { name: "Home" });
      }
    } catch (error) {
      console.error("Erro ao verificar status de login:", error);
    }
  };

  const abrirOuFecharModal = () => {
    setModalAberto(!modalAberto)
  }

  const handleLoginAuth = async(nome: string, password: string) => {
    if (nome === "" || password === "") {
      setModalAberto(!modalAberto)
    } else {
      try {
        const response = await axios.get<any[]>(apiUrl);
        const user = response.data.find(
          (u) => u.nome === nome && u.password === password
        );
        if (user) {
          await AsyncStorage.setItem("EmailUsuario", email);
          setEmail(email);
          navigator.navigate("StackHome", { name: "Home" });
        } else {
          Alert.alert("Erro", "Credenciais inválidas!");
        }
      } catch (error) {
        console.error("Erro ao autenticar usuário:", error);
        Alert.alert("Erro ao autenticar. Por favor, tente novamente.");
      }
    }
  };

  const cadastroAuth = async (nome: string, password: string) => {
    try {
      const newUser = { nome, password };
      const response = await axios.post(apiUrl, newUser);
      console.log("Novo usuário adicionado:", response.data);
      Alert.alert("Usuário adicionado com sucesso!");
      setEmail("");
      setPassword("");
      navigator.navigate("StackLogin", { name: "Login" });
    } catch (error) {
      console.error("Erro ao adicionar novo usuário:", error);
      Alert.alert("Erro ao adicionar usuário. Por favor, tente novamente.");
    }
  };

  const loadFavoritos = async () => {
    try {
      const favoritosJson = await AsyncStorage.getItem("favoritos");
      if (favoritosJson) {
        setFavoritos(JSON.parse(favoritosJson));
      }
    } catch (error) {
      console.error("Erro ao carregar favoritos:", error);
    }
  };

  const favoritar = async (item: PropsApi) => {
    let novosFavoritos;
    if (favoritos.some((fav) => fav.id === item.id)) {
      novosFavoritos = favoritos.filter((fav) => fav.id !== item.id);
    } else {
      novosFavoritos = [...favoritos, item];
    }
    setFavoritos(novosFavoritos);
    try {
      await AsyncStorage.setItem("favoritos", JSON.stringify(novosFavoritos));
    } catch (error) {
      console.error("Erro ao salvar favorito:", error);
    }
  };

  const isFavorite = (id: number) => {
    return favoritos.some(fav => fav.id === id);
  };

  return (
    //manda para o app tudo o que tem no criador do contexto
    //dentro do value eu coloco todas as informações que eu quero passar ao chamar esse hook
    <AuthContext.Provider
      value={{
        favoritos, setFavoritos,
        favoritar, isFavorite,
        email,
        setEmail,
        password,
        setPassword,
        cadastroAuth,
        handleLoginAuth,
        modalAberto, setModalAberto
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

//otimiza e abrevia a chamada do contexto (criador do contexto)
export const useAuth = () => useContext(AuthContext);
