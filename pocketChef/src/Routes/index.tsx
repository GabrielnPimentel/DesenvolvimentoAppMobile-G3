import React from "react";
import { StackRoutes } from "./StackRoutes";
import { NavigationContainer } from "@react-navigation/native";
import DrawerRoutes from "./drawer.routes";

export function Routes() {
  return (
    <NavigationContainer>
      <StackRoutes />
      <DrawerRoutes />
    </NavigationContainer>
  );
}
