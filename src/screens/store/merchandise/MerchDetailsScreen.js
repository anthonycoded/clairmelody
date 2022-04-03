import {
  Image,
  FlatList,
  View,
  StatusBar,
  Dimensions,
  StyleSheet,
  Animated,
  TouchableOpacity,
  Text,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import { theme } from "../../../config/Theme";
import { config } from "../../../config/Config";
import { AddToCart } from "../../../store/actions/cartActions";

const { width, height } = Dimensions.get("screen");
const ITEM_WIDTH = width;
const ITEM_HEIGHT = height * 0.73;
const DOT_SIZE = 8;
const DOT_SPACING = 8;
const DOT_INDICATOR_SIZE = DOT_SIZE + DOT_SPACING;

const MerchDetailsScreen = () => {
  const products = useSelector((state) => state.products);
  const cart = useSelector((state) => state.cart);
  let item = cart.cart.filter(
    (item) => item._id == products.selectedProduct._id
  );
  const selectedProduct = { ...products.selectedProduct, ...item };
  const scrollY = React.useRef(new Animated.Value(0)).current;
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  function addToCart() {
    setLoading(true);
    dispatch(AddToCart(selectedProduct));
  }

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  return (
    <View style={{ height: "100%" }}>
      <StatusBar hidden />
      <View style={{ height: ITEM_HEIGHT, overflow: "hidden" }}>
        <Animated.FlatList
          data={selectedProduct?.images}
          keyExtractor={(_, index) => index.toString()}
          snapToInterval={ITEM_HEIGHT}
          decelerationRate="fast"
          showsVerticalScrollIndicator={false}
          bounces={false}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: scrollY } } }],
            { useNativeDriver: true }
          )}
          renderItem={({ item }) => {
            return (
              <View>
                <Image source={{ uri: item }} style={styles.image}></Image>
              </View>
            );
          }}
        />
        <View style={styles.pagination}>
          {selectedProduct?.images?.map((_, index) => {
            return <View key={index} style={[styles.dot]} />;
          })}
          <Animated.View
            style={[
              styles.dotIndicator,
              {
                transform: [
                  {
                    translateY: Animated.divide(
                      scrollY,
                      ITEM_HEIGHT
                    ).interpolate({
                      inputRange: [0, 1],
                      outputRange: [0, DOT_INDICATOR_SIZE],
                    }),
                  },
                ],
              },
            ]}
          ></Animated.View>
        </View>
      </View>
      <BottomSheet
        initialSnapIndex={0}
        snapPoints={[height / 3, height - height / 3]}
      >
        <BottomSheetScrollView
          style={{ backgroundColor: "white" }}
          contentContainerStyle={{ padding: 20 }}
        >
          <Text
            style={{
              fontSize: 16,
              fontWeight: "800",
              textTransform: "uppercase",
            }}
          >
            {selectedProduct?.title}
          </Text>
          <Text style={{ fontSize: 16, marginVertical: 20 }}>
            {selectedProduct?.price}
          </Text>
          <View style={{ marginVertical: 20 }}>
            {selectedProduct?.description?.map((text, index) => {
              return (
                <Text key={index} style={{ marginBottom: 10, lineHeight: 22 }}>
                  {text}
                </Text>
              );
            })}
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-end",
              alignItems: "center",
              width: "100%",
            }}
          >
            <TouchableOpacity
              onPress={() => addToCart(selectedProduct)}
              style={{
                backgroundColor: theme.colors.primary,
                borderRadius: 24,
                paddingHorizontal: 25,
                paddingVertical: 10,
              }}
            >
              <Text style={{ color: "white", fontSize: 18 }}>Add To Cart</Text>
            </TouchableOpacity>
          </View>
        </BottomSheetScrollView>
      </BottomSheet>
    </View>
  );
};
const styles = StyleSheet.create({
  image: {
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
    resizeMode: "cover",
  },
  pagination: {
    position: "absolute",
    top: ITEM_HEIGHT / 2,
    left: 20,
  },
  dot: {
    width: DOT_SIZE,
    height: DOT_SIZE,
    borderRadius: DOT_SIZE,
    backgroundColor: "#333",
    marginBottom: DOT_SPACING,
  },
  dotIndicator: {
    width: DOT_INDICATOR_SIZE,
    height: DOT_INDICATOR_SIZE,
    borderRadius: DOT_INDICATOR_SIZE,
    borderWidth: 1,
    borderColor: "#333",
    position: "absolute",
    top: -DOT_SIZE / 2,
    left: -DOT_SIZE / 2,
  },
});
export default MerchDetailsScreen;
