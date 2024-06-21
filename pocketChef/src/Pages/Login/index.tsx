import React, { useState } from "react";
import {
  Keyboard,
  TextInput,
  TouchableWithoutFeedback,
  View,
  Text,
} from "react-native"; // Importe o componente Text de react-native
import { styles } from "./style";
import { useNavigation } from "@react-navigation/native";
import { ButtonComponent } from "../../Components/ButtonComponent";

const Login = () => {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const navigator = useNavigation();

  const handleEmail = (value: string) => {
    setEmail(value);
  };

  const handlePassword = (value: string) => {
    setPassword(value);
  };

  const handleLogin = () => {
    navigator.navigate("StackHome", { name: "Home" });
  };

  const handleCadastro = () => {
    navigator.navigate("StackCadastro", { name: "Cadastro" });
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Text style={styles.titulo}>Login</Text>

        <View>
          <TextInput
            placeholder="Email"
            placeholderTextColor={"#ffffff"}
            style={styles.email}
            onChangeText={handleEmail}
          />

          <TextInput
            placeholder="Senha"
            placeholderTextColor={"#ffffff"}
            style={styles.senha}
            onChangeText={handleEmail}
          />
        </View>

        <ButtonComponent title="Entrar" handleOnChange={handleLogin} />
        <ButtonComponent title="Cadastro" handleOnChange={handleCadastro} />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Login;
