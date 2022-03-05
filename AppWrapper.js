import React, { useEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AppLoading from "expo-app-loading";
import { View, Text, Image } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Asset } from "expo-asset";
import AppNavigation from "./src/navigation/AppNavigation";
import { theme } from "./src/config/Theme";
import { GetSongs } from "./src/store/actions/songActions";
import { GetBeats } from "./src/store/actions/beatActions";

const AppWrapper = () => {
  const [ready, setReady] = useState(false);
  const Stack = createNativeStackNavigator();
  const dispatch = useDispatch();

  async function loadCacheAssets() {
    const images = [require("./assets/banner.jpg")];

    const cacheImages = images.map((image) => {
      return Asset.fromModule(image).downloadAsync();
    });
    return Promise.all(cacheImages);
  }

  useEffect(() => {
    dispatch(GetSongs());
    dispatch(GetBeats());
  }, []);

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
        startAsync={loadCacheAssets}
        onFinish={() => setReady(true)}
        onError={console.warn}
      />
    );
  }
  return <AppNavigation />;
};

export default AppWrapper;
