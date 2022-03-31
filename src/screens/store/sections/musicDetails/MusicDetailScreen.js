import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const MusicDetailScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>MusicDetailScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 10 },
});

export default MusicDetailScreen;
