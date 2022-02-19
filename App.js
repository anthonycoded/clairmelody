import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import store from "./src/store/Store";
import { StatusBar } from "expo-status-bar";
import { Provider as PaperProvider } from "react-native-paper";
import { theme } from "./src/config/Theme";
import AppWrapper from "./AppWrapper";

function App() {
  return (
    <Provider store={store}>
      <PaperProvider theme={theme}>
        <AppWrapper></AppWrapper>

        <StatusBar style="light"></StatusBar>
      </PaperProvider>
    </Provider>
  );
}

export default App;
