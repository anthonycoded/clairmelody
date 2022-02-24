import React from "react";
import { View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProfileScreen from "../screens/profile/ProfileScreen";
import GoBack from "../components/GoBack";

const Stack = createNativeStackNavigator();
const ProfileSettingsNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Profile "
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={({ navigation }) => ({
          headerShown: false,
          headerBackVisible: true,
          headerLeft: () => {
            return <GoBack navigation={navigation} />;
          },
        })}
      ></Stack.Screen>
    </Stack.Navigator>
  );
};

export default ProfileSettingsNavigator;
