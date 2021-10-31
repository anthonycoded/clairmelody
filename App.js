import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from "react-redux";
import store from "./src/store/Store";
import DrawerNavigator from "./src/navigation/DrawerNavigator";
import { config } from "./src/config/Config";
import { theme } from "./src/config/Theme";
import { View, Image, Text } from "react-native";

const Stack = createNativeStackNavigator();

function LogoTitle() {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text style={{ fontSize: 22 }}>Jay's World</Text>
      <Image
        style={{ width: 30, height: 30 }}
        source={require("./assets/earth.png")}
      />
    </View>
  );
}

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName=""
          screenOptions={{ headerTitle: (props) => <LogoTitle {...props} /> }}
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
