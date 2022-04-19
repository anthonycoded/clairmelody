import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import LottieView from "lottie-react-native";
import { theme } from "../../../config/Theme";
import { config } from "../../../config/Config";

const CheckoutSuccess = ({ navigation }) => {
  return (
    <View style={{ height: "100%" }}>
      <Text>Payment Success</Text>
      <View
        style={{
          alignItems: "center",
          justifyContent: "flex-start",

          paddingTop: 25,
        }}
      >
        <LottieView
          loop={false}
          autoPlay
          style={{
            width: 160,
            height: 160,
          }}
          source={require("../../../../assets/lottieFiles/success.json")}
        />
      </View>
      <Text
        style={{
          fontSize: 22,
          color: theme.colors.primary,
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        Payment Success
      </Text>

      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <TouchableOpacity
          style={{
            width: config.wp("40%"),
            backgroundColor: theme.colors.primary,
          }}
        >
          <Text style={{ color: "white", fontWeight: "bold" }}>Download</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: config.wp("40%"),
            backgroundColor: theme.colors.primary,
          }}
        >
          <Text style={{ color: "white", fontWeight: "bold" }}>Email Link</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CheckoutSuccess;
