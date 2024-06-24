import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Image, Text, View } from "react-native";
import { styles } from "./style";
import { Ionicons } from "@expo/vector-icons";
import { categorias, pratosPop } from "../Mock/ArrayHomeMockado";
import axios from "axios";

interface PropsApi {
  id: number;
  title: string;
  image?: string;
  imageType?: string;
}

export function Home() {
  const [apiSpoon1, setApiSpoon1] = useState<PropsApi[]>([]);
  const [apiSpoon2, setApiSpoon2] = useState<PropsApi[]>([]);
  const [apiSpoon3, setApiSpoon3] = useState<PropsApi[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const categoria = "breakfast";
  const resultados = 4;

  const loadApi = async () => {
    const baseUrl = "https://api.spoonacular.com";
    const apiKey = "b5dbf5bde7e842f68e296cb71feae8c4";

    //Url funcionando com chave
    //https://api.spoonacular.com/recipes/complexSearch?apiKey=e172f1db403d4a06bb436f5c273a5159&type=breakfast&minServings=2&number=4
    //${baseUrl}/recipes/complexSearch?apiKey=${apiKey}&type=${categoria}&minServings=2&number=${resultados}

    try {
      const [response1, response2, response3] = await Promise.all([
        axios.get(
          `https://api.spoonacular.com/recipes/complexSearch?apiKey=b5dbf5bde7e842f68e296cb71feae8c4&type=breakfast&minServings=2&number=4`
        ),
        axios.get(
          `https://api.spoonacular.com/recipes/complexSearch?apiKey=b5dbf5bde7e842f68e296cb71feae8c4&type=breakfast&sort=popularity&sortDirection=asc&number=4`
        ),
        axios.get(
          `https://api.spoonacular.com/recipes/complexSearch?apiKey=b5dbf5bde7e842f68e296cb71feae8c4&type=breakfast&sort=popularity&number=4`
        ),
      ]);
      setApiSpoon1([...apiSpoon1, ...response1.data.results]);
      setApiSpoon2([...apiSpoon2, ...response2.data.results]);
      setApiSpoon3([...apiSpoon3, ...response3.data.results]);
      setLoading(false);
      console.log("Requisição bem sucedida!");
    } catch (error) {
      console.log("Erro na requisição");
      setLoading(false);
    }
  };

  useEffect(() => {
    loadApi();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

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
          data={apiSpoon1}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.pratosCards}>
              <Image style={styles.imgPrato} source={{ uri: item.image }} />
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

      <View style={styles.receitasContainer}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
          Receitas Populares
        </Text>
        <FlatList
          horizontal={true}
          data={apiSpoon2}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.receitasCard}>
              <Image style={styles.imgPratoPop} source={{ uri: item.image }} />
              <Text style={styles.receitaNome}>{item.title}</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
}

export default Home;
