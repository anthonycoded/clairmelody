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
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: item.image }}
          style={styles.image}
          resizeMode="cover"
          resizeMethod="scale"
        ></Image>
      </View>
      <Text
        style={{
          textTransform: "capitalize",
          fontSize: 22,
          fontWeight: "400",
        }}
      >
        {item.title}
      </Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    height: config.hp("25%"),
    width: config.wp("70%"),
    marginBottom: 25,
    marginRight: 10,

    borderRadius: 4,
  },
  image: {
    height: "100%",
    width: "100%",
    borderRadius: 4,
  },
  imageContainer: {
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    shadowColor: "black",
    elevation: config.hp("1%"),
    marginBottom: config.hp("1%"),
  },
});

export default BeatCard;
