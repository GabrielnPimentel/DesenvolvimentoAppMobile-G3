import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Text,
  TouchableOpacity,
  View,
  ScrollView
} from "react-native";
import { styles } from "./style";
import { categoriaTraducoes } from "../Mock/ArrayHomeMockado";
import axios from "axios";
import { CardApi } from "../../Components/CardApi";
import { HeaderUserComponent } from "../../Components/HeaderUserComponent";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAuth } from "../../Hooks/useAuth";

export interface PropsApi {
  id: number;
  title: string;
  image?: string;
  imageType?: string;
}

type CategoriaKey = keyof typeof categoriaTraducoes;

export function Home() {
  const {favoritos, setFavoritos} = useAuth();

  const [apiSpoon1, setApiSpoon1] = useState<PropsApi[]>([]);
  const [apiSpoon2, setApiSpoon2] = useState<PropsApi[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectCategoria, setSelectCategoria] =
    useState<CategoriaKey>("breakfast");
    const [modalAberto, setModalAberto] = useState<boolean>(false);
    const resultados = 4;

  const abrirOuFecharModal = () => {
    setModalAberto(!modalAberto)
  }

  const loadApi = async (categoria: string) => {
    const baseUrl = "https://api.spoonacular.com/recipes/complexSearch";
    const apiKey = "b5dbf5bde7e842f68e296cb71feae8c4";

    try {
      const [response1, response2] = await Promise.all([
        axios.get(
          `${baseUrl}?apiKey=${apiKey}&type=${categoria}&minServings=2&number=4`
        ),
        axios.get(
          `${baseUrl}?apiKey=${apiKey}&type=${categoria}&sort=popularity&sortDirection=asc&number=4`
        ),
      ]);
      setApiSpoon1(response1.data.results);
      setApiSpoon2(response2.data.results);
      setLoading(false);
      console.log("Requisição bem sucedida!");
    } catch (error) {
      console.log("Erro na requisição");
      setLoading(false);
    }
  };

  const loadFavoritos = async () => {
    try {
      const favoritosJson = await AsyncStorage.getItem("favoritos");
      if (favoritosJson) {
        setFavoritos(JSON.parse(favoritosJson));
      }
    } catch (error) {
      console.error("Erro ao carregar favoritos:", error);
    }
  };

  const favoritar = async (item: PropsApi) => {
    let novosFavoritos;
    if (favoritos.some((fav) => fav.id === item.id)) {
      novosFavoritos = favoritos.filter((fav) => fav.id !== item.id);
    } else {
      novosFavoritos = [...favoritos, item];
    }
    setFavoritos(novosFavoritos);
    try {
      await AsyncStorage.setItem("favoritos", JSON.stringify(novosFavoritos));
    } catch (error) {
      console.error("Erro ao salvar favorito:", error);
    }
  };

  const isFavorite = (id: number) => {
    return favoritos.some(fav => fav.id === id);
  };

  useEffect(() => {
    loadApi(selectCategoria);
    loadFavoritos();
  }, [selectCategoria]);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <ScrollView style={styles.container}>
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
        favoritar={favoritar}
        isFavorite={isFavorite}
      />

      <CardApi
        handleApi={() => loadApi(selectCategoria)}
        spoonApi={apiSpoon2}
        favoritar={favoritar}
        isFavorite={isFavorite}
      />

    </ScrollView>
  );
}

export default Home;
