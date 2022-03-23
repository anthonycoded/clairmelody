import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import HomeScreen from "../screens/homeScreen/HomeScreen";
import StoreScreen from "../screens/store/StoreScreen";
import GoBack from "../components/GoBack";

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="index"
        component={StoreScreen}
        options={({ navigation }) => ({
          headerShown: false,
          headerBackVisible: false,
        })}
      ></Stack.Screen>
    </Stack.Navigator>
  );
};

export default MainNavigator;
