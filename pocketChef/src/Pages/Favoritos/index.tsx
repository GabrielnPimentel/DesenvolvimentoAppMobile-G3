import React, { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./style";
import { Ionicons } from "@expo/vector-icons";
import { useAuth } from "../../Hooks/useAuth";

export interface PropsApiFav {
  id: number;
  title: string;
  image?: string;
  imageType?: string;
}

export function Favorites() {
  const { favoritos, favoritar, isFavorite } = useAuth();

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.usuarioNome}>Favoritos</Text>
          <Ionicons name="heart" size={50} color={"#fff"} />
        </View>

        <View style={styles.pratoContainer}>
          <FlatList
            data={favoritos}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View style={styles.pratosCards}>
                <Image style={styles.imgPrato} source={{ uri: item.image }} />
                <View style={styles.favoritosContainer}>
                  <TouchableOpacity onPress={() => favoritar(item)}>
                    <Ionicons
                      name={isFavorite(item.id) ? "heart" : "heart-outline"}
                      size={24}
                      color={isFavorite(item.id) ? "red" : "gray"}
                    />
                  </TouchableOpacity>
                </View>
                <View style={styles.pratoInfo}>
                  <Text style={styles.nomePrato}>{item.title}</Text>
                  <View style={styles.pratoDatas}>
                    <Text style={{ fontSize: 14, color: "#fff" }}>10 min</Text>
                    <Text style={{ fontSize: 14, color: "#fff" }}>2</Text>
                  </View>
                </View>
              </View>
            )}
          />
        </View>
      </View>
    </ScrollView>
  );
}

export default Favorites;
