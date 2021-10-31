import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import SongGridCard from "./SongGridCard";

import { theme } from "../../config/Theme";
import { config } from "../../config/Config";

const BeatsSection = ({ navigation }) => {
  const data = useSelector((state) => state.beats);
  const beats = data.sort((a, b) => b.id - a.id);

  console.log("beats: ", beats);

  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        data={beats}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <SongGridCard
            key={item.id}
            item={item}
            colors={theme.colors}
            config={config}
            navigation={navigation}
          ></SongGridCard>
        )}
      ></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: config.hp("4%"),
  },
});

export default BeatsSection;
