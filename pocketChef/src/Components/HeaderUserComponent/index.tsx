import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {styles} from './style'
import { useAuth } from "../../Hooks/useAuth";
import { useNavigation } from "@react-navigation/native";

export function HeaderUserComponent() {

  const navigator = useNavigation();
  const {email} = useAuth();

  return (
    <>
      <View style={styles.headerContainer}>
        <Text style={styles.usuarioNome}>Bem vindo, {email}</Text>
    <TouchableOpacity onPress={() => navigator.navigate("StackContas", { name: "Contas" })}>
        <Ionicons name="person-circle" size={50} color={"#fff"} />
    </TouchableOpacity>
      </View>
    </>
  );
}
