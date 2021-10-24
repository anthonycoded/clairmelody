import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { config } from "../config/Config";

const Player = () => {
  return (
    <View style={style.container}>
      <Text>Media PLayer </Text>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: "red",
    height: config.hp("8%"),
    position: "absolute",
    width: "100%",
    bottom: 80,
    flex: 1,
  },
});

export default Player;
