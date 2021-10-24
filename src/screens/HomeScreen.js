import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

import { config } from "../config/Config";
import { theme } from "../config/Theme";
import NewSection from "./homeScreen/NewSection";

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <NewSection></NewSection>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingTop: config.hp("1%"),
    paddingBottom: config.hp("2%"),
  },
});

export default HomeScreen;
