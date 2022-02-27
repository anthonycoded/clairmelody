import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import HomeScreen from "../screens/homeScreen/HomeScreen";
import ProfileSettingsNavigator from "./ProfileSettingsNavigator";
import GoBack from "../components/GoBack";

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={({ navigation }) => ({
          headerShown: false,
          headerBackVisible: false,
        })}
      ></Stack.Screen>
      <Stack.Screen
        name="ProfileNavigator"
        component={ProfileSettingsNavigator}
        options={({ navigation }) => ({
          headerBackVisible: false,

          headerLeft: () => {
            return <GoBack navigation={navigation} />;
          },
        })}
      ></Stack.Screen>
    </Stack.Navigator>
  );
};

export default MainNavigator;
