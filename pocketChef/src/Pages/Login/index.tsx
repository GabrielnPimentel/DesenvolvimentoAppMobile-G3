import React, { useState } from 'react';
import {
  Keyboard,
  TouchableWithoutFeedback,
  View,
  Text,
  Alert,
  TextInput,
  Image
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ButtonComponent } from '../../Components/ButtonComponent';
import IconDesign from '@expo/vector-icons/AntDesign';
import { styles } from './style';  // Certifique-se de que o caminho para o arquivo de estilos esteja correto

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

        <View style={styles.containerLogo}>
        <Image
        source={require('./logo1.png')}
        />
        </View>

        <Text style={styles.titulo}>Login</Text>

        <View>
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
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Login;
