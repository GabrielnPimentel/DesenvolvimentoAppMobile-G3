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
      image: require("../../Assets/hattorihanzo.jpg"),
    },
    {
      id: 2,
      name: "Alfredo Linguine",
      description: "Chef Linguini é um jovem e desajeitado cozinheiro em ascensão no renomado restaurante Gusteau's em Paris. Apesar de sua falta de habilidades culinárias, ele forma uma parceria improvável com Remy, um rato talentoso na cozinha. Juntos, eles criam pratos excepcionais que conquistam os críticos e clientes.",
      image: require("../../Assets/linguine.jpeg"),
    },
    {
      id: 3,
      name: "Tia Nastácia",
      description: "Tia Nastácia é a amável e talentosa cozinheira do Sítio do Picapau Amarelo, conhecida por seus deliciosos pratos da culinária brasileira e bolos caseiros. Suas receitas, como feijoada e bolos de fubá, conquistam todos que visitam o sítio. Sua habilidade culinária e carinho na cozinha são parte essencial da magia e acolhimento do lugar.",
      image: require("../../Assets/anastacia.jpeg"),
    },
    {
      id: 4,
      name: "Carmen Carmy Berzatto",
      description: "Reconhecido por sua maestria na culinária americana, Carmy é admirado por sua capacidade de criar pratos que combinam técnicas tradicionais com sabores contemporâneos. Seu menu inclui desde costelas defumadas suculentas até hambúrgueres gourmet e tortas de maçã feitas com carinho.",
      image: require("../../Assets/carmen.jpeg"),
    },
    {
      id: 5,
      name: "Richard Slowik",
      description: "Richard Slowik é um chef renomado na culinária inglesa. Conhecido por sua abordagem meticulosa e criativa, Slowik transforma ingredientes simples em pratos sofisticados que capturam a essência da gastronomia britânica.",
      image: require("../../Assets/slowik.jpeg"),
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