import React, { useState, useEffect } from "react";
import {
  Keyboard,
  TouchableWithoutFeedback,
  View,
  Text,
  Image,
  Animated,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ButtonComponent } from "../../Components/ButtonComponent";
import { styles } from "./style";
import { useAuth } from "../../Hooks/useAuth";
import { TextInputComponent } from "../../Components/TextInput";
import { ModalComponent } from "../../Components/ModalComponent";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Login = () => {
  const [offset] = useState(new Animated.ValueXY({ x: 0, y: 95 }));
  const [opacity] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.parallel([
      Animated.spring(offset.y, {
        toValue: 0,
        speed: 4,
        bounciness: 20,
        useNativeDriver: true,
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  const {
    email,
    setEmail,
    password,
    setPassword,
    handleLoginAuth,
    modalAberto,
  } = useAuth();

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
            <TextInputComponent
              placeholder="Nome"
              onChangeValue={handleEmail}
              value={email}
            />

            <TextInputComponent
              placeholder="Senha"
              onChangeValue={handlePassword}
              type={true}
              value={password}
            />
            <ButtonComponent title="Entrar" handleOnChange={handleLogin} />
            {modalAberto && <ModalComponent />}
            <ButtonComponent title="Cadastro" handleOnChange={handleCadastro} />
          </View>
        </Animated.View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Login;
