import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import store from "./src/store/Store";

import AppWrapper from "./AppWrapper";

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppWrapper></AppWrapper>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
