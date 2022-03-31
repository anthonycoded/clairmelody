import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import LottieView from "lottie-react-native";
import { useSelector } from "react-redux";
import BeatCard from "./BeatCard";
import { theme } from "../../../../config/Theme";
import { config } from "../../../../config/Config";

const BeatGrid = () => {
  const beats = useSelector((state) => state.beats);
  const songs = useSelector((state) => state.songs);

  const renderItem = ({ item }) => <BeatCard item={item}></BeatCard>;
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        <Text style={styles.title}>Trending Beats</Text>
        <LottieView
          loop
          style={{
            width: 80,
            height: 80,
          }}
          source={require("../../../../../assets/lottieFiles/rocket.json")}
        />
      </View>
      <FlatList
        data={beats}
        renderItem={renderItem}
        keyExtractor={(item) => item._id.toString()}
        horizontal
        contentContainerStyle={{
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 15,
        }}
      />
      <FlatList
        data={songs}
        renderItem={renderItem}
        keyExtractor={(item) => item._id.toString()}
        horizontal
        contentContainerStyle={{
          justifyContent: "center",
          alignItems: "center",
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingVertical: config.hp("4%"),
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: theme.colors.primary,
    fontWeight: "bold",
    paddingVertical: config.hp("1%"),
    paddingVertical: config.hp("1%"),
  },
});

export default BeatGrid;
