import React, { useState } from "react";
import { View, Image, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { config } from "../../config/Config";

const BannerImage = () => {
  return (
    <View style={styles.imageContainer}>
      <Image
        style={styles.image}
        source={require("../../../assets/banner.jpg")}
        resizeMode="contain"
      />
    </View>
  );
};
const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
  },
  imageContainer: {
    height: config.hp("35%"),
  },
});
export default BannerImage;
