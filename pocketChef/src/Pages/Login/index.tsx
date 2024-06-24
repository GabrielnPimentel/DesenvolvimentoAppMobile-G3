import React, { useState, useEffect } from 'react';
import {
  Keyboard,
  TouchableWithoutFeedback,
  View,
  Text,
  Alert,
  TextInput,
  Image,
  Animated
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ButtonComponent } from '../../Components/ButtonComponent';
import { styles } from './style';  // Certifique-se de que o caminho para o arquivo de estilos esteja correto

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
      })
    ]).start();
  }, []);

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
    // Simulação de autenticação (verifique se email/senha são válidos)
    if (email && password) {
      navigator.navigate('StackHome', { name: 'Home' });
    } else {
      Alert.alert('Erro', 'Preencha todos os campos!');
    }
  };

  const handleCadastro = () => {
    navigator.navigate('StackCadastro', { name: 'Cadastro' });
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Animated.View
          style={[
            styles.animatedContainer,
            {
              opacity: opacity,
              transform: [{ translateY: offset.y }]
            }
          ]}
        >
          <View style={styles.containerLogo}>
            <Image
              source={require('./logo1.png')}
              style={styles.logo}
            />
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
            <ButtonComponent
              title="Entrar"
              handleOnChange={handleLogin}
            />
            <ButtonComponent
              title="Cadastro"
              handleOnChange={handleCadastro}
            />
          </View>
        </Animated.View>
      </View> 
    </TouchableWithoutFeedback>
  );
};

export default Login;
