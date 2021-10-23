import React from "react";
import { View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProfileScreen from "../screens/Profile/ProfileScreen";

const Stack = createNativeStackNavigator();
const ProfileSettingsNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
      ></Stack.Screen>
    </Stack.Navigator>
  );
};

export default ProfileSettingsNavigator;
