import { View, Text, Image } from "react-native";
import React from "react";
import { config } from "../../../config/Config";
import { theme } from "../../../config/Theme";
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

const CartItem = ({ item }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        height: config.hp("10%"),
        overflow: "hidden",
        marginBottom: config.hp("2%"),
        backgroundColor: "lightgray",
        borderRadius: 7,
        padding: 4,
      }}
    >
      <Image
        resizeMethod="scale"
        resizeMode="cover"
        source={{
          uri: item.images ? item.images[0] : item.image,
        }}
        style={{
          width: config.wp("30%"),
          height: "100%",
          borderRadius: 7,
        }}
      ></Image>
      <View
        style={{
          flexDirection: "column",
          alignItems: "flex-end",
          paddingHorizontal: config.wp("1%"),

          flex: 1,
        }}
      >
        <Text
          style={{
            fontSize: 20,
            textTransform: "capitalize",
            fontWeight: "bold",
            color: theme.colors.primary,
          }}
        >
          {item.title}
        </Text>
        <Text
          style={{
            fontSize: 18,
            color: theme.colors.primary,
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          {item.price
            ? `$${item.price}`
            : `$${item?.leasePrice?.toFixed(
                2
              )} /$${item?.purchasePrice?.toFixed(2)}`}
        </Text>
        <Text
          style={{
            fontSize: 14,
            fontWeight: "bold",
            color: theme.colors.primary,
          }}
        >
          Qty: {item.qty}
        </Text>
      </View>
    </View>
  );
};

export default CartItem;
