import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { TabsRoutes } from "./TabsRoutes";

export type Pocketchef = {
  StackHome: { name: string };
};

const Stack = createNativeStackNavigator<Pocketchef>();

export function StackRoutes() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="StackHome" component={TabsRoutes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
