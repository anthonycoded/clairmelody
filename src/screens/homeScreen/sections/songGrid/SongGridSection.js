import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import SongCard from "./SongCard";
import { theme } from "../../../../config/Theme";
import { config } from "../../../../config/Config";

const SongGrid = () => {
  const songs = useSelector((state) => state.songs);

  const renderItem = ({ item }) => <SongCard item={item}></SongCard>;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Trending Songs</Text>

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
    paddingTop: config.hp("4%"),
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

export default SongGrid;
