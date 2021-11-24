import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { SelectTrack } from "../../store/actions/PlayerActions";
import { config } from "../../config/Config";
import { theme } from "../../config/Theme";

const CardContainer = ({ navigation }) => {
  const data = useSelector((state) => state.songs);

  const dispatch = useDispatch();
  const newest = data[0];
  const selectTrack = () => {
    dispatch(SelectTrack());
  };

  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 32,
          fontWeight: "bold",
          color: theme.colors.primary,
          fontWeight: "bold",
          paddingBottom: config.hp("4%"),
          textAlign: "left",
          width: "100%",
        }}
      >
        Just Released
      </Text>
      <TouchableOpacity style={styles.card} onPress={selectTrack}>
        <Image
          source={{ uri: newest.image }}
          resizeMode="cover"
          style={styles.image}
        ></Image>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{newest.title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#f4f4f4",
    height: config.hp("40%"),
    paddingVertical: config.wp("4%"),
    alignItems: "center",
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
  card: {
    width: "100%",
    height: "75%",
    shadowOffset: {
      width: 0,
      height: config.hp("2%"),
    },
    flexDirection: "column",
    justifyContent: "space-around",
    elevation: config.hp("1%"),
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    shadowColor: "black",
    alignItems: "center",
  },
  image: {
    height: "100%",
    width: "100%",
    borderRadius: 12,
  },
});
export default CardContainer;
