import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { config } from "../config/Config";
import { FontAwesome5 } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
const url =
  "https://storage.googleapis.com/beatdealer-images/0eb8d9cf-1f70-46da-8ae8-b3e5331ca474";

const Player = () => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: url }} style={styles.image} />
      <Text style={styles.title}>Media PLayer </Text>
      <TouchableOpacity style={{ width: 50 }}>
        <FontAwesome5 name="play" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
    height: config.hp("8%"),
    position: "absolute",
    width: "100%",
    bottom: 80,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: config.wp("2%"),
  },
  image: {
    height: 60,
    width: 60,
  },
  title: {
    fontSize: 20,
  },
});

export default Player;
