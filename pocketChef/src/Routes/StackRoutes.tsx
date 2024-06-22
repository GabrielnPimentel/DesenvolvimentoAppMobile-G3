import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { TabsRoutes } from "./TabsRoutes";
import Login from "../Pages/Login";
import Cadastro from "../Pages/Cadastro";

export type Pocketchef = {
  StackLogin: { name: string };
  StackCadastro: { name: string };
  StackHome: { name: string };
};

const Stack = createNativeStackNavigator<Pocketchef>();

export function StackRoutes() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="StackLogin" component={Login} />
      <Stack.Screen name="StackCadastro" component={Cadastro} />
        <Stack.Screen name="StackHome" component={TabsRoutes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
