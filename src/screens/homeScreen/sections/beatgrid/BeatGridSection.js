import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
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
      <Text style={styles.title}>Trending Beats</Text>
      <FlatList
        data={beats}
        renderItem={renderItem}
        keyExtractor={(item) => item._id.toString()}
        horizontal
        contentContainerStyle={{
          justifyContent: "center",
          alignItems: "center",
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
