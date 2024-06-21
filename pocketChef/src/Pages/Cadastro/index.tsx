import React, { useState } from "react";
import {
  Keyboard,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { styles } from "../Cadastro/style";
import { ButtonComponent } from "../../Components/ButtonComponent";
import { useNavigation } from "@react-navigation/native";

function Cadastro() {
  const navigation = useNavigation(); // Hook useNavigation para acessar a navegação

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleEmail = (value: string) => {
    setEmail(value);
  };

  const handleLogin = () => {
    navigation.navigate("StackLogin", { name: "Login" }); // Navegação para a tela desejada
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Text style={styles.titulo}>Cadastro</Text>

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

          <ButtonComponent title="Confirmar Cadastro" handleOnChange={handleLogin} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default Cadastro;
