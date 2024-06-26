import { createDrawerNavigator } from "@react-navigation/drawer";
import { Feather } from "@expo/vector-icons";
import { TabsRoutes } from "./TabsRoutes";


const Drawer = createDrawerNavigator();

export default function DrawerRoutes() {
    return (
      <Drawer.Navigator screenOptions={{ title: '' }}>
        <Drawer.Screen
         name="home"
         component={TabsRoutes}
         options={{
         drawerIcon: ({color , size}) => <Feather name="home" color={color} size={size}/>,
         drawerLabel: ' Inicio'

         }}
        />
      </Drawer.Navigator>
        

    )
}
