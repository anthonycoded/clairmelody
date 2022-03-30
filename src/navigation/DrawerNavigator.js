import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import BottomTabNavigator from "./BottomTabNavigator";
import DrawerContent from "./DrawerContent";
import StoreNavigator from "./StoreNavigator";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen
        name="Shopper"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      ></Drawer.Screen>
      <Drawer.Screen name="Store" component={StoreNavigator}></Drawer.Screen>
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
