import React from "react";
import { useDispatch } from "react-redux";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { config } from "../../../../config/Config";
import { SelectTrack } from "../../../../store/actions/PlayerActions";

const BeatCard = ({ item }) => {
  const dispatch = useDispatch();

  const selectTrack = () => {
    dispatch(SelectTrack(item));
  };
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => selectTrack(item._id)}
    >
      <Image
        source={{ uri: item.image }}
        style={styles.image}
        resizeMode="cover"
        resizeMethod="scale"
      ></Image>
      <Text style={{ textTransform: "capitalize" }}>{item.title}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    height: config.hp("25%"),
    width: config.wp("70%"),
    marginBottom: 25,
    marginRight: 10,
    elevation: config.hp("1%"),
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    shadowColor: "black",
    borderRadius: 4,
  },
  image: {
    height: "100%",
    width: "100%",
    borderRadius: 4,
  },
});

export default BeatCard;
