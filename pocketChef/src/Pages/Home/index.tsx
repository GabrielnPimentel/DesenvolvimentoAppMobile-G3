import React from "react";
import { FlatList, Image, Text, View } from "react-native";
import { styles } from "./style";
import { Ionicons } from "@expo/vector-icons";
import { categorias, pratos, pratosPop } from "../Mock/ArrayHomeMockado";
import prato from "../../Assets/prato.jpg";

export function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.usuarioNome}>Bem vindo, Grupo 3</Text>
        <Ionicons name="person-circle" size={50} color={"#fff"} />
      </View>

      <View style={styles.categoriaContainer}>
        <Text style={styles.categoriaTitle}>Categorias</Text>
        <FlatList
          horizontal={true}
          data={categorias}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.categoriaCard}>
              <Text style={styles.nomeCategoria}>{item.title}</Text>
            </View>
          )}
        />
      </View>

      <View style={styles.pratoContainer}>

      <FlatList
        horizontal={true}
        data={pratos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.pratosCards}>
            <Image style={styles.imgPrato} source={item.image} />
            <View style={styles.pratoInfo}>
              <Text style={styles.nomePrato}>{item.title}</Text>
              <View style={styles.pratoDatas}>
                <Text style={{ fontSize: 14, color: "#fff" }}>{item.time}</Text>
                <Text style={{ fontSize: 14, color: "#fff" }}>{item.n}</Text>
              </View>
            </View>
          </View>
        )}
      />
      </View>

      <View style={styles.receitasContainer}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
          Receitas Populares
        </Text>
        <FlatList
          horizontal={true}
          data={pratosPop}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.receitasCard}>
              <Image style={styles.imgPratoPop} source={item.image} />
              <Text style={styles.receitaNome}>{item.title}</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
}

export default Home;
