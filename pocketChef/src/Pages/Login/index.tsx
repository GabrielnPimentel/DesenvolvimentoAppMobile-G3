import React, { useState } from 'react';
import {
  Keyboard,
  TextInput,
  TouchableWithoutFeedback,
  View,
  Text,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ButtonComponent } from '../../Components/ButtonComponent';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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
      alert('Preencha todos os campos!');
    }
  };

  const handleCadastro = () => {
    navigator.navigate('StackCadastro', { name: 'Cadastro' });
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View>
        <Text>Login</Text>

        <TextInput
          placeholder="Email"
          onChangeText={handleEmail}
          value={email}
        />

        <TextInput
          placeholder="Senha"
          onChangeText={handlePassword}
          value={password}
          secureTextEntry
        />

        <ButtonComponent title="Entrar" handleOnChange={handleLogin} />
        <ButtonComponent title="Cadastro" handleOnChange={handleCadastro} />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Login;
