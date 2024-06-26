import React from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./style";
import { PropsApi } from "../../Pages/Home";
import { Ionicons } from "@expo/vector-icons";

interface PropsApiComponent {
  loading?: boolean;
  handleApi?: () => void;
  spoonApi: PropsApi[];
  cardXL?: boolean;
  favoritar: (item: PropsApi) => void;
  isFavorite: (id: number) => boolean;
}

export function CardApi({
  loading,
  spoonApi,
  handleApi,
  cardXL,
  favoritar: toggleFavorite,
  isFavorite
}: PropsApiComponent) {
  return (
    <>
      {cardXL ? (
        <View style={styles.pratoContainer}>
          <FlatList
            horizontal={true}
            data={spoonApi}
            keyExtractor={(item) => item.id.toString()}
            onEndReached={handleApi}
            renderItem={({ item }) => (
              <View style={styles.pratosCards}>
                <Image style={styles.imgPrato} source={{ uri: item.image }} />
                <View style={styles.favoritoContainer}>
                  <TouchableOpacity onPress={() => toggleFavorite(item)}>
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
      ) : (
        <View style={styles.receitasContainer}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            Receitas Populares
          </Text>
          <FlatList
            horizontal={true}
            data={spoonApi}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View style={styles.receitasCard}>
                <Image style={styles.imgPratoPop} source={{ uri: item.image }} />
                <View style={styles.favoritoContainer}>
                  <TouchableOpacity onPress={() => toggleFavorite(item)}>
                    <Ionicons
                      name={isFavorite(item.id) ? "heart" : "heart-outline"}
                      size={24}
                      color={isFavorite(item.id) ? "red" : "gray"}
                      
                    />
                  </TouchableOpacity>
                </View>
                <Text style={styles.receitaNome}>{item.title}</Text>
              </View>
            )}
          />
        </View>
      )}
    </>
  );
}
