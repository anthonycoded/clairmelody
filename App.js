import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import store from "./src/store/Store";
import { StatusBar } from "expo-status-bar";

import AppWrapper from "./AppWrapper";

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppWrapper></AppWrapper>
      </NavigationContainer>
      <StatusBar style="light"></StatusBar>
    </Provider>
  );
}

export default App;
