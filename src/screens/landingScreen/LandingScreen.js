import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { useTheme } from "react-native-paper";

import Login from "./Login";
import { config } from "../../config/Config";
import { theme } from "../../config/Theme";
import AuthContainer from "./authContainer/AuthContainer";
import BannerImage from "./BannerImage";

const LandingScreen = ({ navigation }) => {
  const { colors } = useTheme();
  return (
    <ScrollView style={styles.container}>
      <BannerImage />
      <AuthContainer colors={colors} navigation={navigation} />
      <Login navigation={navigation} colors={colors} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,
  },
  helpContainer: {
    paddingHorizontal: config.wp("4%"),
  },
});

export default LandingScreen;
