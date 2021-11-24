import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

import { config } from "../config/Config";
import { theme } from "../config/Theme";
import CardContainer from "../components/home/CardContainer";
import BeatsSection from "../components/home/BeatsSection";
import BeatGrid from "../components/home/BeatGrid";

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <CardContainer></CardContainer>
      <BeatsSection navigation={navigation}></BeatsSection>
      <BeatGrid></BeatGrid>
      <View style={{ paddingBottom: config.hp("16%") }}></View>
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
