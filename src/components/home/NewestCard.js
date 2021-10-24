import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from "react-native";

import { config } from "../../config/Config";
import { theme } from "../../config/Theme";

const NewestCard = ({ item }) => {
  const { title } = item;
  console.log(item);
  return (
    <View style={styles.slide}>
      <TouchableOpacity
        style={styles.card}
        onPress={() => {
          navigation.navigate("Account", {
            id: id,
          });
        }}
      >
        <ImageBackground
          source={{ uri: item.image }}
          resizeMode="cover"
          style={styles.image}
        >
          <View>
            <Text style={styles.titleMain}>{title}</Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  slide: {
    flexBasis: "100%",
    flex: 1,
    maxWidth: "100%",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    borderRadius: config.hp("12%"),
    height: config.hp("40%"),
  },
  card: {
    backgroundColor: "white",
    width: config.wp("90%"),
    height: "90%",
    shadowOffset: {
      width: 0,
      height: config.hp("2%"),
    },

    flexDirection: "column",
    justifyContent: "space-around",
    borderRadius: config.hp("12%"),
    elevation: config.hp("1%"),
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    shadowColor: "black",
  },

  titleMain: {
    fontSize: config.hp("2.25%"),
    color: "#0EA44B",
    fontWeight: "bold",
    textTransform: "capitalize",
  },
  image: {
    height: "100%",
    width: "100%",
    borderRadius: 12,
  },
});

export default NewestCard;
