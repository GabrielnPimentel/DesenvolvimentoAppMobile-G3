import React, { useState, useEffect } from "react";
import {
  Keyboard,
  TouchableWithoutFeedback,
  View,
  Text,
  TextInput,
  Image,
  Animated,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ButtonComponent } from "../../Components/ButtonComponent";
import { styles } from "./style"; // Certifique-se de que o caminho para o arquivo de estilos esteja correto
import { useAuth } from "../../Hooks/useAuth";

const Login = () => {
  const [offset] = useState(new Animated.ValueXY({ x: 0, y: 95 }));
  const [opacity] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.parallel([
      Animated.spring(offset.y, {
        toValue: 0,
        speed: 4,
        bounciness: 20,
        useNativeDriver: true, // Adicione esta linha
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true, // Adicione esta linha
      }),
    ]).start();
  }, []);

  const { email, setEmail, password, setPassword, handleLoginAuth } = useAuth();

  // const [email, setEmail] = useState<string>();
  // const [password, setPassword] = useState<string>();
  const navigator = useNavigation();

  const handleEmail = (value: string) => {
    setEmail(value);
  };

  const handlePassword = (value: string) => {
    setPassword(value);
  };

  //Async para os dados vindos da mockapi
  const handleLogin = async () => {
    await handleLoginAuth(email, password);
  };

  const handleCadastro = () => {
    navigator.navigate("StackCadastro", { name: "Cadastro" });
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Animated.View
          style={[
            styles.animatedContainer,
            {
              opacity: opacity,
              transform: [{ translateY: offset.y }],
            },
          ]}
        >
          <View style={styles.containerLogo}>
            <Image source={require("./logo1.png")} style={styles.logo} />
          </View>
          <Text style={styles.titulo}>Login</Text>
          <View style={styles.form}>
            <TextInput
              placeholder="Email"
              placeholderTextColor="#000000"
              style={styles.email}
              onChangeText={handleEmail}
              value={email}
            />
            <TextInput
              placeholder="Senha"
              placeholderTextColor="#070707"
              style={styles.senha}
              onChangeText={handlePassword}
              value={password}
              secureTextEntry
            />
            <ButtonComponent title="Entrar" handleOnChange={handleLogin} />
            <ButtonComponent title="Cadastro" handleOnChange={handleCadastro} />
          </View>
        </Animated.View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Login;
