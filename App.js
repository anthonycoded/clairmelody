import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from "react-redux";
import store from "./src/store/Store";
import DrawerNavigator from "./src/navigation/DrawerNavigator";
import { config } from "./src/config/Config";
import { theme } from "./src/config/Theme";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName=""
          screenOptions={{
            title: "Threadly",
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: theme.colors.primary,
              textAlign: "center",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        >
          <Stack.Screen
            name="Drawer"
            component={DrawerNavigator}
            options={{}}
          ></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
