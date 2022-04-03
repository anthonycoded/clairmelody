import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import React from "react";
import { theme } from "../config/Theme";

const CartButton = () => {
  const cart = useSelector((state) => state.cart.cart);
  return (
    <View style={{ paddingHorizontal: 5 }}>
      <Ionicons name="cart" size={32} color={theme.colors.primary} />
      <Text style={{ position: "absolute", right: 0, top: 0, fontSize: 18 }}>
        {cart?.length}
      </Text>
    </View>
  );
};

export default CartButton;
