import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { styles } from "./style";

const Sobre = () => {
  const chefs = [
    {
      id: 1,
      name: "Hattori Hanzo",
      description:
        "Hattori Hanzo é um mestre chef nascido em Okinawa e criado em Xangai, cujos olhos serenos e mãos precisas escondem o segredo de um lendário forjador de espadas samurais. Sua habilidade transcende a culinária, imbuindo cada prato e lâmina com uma perfeição quase sobrenatural.",
      image: require("../../assets/hattorihanzo.jpg"),
    },
    {
      id: 2,
      name: "Chef 2",
      description: "Descrição do Chef 2.",
      image: require("../../assets/hattorihanzo.jpg"),
    },
    {
      id: 3,
      name: "Chef 3",
      description: "Descrição do Chef 3.",
      image: require("../../assets/hattorihanzo.jpg"),
    },
    {
      id: 4,
      name: "Chef 4",
      description: "Descrição do Chef 4.",
      image: require("../../assets/hattorihanzo.jpg"),
    },
    {
      id: 5,
      name: "Chef 5",
      description: "Descrição do Chef 5.",
      image: require("../../assets/hattorihanzo.jpg"),
    },
  ];

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <Text style={styles.titulo}>Sobre</Text>
        {chefs.map((chef) => (
          <View key={chef.id} style={styles.chefContainer}>
            <Image source={chef.image} style={styles.chefImage} />
            <View style={styles.chefInfo}>
              <Text style={styles.chefName}>{chef.name}</Text>
              <Text style={styles.chefDescription}>{chef.description}</Text>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default Sobre;
