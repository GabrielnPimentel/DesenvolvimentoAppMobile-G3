import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./style";
import { ButtonComponent } from "../../Components/ButtonComponent";
import { useNavigation } from "@react-navigation/native"; 
import IconDesign from "@expo/vector-icons/AntDesign";

const Contas = () => {
  const navigation = useNavigation(); 

  const handleLogin = () => {
    navigation.navigate("StackLogin", { name: "Login" }); 
  };

  return (
    <View style={styles.container}>
    <TouchableOpacity
          onPress={() => navigation.navigate("StackHome", { name: "Home" })}>
          <IconDesign name="left" size={25} style={styles.voltarIcon} />
        </TouchableOpacity>
      <Text style={styles.titulo}>Contas</Text>
      <ButtonComponent title="Mudar de conta" handleOnChange={handleLogin} />
    </View>
  );
};

export default Contas;
