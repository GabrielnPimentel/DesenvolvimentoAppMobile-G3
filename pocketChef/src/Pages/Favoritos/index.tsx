import React, { useEffect, useState } from "react";
import { FlatList, Image, ScrollView, Text, View } from "react-native";
import { styles } from "./style";
import { Ionicons } from "@expo/vector-icons";
import { useAuth } from "../../Hooks/useAuth";

export interface PropsApiFav{
  id: number;
  title: string;
  image?: string;
  imageType?: string;
}

export function Favorites() {
  const {favoritos, setFavoritos} = useAuth();

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.usuarioNome}>Favoritos</Text>
          <Ionicons name="heart" size={50} color={"#fff"} />
        </View>

        <View style={styles.favoritosContainer}>
          <FlatList
            data={favoritos}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View style={styles.favoritosCard}>
                <Image style={styles.imgPrato} source={{ uri: item.image }} />
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
