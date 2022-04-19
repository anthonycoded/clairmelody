import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { useStripe, CardField } from "@stripe/stripe-react-native";
import axios from "axios";
import { theme } from "../../../config/Theme";
import { config } from "../../../config/Config";
import ErrorModal from "../../../components/modals/ErrorModal";
import logo from "../../../../assets/Stripe.png";

const CheckoutScreen = ({ navigation }) => {
  const [showError, setShowError] = useState(false);
  const [error, setError] = useState(undefined);
  const stripe = useStripe();

  function ToggleError(err) {
    if (!error) {
      setError(err);
      setShowError(true);
    } else {
      setError(undefined);
      setShowError(false);
    }
  }

  function closeErrorModal() {
    setShowError(false);
  }

  const donate = async () => {
    try {
      const amount = parseInt(13.99);
      if (amount < 1) return;

      let payload = { amount: amount, name: "test" };

      let response = await axios.post(
        "https://jaysworld-cb39f.uc.r.appspot.com/checkout/createPayment",
        payload,
        {
          headers: { "Content-type": "application/json; charset=utf-8" },
          withCredentials: true,
        }
      );

      const data = await response.data;

      const initSheet = await stripe.initPaymentSheet({
        paymentIntentClientSecret: data.clientSecret,
        merchantDisplayName: "Jay's World",
      });
      if (initSheet.error) {
        ToggleError(initSheet.error.localizedMessage);
        return;
      }
      const presentSheet = await stripe.presentPaymentSheet({
        clientSecret: data.clientSecret,
      });

      if (presentSheet.error) {
        ToggleError(presentSheet.error.localizedMessage);
        return;
      }
      navigation.navigate("CheckoutSuccess");
    } catch (err) {
      console.log(err);
      ToggleError(err);
    }
  };

  return (
    <View
      style={{
        height: "100%",
        alignItems: "center",
        width: "100%",
        paddingVertical: config.hp("2%"),
      }}
    >
      <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 10 }}>
        Payment
      </Text>
      <View style={{ width: "100%", paddingHorizontal: config.wp("4%") }}>
        <Text style={{ fontSize: 18, fontWeight: "600" }}>Disclosures</Text>
        <View>
          <Text style={{ fontSize: 18 }}>
            By proceeding with payment, you are agreeing to the terms and
            conditions listed{" "}
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
                textTransform: "capitalize",
                color: theme.colors.primary,
                textDecorationLine: "underline",
              }}
            >
              here.
            </Text>{" "}
            We encourage you to thorougly read the terms and conditions when
            purchasing any audio productions.
          </Text>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "flex-end",

          width: "100%",
        }}
      >
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            height: 100,
          }}
        >
          <Text style={{ fontSize: 22, position: "absolute", top: 0 }}>
            Payments Powered by
          </Text>
          <Image
            source={logo}
            style={{
              width: config.wp("60%"),
              height: config.hp("10%"),
              resizeMode: "contain",
              position: "absolute",
              bottom: 0,
            }}
          ></Image>
        </View>
      </View>

      <View
        style={{
          paddingHorizontal: config.wp("4%"),
          width: "100%",
          justifyContent: "flex-end",
          paddingBottom: config.hp("20%"),
        }}
      >
        <TouchableOpacity
          onPress={() => donate()}
          style={{
            width: "100%",
            backgroundColor: theme.colors.primary,
            paddingVertical: config.hp("2%"),
            borderRadius: "12%",
          }}
        >
          <Text style={{ fontSize: 20, color: "white", textAlign: "center" }}>
            Proceed To Payment
          </Text>
        </TouchableOpacity>
      </View>
      <ErrorModal
        showErrorModal={showError}
        error={error}
        closeErrorModal={closeErrorModal}
      ></ErrorModal>
    </View>
  );
};

export default CheckoutScreen;
