import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./AuthNavigator";
import DrawerNavigator from "./DrawerNavigator";
import Header from "../components/Header";

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Auth"
          screenOptions={{
            headerStyle: {
              backgroundColor: "white",
            },
            headerShown: true,
            headerTitle: (props) => <Header {...props} />,
            headerTitleAlign: "center",
          }}
        >
          <Stack.Screen
            name="Drawer"
            component={DrawerNavigator}
            options={{
              headerBackVisible: false,
            }}
          ></Stack.Screen>

          <Stack.Screen name="Auth" component={AuthNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default AppNavigation;
