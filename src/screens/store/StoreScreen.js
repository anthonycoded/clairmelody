import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { config } from "../../config/Config";
import { theme } from "../../config/Theme";
import NewArrivals from "./sections/newArrivals/NewArrivals";
import BeatGrid from "./sections/beats/BeatGridSection";

const StoreScreen = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate("Collection")}
        style={styles.banner}
      >
        <Text style={styles.bannerTitle}>Dropping </Text>
        <Text style={styles.bannerText}>Summer 2022</Text>
      </TouchableOpacity>

      <View style={styles.section}>
        <NewArrivals navigation={navigation}></NewArrivals>
        <BeatGrid navigation={navigation}></BeatGrid>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  banner: {
    backgroundColor: theme.colors.primary,
    width: config.wp("90%"),
    height: config.hp("12%"),
    borderRadius: 25,
    elevation: config.hp("1%"),
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    shadowColor: "black",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  bannerText: {
    color: "white",
    fontSize: 26,
  },
  bannerTitle: {
    color: "white",
    fontSize: 22,
    paddingBottom: 4,
  },
  container: {
    flexDirection: "column",
    alignItems: "center",
    paddingTop: config.hp(2),
    paddingBottom: 150,
  },
  section: {
    paddingHorizontal: config.wp("4%"),
    width: "100%",
    paddingVertical: config.hp("4%"),
  },
  sectionTitle: {
    fontSize: 22,
  },
  title: {
    fontSize: 22,
    padding: 10,
    fontWeight: "bold",
  },
});

export default StoreScreen;
