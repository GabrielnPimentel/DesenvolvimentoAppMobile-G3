import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import React, { createContext, useContext, useState } from "react";
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

  const handleLoginAuth = (email: string, password: string) => {
    if (email === "" || password === "") {
      Alert.alert("Erro", "Preencha todos os campos!");
    } else {
      navigator.navigate("StackHome", { name: "Home" });
    }
  };

  const cadastroAuth = async (email: string, password: string) => {
    try {
      const newUser = { email, password };
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
