import React from "react";
import { useDispatch } from "react-redux";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { config } from "../../../../config/Config";
import { SelectProduct } from "../../../../store/actions/productActions";

const BeatCard = ({ item, navigation }) => {
  const dispatch = useDispatch();

  function select() {
    dispatch(SelectProduct(item));
    navigation.navigate("MusicDetails");
  }

  return (
    <TouchableOpacity style={styles.container} onPress={select}>
      <Image
        source={{ uri: item.image }}
        style={styles.image}
        resizeMode="cover"
        resizeMethod="scale"
      ></Image>
      <Text style={{ textTransform: "capitalize", marginTop: 5, fontSize: 16 }}>
        {item.title}
      </Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    height: config.hp("13%"),
    width: config.wp("42%"),

    marginBottom: 25,
    marginRight: 10,
    elevation: config.hp("1%"),
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
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
