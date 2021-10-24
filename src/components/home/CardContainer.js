import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Icon from "react-native-vector-icons/Ionicons";
import { SelectTrack } from "../../store/actions/PlayerActions";
import Carousel from "../Carousel";
import { config } from "../../config/Config";
import { theme } from "../../config/Theme";

const CardContainer = ({ navigation }) => {
  const data = useSelector((state) => state.songs);
  const dispatch = useDispatch();

  const selectTrack = (id) => {
    dispatch(SelectTrack(id));
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.titleContainer}
        onPress={() => navigation.navigate("Accounts")}
        activeOpacity={0.85}
      >
        <Text style={styles.title}>Just Released</Text>
        <Icon
          name="chevron-forward"
          style={styles.Icon}
          size={config.hp("2.7%")}
          backgroundColor="black"
        />
      </TouchableOpacity>
      <View style={styles.Cards}>
        <Carousel
          items={data}
          navigation={navigation}
          selectTrack={selectTrack}
          type={"songs"}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Cards: {
    height: "100%",
    overflow: "hidden",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: config.hp("1%"),
  },
  container: {
    width: "100%",
    backgroundColor: "#f4f4f4",

    height: config.hp("50%"),
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",

    paddingVertical: config.hp("1%"),
    paddingHorizontal: config.wp("4%"),
  },
  title: {
    color: theme.colors.primary,
    fontWeight: "bold",
    fontSize: config.hp("2.15%"),
  },
});
export default CardContainer;
