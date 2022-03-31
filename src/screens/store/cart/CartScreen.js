import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { config } from "../../../config/Config";
import { theme } from "../../../config/Theme";

const CartScreen = () => {
  return (
    <View>
      <Text>CartScreen</Text>

      <View>
        <TouchableOpacity style={{ backgroundColor: theme.colors.primary }}>
          Procceed to Checkout
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartScreen;
