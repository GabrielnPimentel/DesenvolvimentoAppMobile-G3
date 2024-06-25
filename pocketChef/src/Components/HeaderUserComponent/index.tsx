import React from "react";
import { Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {styles} from './style'

export function HeaderUserComponent() {
  return (
    <>
      <View style={styles.headerContainer}>
        <Text style={styles.usuarioNome}>Bem vindo, Grupo 3</Text>
        <Ionicons name="person-circle" size={50} color={"#fff"} />
      </View>
    </>
  );
}
