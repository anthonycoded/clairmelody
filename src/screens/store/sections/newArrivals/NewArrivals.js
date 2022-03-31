import { View, Text, FlatList } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";

const NewArrivals = ({ navigation }) => {
  const Hoodies = useSelector((state) => state.products.hoodies);

  const renderItem = ({ item }) => {
    return <ProductCard item={item} navigation={navigation} />;
  };
  return (
    <View>
      <Text style={{ fontSize: 22, marginBottom: 10 }}>NewArrivals</Text>
      <FlatList
        data={Hoodies}
        renderItem={renderItem}
        keyExtractor={(item) => item._id.toString()}
        horizontal
        contentContainerStyle={{
          height: "100%",
          paddingVertical: 5,
          paddingHorizontal: 5,
        }}
      ></FlatList>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
          overflowX: "scroll",
        }}
      ></View>
    </View>
  );
};

export default NewArrivals;
