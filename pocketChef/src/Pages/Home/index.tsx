import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./style";
import { Ionicons } from "@expo/vector-icons";
import { categoriaTraducoes, categorias } from "../Mock/ArrayHomeMockado";
import axios from "axios";
import { CardApi } from "../../Components/CardApi";
import { HeaderUserComponent } from "../../Components/HeaderUserComponent";

export interface PropsApi {
  id: number;
  title: string;
  image?: string;
  imageType?: string;
}

type CategoriaKey = keyof typeof categoriaTraducoes;

export function Home() {
  const [apiSpoon1, setApiSpoon1] = useState<PropsApi[]>([]);
  const [apiSpoon2, setApiSpoon2] = useState<PropsApi[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectCategoria, setSelectCategoria] =
    useState<CategoriaKey>("breakfast");
  const resultados = 4;

  const loadApi = async (categoria: string) => {
    const baseUrl = "https://api.spoonacular.com/recipes/complexSearch";
    const apiKey = "1cd605a69c6a4be2afe8f39e2de4477b";

    try {
      const [response1, response2] = await Promise.all([
        axios.get(
          `${baseUrl}?apiKey=${apiKey}&type=${categoria}&minServings=2&number=4`
        ),
        axios.get(
          `${baseUrl}?apiKey=${apiKey}&type=${categoria}&sort=popularity&sortDirection=asc&number=4`
        ),
      ]);
      // setApiSpoon1([...apiSpoon1, ...response1.data.results]);
      // setApiSpoon2([...apiSpoon2, ...response2.data.results]);
      setApiSpoon1(response1.data.results);
      setApiSpoon2(response2.data.results);
      setLoading(false);
      console.log("Requisição bem sucedida!");
    } catch (error) {
      console.log("Erro na requisição");
      setLoading(false);
    }
  };

  useEffect(() => {
    loadApi(selectCategoria);
  }, [selectCategoria]);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <View style={styles.container}>
      <HeaderUserComponent />

      <View style={styles.categoriaContainer}>
        <Text style={styles.categoriaTitle}>Categorias</Text>
        <FlatList
          horizontal={true}
          data={Object.keys(categoriaTraducoes) as CategoriaKey[]}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[
                styles.categoriaCard,
                item === selectCategoria && styles.categoriaCardSelected,
              ]}
              onPress={() => setSelectCategoria(item)}
            >
              <Text style={styles.nomeCategoria}>
                {categoriaTraducoes[item]}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>

      <CardApi
        handleApi={() => loadApi(selectCategoria)}
        spoonApi={apiSpoon1}
        cardXL={true}
      />

      <CardApi
        handleApi={() => loadApi(selectCategoria)}
        spoonApi={apiSpoon2}
      />
    </View>
  );
}

export default Home;
