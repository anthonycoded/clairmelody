import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  FlatList,
} from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { config } from "../../../config/Config";
import { theme } from "../../../config/Theme";
import CartItem from "./CartItem";

const CartScreen = ({ navigation }) => {
  const cart = useSelector((state) => state.cart.cart);

  console.log(cart);

  const renderItem = ({ item }) => <CartItem item={item} />;

  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 22,
          color: theme.colors.primary,
          fontWeight: "bold",
          width: "100%",
          textAlign: "center",
          marginBottom: 25,
        }}
      >
        Shopping Cart
      </Text>
      <FlatList
        contentContainerStyle={{ height: config.hp("56%") }}
        data={cart}
        renderItem={renderItem}
        keyExtractor={(item) => item._id.toString()}
      />
      <View style={{ paddingBottom: config.hp("8%") }}>
        <View
          style={{ paddingVertical: config.hp("2%"), alignItems: "center" }}
        >
          <View
            style={{
              flexDirection: "row",
              width: "100%",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ fontSize: 20 }}>Subtotal: </Text>
            <Text style={{ fontSize: 20 }}>$9.99</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              width: "100%",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ fontSize: 20 }}>Taxes/Fees: </Text>
            <Text style={{ fontSize: 20 }}>$2.99</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              width: "100%",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ fontSize: 22, fontWeight: "bold" }}>Total: </Text>
            <Text style={{ fontSize: 22, fontWeight: "bold" }}>$12.99</Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate("Checkout")}
            style={{
              backgroundColor: theme.colors.primary,
              width: "100%",
              borderRadius: "12%",
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 20,
                textAlign: "center",
                paddingVertical: 10,
                fontWeight: "bold",
              }}
            >
              Procceed to Checkout
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: config.wp("4%"),
    paddingTop: config.hp("2%"),
    paddingBottom: config.hp("12%"),
    height: "100%",
  },
});

export default CartScreen;
