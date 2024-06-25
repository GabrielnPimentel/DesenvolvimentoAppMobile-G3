import React from "react";
import { Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {styles} from './style'
import { useAuth } from "../../Hooks/useAuth";

export function HeaderUserComponent() {

  const {email} = useAuth();

  return (
    <>
      <View style={styles.headerContainer}>
        <Text style={styles.usuarioNome}>Bem vindo, {email}</Text>
        <Ionicons name="person-circle" size={50} color={"#fff"} />
      </View>
    </>
  );
}
