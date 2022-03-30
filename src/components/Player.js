import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
  Image,
} from "react-native";
import { config } from "../config/Config";
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import * as Progress from "react-native-progress";
import { Audio } from "expo-av";
import { useSelector, useDispatch } from "react-redux";
import { UpdateState } from "../store/actions/PlayerActions";
import { theme } from "../config/Theme";
import { formatMilliseconds } from "../utils/utils";
import PlayerControls from "./player/PlayerControls";

//import ImageWrapper from "./player/ImageWrapper";

const Player = () => {
  const player = useSelector((state) => state.player); //Get current track id
  const songs = useSelector((state) => state.songs); //Get all songs
  const beats = useSelector((state) => state.beats); //get all beats
  const library = [...songs, ...beats];

  let currentTrack = player.currentTrack ? player.currentTrack : songs[0]; //Filter songs to get current track by id
  const [expanded, setExpanded] = useState();
  const dispatch = useDispatch();
  const [image, setImage] = useState(undefined);

  function toggleExpanded() {
    setExpanded(!expanded);
  }

  useEffect(() => {
    setImage(currentTrack?.image);
  }, [player]);

  const ExpandedView = () => (
    <View
      style={{
        height: "65%",
        width: "100%",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <View
        style={{
          width: config.wp("100%"),
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "center",
          position: "absolute",
          zIndex: 20,
        }}
      >
        <TouchableOpacity
          onPress={toggleExpanded}
          style={{
            height: config.hp("1.5%"),
            backgroundColor: "white",
            width: "30%",
            borderBottomLeftRadius: 7,
            borderBottomRightRadius: 7,
            position: "relative",
            top: 0,
            Bottom: 5,
          }}
        ></TouchableOpacity>
      </View>
      <View style={{ width: "100%", paddingHorizontal: 20, paddingTop: 25 }}>
        <Image
          resizeMode="cover"
          resizeMethod="scale"
          source={{ uri: image }}
          style={{
            width: "100%",
            height: config.hp("35%"),
            borderRadius: 12,
          }}
        ></Image>
      </View>
      <Text
        style={{
          fontSize: 22,
          color: "white",
          textTransform: "capitalize",
          fontWeight: "bold",
          paddingVertical: config.hp("2%"),

          width: "90%",
        }}
      >
        {currentTrack.title}
      </Text>
    </View>
  );

  const InlineView = React.memo(() => (
    <>
      <TouchableOpacity
        onPress={toggleExpanded}
        style={{
          width: config.wp("80%"),
          height: "100%",
          position: "relative",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        <View style={{ width: 100 }}>
          <Image
            resizeMode="cover"
            resizeMethod="scale"
            source={{ uri: currentTrack?.image }}
            style={{ width: "100%", height: config.hp("35%") }}
          ></Image>
        </View>

        <View
          style={{
            width: "100%",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            flex: 1,
          }}
        >
          <Text style={styles.title}>{currentTrack?.title}</Text>
        </View>
      </TouchableOpacity>
      {/* <View
        style={{
          width: config.wp("20%"),
          flexDirection: "row",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          position: "relative",
          marginLeft: config.wp("1%"),
        }}
      >
        {playing == true ? (
          <TouchableOpacity
            onPress={() => handlePlayPause()}
            style={{ width: 50, padding: 10 }}
          >
            <FontAwesome5 name="pause" size={24} color="black" />
          </TouchableOpacity>
        ) : !loaded || state.current.isLoading ? (
          <View style={{ width: 50, padding: 10 }}>
            <ActivityIndicator size="large" color="#00ff00" />
          </View>
        ) : (
          <TouchableOpacity
            style={{ width: 50, padding: 10 }}
            onPress={handlePlayPause}
          >
            <FontAwesome5 name="play" size={24} color="black" />
          </TouchableOpacity>
        )}
      </View> */}
    </>
  ));

  return (
    <View
      style={{
        ...styles.container,
        flexDirection: expanded ? "column" : "row",
        height: expanded ? config.hp("70%") : config.hp("8%"),
        justifyContent: expanded ? "flex-start" : "space-between",
        alignItems: expanded ? "flex-start" : "center",
        borderTopLeftRadius: expanded ? 20 : 0,
        borderTopRightRadius: expanded ? 20 : 0,
      }}
    >
      {expanded ? <ExpandedView></ExpandedView> : <InlineView></InlineView>}
      <View
        style={{
          flexDirection: "row",
          alignItems: "flex-start",
          width: "100%",
          height: "100%",
          justifyContent: "flex-start",
        }}
      >
        <PlayerControls expanded={expanded}></PlayerControls>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
  },
  container: {
    backgroundColor: theme.colors.primary,

    position: "absolute",
    width: "100%",
    bottom: config.hp("10%"),
    flex: 1,
  },
  image: {
    height: "100%",
    width: 100,
  },
  title: {
    fontSize: 20,
    color: "white",
    textTransform: "capitalize",
    width: "100%",
    textAlign: "center",
  },
});

export default Player;
