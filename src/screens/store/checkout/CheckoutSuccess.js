import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import LottieView from "lottie-react-native";
import { theme } from "../../../config/Theme";
import { config } from "../../../config/Config";
import { Feather, FontAwesome5 } from "@expo/vector-icons";

const CheckoutSuccess = ({ navigation }) => {
  return (
    <View style={{ height: "100%" }}>
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

      <View
        style={{
          flexDirection: "column",
          justifyContent: "flex-end",
          paddingHorizontal: config.wp("4%"),
          flex: 1,
          alignItems: "center",
          paddingBottom: config.hp("20%"),
        }}
      >
        <TouchableOpacity
          style={{
            width: config.wp("80%"),
            backgroundColor: theme.colors.primary,
            borderRadius: 24,
            paddingHorizontal: config.wp("6%"),
            paddingVertical: 5,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            height: config.hp("5%"),
            marginBottom: 20,
          }}
        >
          <Text
            style={{
              color: "white",
              fontWeight: "bold",
              fontSize: 20,
              marginRight: 5,
            }}
          >
            Download
          </Text>
          <Feather name="download" size={22} color="white" />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: config.wp("80%"),
            backgroundColor: theme.colors.primary,
            borderRadius: 24,
            paddingHorizontal: config.wp("6%"),
            paddingVertical: 5,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            height: config.hp("5%"),
          }}
        >
          <Text
            style={{
              color: "white",
              fontWeight: "bold",
              fontSize: 20,
              marginRight: 5,
            }}
          >
            Email Link
          </Text>
          <FontAwesome5 name="share" size={22} color="white" />
        </TouchableOpacity>
      </View>
      <Text>Return to home</Text>
    </View>
  );
};

export default CheckoutSuccess;
