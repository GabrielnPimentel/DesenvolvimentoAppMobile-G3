import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import { Alert } from "react-native";

const apiUrl = "https://6639731c1ae792804bebc13f.mockapi.io/api/v1/emailEsenha";

axios.get(apiUrl).catch((error) => {
  console.error("Erro ao carregar API:");
});

export type PropsContext = {
  email: string;
  setEmail: (email: string) => void;
  password: string;
  setPassword: (password: string) => void;
  cadastroAuth: (email: string, password: string) => void;
  handleLoginAuth: (email: string, password: string) => void;
};

//criador do contexto
const AuthContext = createContext<PropsContext>({
  email: "",
  setEmail: () => {},
  password: "",
  setPassword: () => {},
  cadastroAuth: () => {},
  handleLoginAuth: () => {},
});

//o contexto de todo a aplicação esta aqui dentro do authProvider
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const navigator = useNavigation();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  useEffect(() => {
    checkLogin();
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

  const handleLoginAuth = async(nome: string, password: string) => {
    if (nome === "" || password === "") {
      Alert.alert("Erro", "Preencha todos os campos!");
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

  return (
    //manda para o app tudo o que tem no criador do contexto
    //dentro do value eu coloco todas as informações que eu quero passar ao chamar esse hook
    <AuthContext.Provider
      value={{
        email,
        setEmail,
        password,
        setPassword,
        cadastroAuth,
        handleLoginAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

//otimiza e abrevia a chamada do contexto (criador do contexto)
export const useAuth = () => useContext(AuthContext);
