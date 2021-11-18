import React from "react";
import { View, Text, Image, ImageBackground, StyleSheet } from "react-native";
import { config } from "../../config/Config";

const SongGridCard = ({ item }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode="contain"
        source={{ uri: item.image }}
        style={styles.image}
      ></ImageBackground>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{item.title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginRight: config.wp("2% "),
    borderRadius: 4,
    height: config.hp("25%"),
    alignItems: "center",
    elevation: config.hp("1%"),
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    shadowColor: "black",
  },
  image: {
    width: config.wp("60%"),
    height: 200,
    borderRadius: 4,
    backgroundColor: "gray",
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: config.wp("4%"),
    paddingBottom: 20,
  },
  title: {
    color: "white",
    fontWeight: "bold",
    fontSize: config.hp("3%"),
    textAlign: "left",
    width: "100%",
    paddingBottom: config.hp("2%"),
  },
});

export default SongGridCard;
