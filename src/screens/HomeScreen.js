import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

import { config } from "../config/Config";
import { theme } from "../config/Theme";
import NewSection from "./homeScreen/NewSection";
import BeatsSection from "../components/home/BeatsSection";

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <NewSection></NewSection>
      <BeatsSection navigation={navigation}></BeatsSection>
      <NewSection></NewSection>
      <BeatsSection navigation={navigation}></BeatsSection>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingTop: config.hp("1%"),
    paddingBottom: config.hp("50%"),
    paddingHorizontal: config.wp("4%"),
  },
});

export default HomeScreen;
