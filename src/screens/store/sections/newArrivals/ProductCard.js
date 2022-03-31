import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { config } from "../../../../config/Config";
import { Ionicons } from "@expo/vector-icons";
import { AddToCart } from "../../../../store/actions/cartActions";
import { theme } from "../../../../config/Theme";

const ProductCard = ({ item, navigation }) => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  function addToCart(id) {
    dispatch(AddToCart(id));
  }
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("ProductDetails")}
      style={styles.container}
    >
      <Image
        resizeMode="cover"
        source={item.images}
        style={{
          width: "100%",
          height: 200,
          borderRadius: 20,
          marginBottom: 10,
        }}
      ></Image>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          paddingHorizontal: config.wp("4%"),
        }}
      >
        <View>
          <Text
            style={{
              width: "100%",
              textTransform: "capitalize",
              textAlign: "left",
            }}
          >
            {item.title}
          </Text>
          <Text style={{ width: "100%", textTransform: "capitalize" }}>
            ${item.price}
          </Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Ionicons
            onPress={() => addToCart(item._id)}
            name="cart"
            size={28}
            color={theme.colors.primary}
          />
          <Text
            style={{
              transform: [{ translateX: -5 }, { translateY: -5 }],
              fontSize: 22,
            }}
          >
            {cart.cart?.length}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    height: config.hp("32%"),
    marginRight: config.wp("4%"),
    width: config.wp("60%"),
    borderRadius: 25,
    paddingHorizontal: config.wp("2%"),
    paddingVertical: config.hp("1.25%"),
    elevation: config.hp("1%"),
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    shadowColor: "gray",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: 4,
  },
});

export default ProductCard;
