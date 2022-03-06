import React, { useState } from "react";
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
import { Entypo, Ionicons } from "@expo/vector-icons";
import { SelectTrack, SetPlayList } from "../store/actions/PlayerActions";
import Button from "../components/Button";
import { config } from "../config/Config";
import { theme } from "../config/Theme";

const SongScreen = () => {
  const songs = useSelector((state) => state.songs).sort(
    (a, b) => a._id - b._id
  );
  const [list, setList] = useState(songs ? songs : undefined);
  let playlist = songs;
  const dispatch = useDispatch();

  const selectTrack = (item) => {
    dispatch(SelectTrack(item));
  };

  function Playlist() {
    dispatch(SetPlayList(songs));
  }

  function shuffle() {
    let currentIndex = playlist.length,
      randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [playlist[currentIndex], playlist[randomIndex]] = [
        playlist[randomIndex],
        playlist[currentIndex],
      ];
    }

    //console.log(playlist);
    dispatch(SetPlayList(playlist));
  }

  //console.log(list);

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.beat} onPress={() => selectTrack(item)}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
          display: "flex",
        }}
      >
        <Image
          source={{ uri: item.image }}
          style={styles.image}
          resizeMode="cover"
          resizeMethod="scale"
        ></Image>
        <Text style={styles.title}>{item.title}</Text>
      </View>
      <Ionicons
        name="ellipsis-horizontal-sharp"
        size={32}
        color="black"
        style={{
          paddingRight: 4,
          width: 50,
          display: "flex",
        }}
      />
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
          Songs
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingBottom: config.hp("2%"),
            paddingHorizontal: config.wp("6%"),
          }}
        >
          <TouchableOpacity style={styles.button} onPress={Playlist}>
            <Text style={styles.buttonText}>Play</Text>
            <Entypo name="controller-play" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={shuffle}>
            <Text style={styles.buttonText}>Shuffle</Text>
            <Entypo name="shuffle" size={24} color="white" />
          </TouchableOpacity>
        </View>

        <FlatList
          data={songs}
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
    height: config.hp("10%"),
    width: config.wp("25%"),
    marginRight: config.wp("3%"),
    borderRadius: 7,
  },
  beat: {
    height: config.hp("8%"),
    padding: config.hp(".5%"),
    marginVertical: config.hp("1%"),
    backgroundColor: "gray",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    elevation: config.hp("1%"),
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    shadowColor: "black",
    borderRadius: 7,
    width: "100%",
    overflow: "hidden",
  },
  title: {
    width: "60%",
    fontSize: 22,
    textTransform: "capitalize",
  },
});

export default SongScreen;
