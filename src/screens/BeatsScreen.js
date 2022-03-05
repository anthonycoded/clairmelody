import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { Entypo } from "@expo/vector-icons";
import { SelectTrack } from "../store/actions/PlayerActions";
import Button from "../components/Button";
import { config } from "../config/Config";
import { theme } from "../config/Theme";

const BeatsScreen = () => {
  const beats = useSelector((state) => state.beats).sort(
    (a, b) => a._id - b._id
  );
  const dispatch = useDispatch();

  const selectTrack = (item) => {
    dispatch(SelectTrack(item));
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.beat} onPress={() => selectTrack(item)}>
      <Image source={{ uri: item.image }} style={styles.image}></Image>
      <Text style={styles.title}>{item.title}</Text>
    </TouchableOpacity>
  );
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text
          style={{
            fontSize: 32,
            fontWeight: "bold",
            color: theme.colors.primary,
            paddingBottom: config.hp("2%"),
          }}
        >
          Beats
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingBottom: config.hp("2%"),
            paddingHorizontal: config.wp("6%"),
          }}
        >
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Play</Text>
            <Entypo name="controller-play" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Shuffle</Text>
            <Entypo name="shuffle" size={24} color="white" />
          </TouchableOpacity>
        </View>

        <FlatList
          data={beats}
          renderItem={renderItem}
          keyExtractor={(item) => item._id.toString()}
          contentContainerStyle={{
            paddingBottom: config.hp("12%"),
          }}
        />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.colors.primary,
    flexDirection: "row",
    paddingVertical: config.hp("1%"),
    paddingHorizontal: config.wp("4%"),
    borderRadius: 12,
    justifyContent: "center",
    width: config.wp("35%"),
  },
  buttonText: {
    fontSize: 22,
    color: "white",
    paddingRight: config.wp("2%"),
  },
  container: {
    paddingVertical: config.hp("4%"),
    paddingHorizontal: config.wp("2%"),
    paddingBottom: config.hp("35%"),
  },
  image: {
    height: config.hp("7%"),
    width: 60,
    marginRight: config.wp("3%"),
  },
  beat: {
    height: config.hp("7%"),
    paddingVertical: config.hp("1%"),
    marginVertical: config.hp("1%"),
    backgroundColor: "gray",
    flexDirection: "row",
    alignItems: "center",
    elevation: config.hp("1%"),
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    shadowColor: "black",
  },
  title: {
    fontSize: 22,
  },
});

export default BeatsScreen;
