import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { config } from "../../../../config/Config";
import { theme } from "../../../../config/Theme";
import { AddToCart } from "../../../../store/actions/cartActions";

const MusicDetailScreen = ({ navigation }) => {
  const selectedProduct = useSelector(
    (state) => state.products.selectedProduct
  );

  const dispatch = useDispatch();

  function addToCart() {
    dispatch(AddToCart(selectedProduct));
  }
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
          height: config.hp("65%"),
          width: "100%",
          bottom: 0,
          borderTopRightRadius: 25,
          borderTopLeftRadius: 25,
          paddingHorizontal: config.wp("4%"),
          paddingVertical: config.hp("2%"),
        }}
      >
        <ScrollView style={{}}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: config.hp("4%"),
            }}
          >
            <View>
              <Text
                style={{
                  fontSize: 22,
                  color: theme.colors.primary,
                  fontWeight: "bold",
                  textAlign: "center",
                  textTransform: "capitalize",
                }}
              >
                {selectedProduct?.title}
              </Text>
              <Text
                numberOfLines={1}
                ellipsizeMode="tail"
                style={{ textTransform: "capitalize", fontSize: 16 }}
              >
                {selectedProduct?.credits}
              </Text>
            </View>
            <View style={{ alignItems: "flex-end" }}>
              <Text
                style={{
                  fontSize: 22,
                  color: theme.colors.primary,
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                ${selectedProduct?.leasePrice}/{selectedProduct?.purchasePrice}
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  color: theme.colors.primary,
                  textAlign: "center",
                }}
              >
                Lease/Purchase
              </Text>
            </View>
          </View>

          <View
            style={{ justifyContent: "flex-start", height: config.hp("35%") }}
          >
            <Text style={{ fontSize: 22 }}>Lease:</Text>
            <Text style={{ marginBottom: 10 }}>
              Eiusmod ipsum duis tempor et enim commodo fugiat amet exercitation
              adipisicing. Laboris qui voluptate ullamco eu reprehenderit in
              labore elit esse labore do. Eiusmod pariatur nostrud sunt Lorem
              culpa cillum voluptate fugiat nulla in cillum adipisicing anim
            </Text>
            <Text style={{ fontSize: 22 }}>Purchase:</Text>
            <Text>
              Eiusmod ipsum duis tempor et enim commodo fugiat amet exercitation
              adipisicing. Laboris qui voluptate ullamco eu reprehenderit in
              labore elit esse labore do. Eiusmod pariatur nostrud sunt Lorem
              culpa cillum voluptate fugiat nulla in cillum adipisicing anim
            </Text>
          </View>

          <View
            style={{
              marginBottom: 48,
              alignItems: "center",
              justifyContent: "flex-start",
              paddingBottom: config.hp("15%"),
            }}
          >
            <TouchableOpacity
              onPress={addToCart}
              style={{
                paddingVertical: 10,
                backgroundColor: theme.colors.primary,
                width: config.wp("50%"),
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 25,
              }}
            >
              <Text style={{ color: "white", fontSize: 18 }}>Add To Cart</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
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
