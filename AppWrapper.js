import React, { useEffect, useState } from "react";
import AppLoading from "expo-app-loading";
import { View, Text, Image } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { GetBeats } from "./src/store/actions/beatActions";
import { GetSongs } from "./src/store/actions/songActions";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DrawerNavigator from "./src/navigation/DrawerNavigator";

const AppWrapper = () => {
  const [ready, setReady] = useState(false);
  const Stack = createNativeStackNavigator();
  const dispatch = useDispatch();

  function loadData() {
    dispatch(GetBeats());
    dispatch(GetSongs());
  }

  // useEffect(() => {
  //   loadData();
  // }, []);

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
  if (!ready) {
    return (
      <AppLoading
        startAsync={loadData}
        onFinish={() => setReady(true)}
        onError={console.warn}
      />
    );
  }
  return (
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
  );
};

export default AppWrapper;
