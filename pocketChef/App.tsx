import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Cadastro from './src/Pages/Cadastro';

export default function App() {
  return (
    <View>
      <StatusBar style="auto" />
      <Cadastro/>
    </View>
  );
}