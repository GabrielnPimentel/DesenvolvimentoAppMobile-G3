import React from "react";
import { FlatList, Image, ScrollView, Text, View } from "react-native";
import { styles } from "./style";
import { Ionicons } from "@expo/vector-icons";
import { pratosPop } from "../Mock/ArrayHomeMockado";

export function Favorites() {
  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.usuarioNome}>Favoritos</Text>
        <Ionicons name="heart" size={50} color={"#fff"} />
      </View>

      <View style={styles.favoritosContainer}>
        <FlatList
          data={pratosPop}  // Usando pratosPop como exemplo de favoritos
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.favoritosCard}>
              <Image style={styles.imgPrato} source={item.image} />
              <Text style={styles.nomePrato}>{item.title}</Text>
            </View>
          )}
        />
      </View>
    </View>
    </ScrollView>
  );
}

export default Favorites;
