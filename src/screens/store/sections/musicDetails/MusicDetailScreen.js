import { View, Text, StyleSheet, ImageBackground } from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { config } from "../../../../config/Config";
import { theme } from "../../../../config/Theme";

const MusicDetailScreen = ({ navigation }) => {
  const selectedProduct = useSelector(
    (state) => state.products.selectedProduct
  );

  return (
    <View style={styles.container}>
      <ImageBackground
        source={{ uri: selectedProduct?.image }}
        style={styles.backgroundImage}
        resizeMode="cover"
      ></ImageBackground>
      <View
        style={{
          position: "absolute",
          backgroundColor: "white",
          height: config.hp("55%"),
          width: "100%",
          bottom: 0,
          borderTopRightRadius: 25,
          borderTopLeftRadius: 25,
          paddingHorizontal: config.wp("4%"),
          paddingVertical: config.hp("2%"),
        }}
      >
        <Text
          style={{
            fontSize: 22,
            color: theme.colors.primary,
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          {selectedProduct?.title}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "flex-start",
    height: "100%",
  },
  backgroundImage: { width: "100%", height: config.hp("45%") },
});

export default MusicDetailScreen;
