import React, { useEffect, useState } from "react";
import { FlatList, Image, Text, View } from "react-native";
import { styles } from "./style";
import { Ionicons } from "@expo/vector-icons";
import { categorias, pratos, pratosPop } from "../Mock/ArrayHomeMockado";
import axios from "axios";

interface PropsApi {
  id: number;
  title: string;
  image?: string;
  imageType?: string;
}

export function Home() {

  const [apiSpoon, setApiSpoon] = useState<PropsApi[]>([]);
  const categoria = "breakfast";
  const resultados = 4;

  const loadApi = async () => {

    const baseUrl = "https://api.spoonacular.com"
    const apiKey = "e172f1db403d4a06bb436f5c273a5159"

    //Url funcionando com chave
    //https://api.spoonacular.com/recipes/complexSearch?apiKey=e172f1db403d4a06bb436f5c273a5159&type=breakfast&minServings=2&number=4
    //${baseUrl}/recipes/complexSearch?apiKey=${apiKey}&type=${categoria}&minServings=2&number=${resultados}

    try {
      const response = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=e172f1db403d4a06bb436f5c273a5159&type=breakfast&minServings=2&number=4`)
      setApiSpoon([...apiSpoon, ...response.data.results])
      console.log('Requisição bem sucedida!');
    } catch (error) {
      console.log('Erro na requisição');
    }
  }

  useEffect(() => {
    loadApi();
  }, []);

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

      {/* <FlatList
        horizontal={true}
        data={apiSpoon}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.pratosCards}>
            <Image style={styles.imgPrato} source={{uri: item.image}} />
            <View style={styles.pratoInfo}>
              <Text style={styles.nomePrato}>{item.title}</Text>
              <View style={styles.pratoDatas}>
                <Text style={{ fontSize: 14, color: "#fff" }}>10 min</Text>
                <Text style={{ fontSize: 14, color: "#fff" }}>2</Text>
              </View>
            </View>
          </View>
        )}
      /> */}

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
