import React from "react";
import { Text, View } from "react-native";
import { styles } from "./style";
import { ButtonComponent } from "../../Components/ButtonComponent";
import { useNavigation } from "@react-navigation/native"; 

const Contas = () => {
  const navigation = useNavigation(); 

  const handleLogin = () => {
    navigation.navigate("StackLogin", { name: "Login" }); 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Contas</Text>
      <ButtonComponent title="Mudar de conta" handleOnChange={handleLogin} />
    </View>
  );
};

export default Contas;
