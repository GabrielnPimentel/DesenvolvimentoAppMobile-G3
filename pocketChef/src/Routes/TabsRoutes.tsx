import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Home from "../Pages/Home";
import { styles } from "./style";
import { Text, View } from "react-native";
import Icon from "@expo/vector-icons/Ionicons";
import Cadastro from "../Pages/Cadastro";
import Sobre from "../Pages/Sobre";
import Favoritos from "../Pages/Favoritos";
import Contas from "../Pages/Contas";

export type RootTabParamsList = {
  TabHome: { name: string };
  TabFavoritos: { name: string };
  TabSobre: { name: string };
};

const Tab = createBottomTabNavigator<RootTabParamsList>();

export function TabsRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#e3f9fa",
          height: 60,
        },
        headerShown: false, // Oculta o cabeçalho em todas as telas
      }}
    >
      <Tab.Screen
        name="TabHome"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.boxNavigation}>
              <Icon
                name="home"
                size={focused ? 25 : 20}
                color={focused ? "#1c2324" : "#435d5f"}
              />
              <Text style={styles.nameRoute}>Home</Text>
            </View>
          ),

          tabBarLabel: "",
        }}
      />

      <Tab.Screen
        name="TabFavoritos"
        component={Favoritos}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.boxNavigation}>
              <Icon
                name="star"
                size={focused ? 25 : 20}
                color={focused ? "#1c2324" : "#435d5f"}
              />
              <Text style={styles.nameRoute}>Favoritos</Text>
            </View>
          ),
          tabBarLabel: "",
        }}
      />

      <Tab.Screen
        name="TabSobre"
        component={Sobre}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.boxNavigation}>
              <Icon
                name="information-circle"
                size={focused ? 25 : 20}
                color={focused ? "#1c2324" : "#435d5f"}
              />
              <Text style={styles.nameRoute}>Sobre</Text>
            </View>
          ),
          tabBarLabel: "",
        }}
      />
    </Tab.Navigator>
  );
}
