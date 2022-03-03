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
import { formatMilliseconds } from "../../utils";

//import ImageWrapper from "./player/ImageWrapper";

const Player = () => {
  const player = useSelector((state) => state.player); //Get current track id
  const songs = useSelector((state) => state.songs); //Get all songs
  const beats = useSelector((state) => state.beats); //get all beats
  const library = [...songs, ...beats];
  const playbackInstance = useRef(new Audio.Sound());
  let currentTrack = player.currentTrack ? player.currentTrack : library[0]; //Filter songs to get current track by id
  const [expanded, setExpanded] = useState();
  const dispatch = useDispatch();
  const image = useRef(currentTrack.image);
  const [playing, setPlaying] = useState(false);
  const [loaded, setLoaded] = useState(false);

  let state = useRef({
    isPlaying: undefined,
    isLoaded: undefined,
    isLoading: undefined,
    currentIndex: 0,
    volume: 1.0,
    isBuffering: undefined,
    error: undefined,
    url: currentTrack.url,
  });

  let progress = state.current.currentPosition / state.current.duration;
  let duration = formatMilliseconds(state.current.duration);
  let position = formatMilliseconds(state.current.currentPosition);

  console.log(progress);

  function toggleExpanded() {
    setExpanded(!expanded);
  }

  async function init() {
    try {
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: false,
        interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
        playsInSilentModeIOS: true,
        interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
        shouldDuckAndroid: true,
        staysActiveInBackground: true,
        playThroughEarpieceAndroid: true,
      });
      //await loadAudio();
    } catch (e) {
      console.log(e);
    }
  }

  async function reload() {
    try {
      // setState({
      //   ...state,
      //   isLoading: true,
      // });
      if (state.current?.isPlaying) {
        await playbackInstance.current.pauseAsync();
      }
      await playbackInstance.current.unloadAsync();
      await loadAudio();
    } catch (error) {
      console.log(error);
    }
  }

  async function loadAudio() {
    const { currentIndex, isPlaying, volume } = state.current;
    let currentStatus = await playbackInstance?.current?.getStatusAsync();

    if (currentTrack?.url && !currentStatus.isLoaded) {
      try {
        let source = {
          uri: currentTrack?.url,
        };

        let status = {
          shouldPlay: false,
          volume: volume,
        };

        let data = await playbackInstance?.current?.loadAsync(
          source,
          status,
          false
        );

        // setState({
        //   ...state.current,
        //   isLoaded: data.isLoaded,
        //   isPlaying: data.isPlaying,
        // });
        setLoaded(data.isLoaded);
      } catch (e) {
        console.log(e);
      }
    }
  }
  const handlePlayPause = async () => {
    let currentStatus = await playbackInstance.current.getStatusAsync();
    if (currentStatus.isLoaded == true && !currentStatus.isBuffering) {
      try {
        currentStatus.isPlaying
          ? (await playbackInstance.current.pauseAsync(), setPlaying(false))
          : (await playbackInstance.current.playAsync(), setPlaying(true));
      } catch (error) {
        console.log(error);
      }
      return;
    }
  };

  async function statusUpdate() {
    playbackInstance.current._onPlaybackStatusUpdate = (status) => {
      //console.log(status);

      state.current = {
        ...state.current,
        isLoaded: status.isLoaded,
        isPlaying: status.isPlaying,
        isBuffering: status.isBuffering,
        error: status.error,
        isLoading: status.isLoading,
        url: status.uri,
        duration: status.durationMillis,
        currentPosition: status.positionMillis,
      };
    };
  }
  async function StatusUpdate() {
    try {
      await statusUpdate();
      if (
        (!playbackInstance.current._loaded &&
          !playbackInstance.current._loading) ||
        !playbackInstance.current
      ) {
        await loadAudio();
      }
      await statusUpdate();
      if (
        playbackInstance.current._loaded &&
        state.current.url != currentTrack.url
      ) {
        await reload();
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    StatusUpdate();
    image.current = currentTrack.image;
  }, [player]);

  useEffect(() => {
    init();
  }, []);

  console.log(state.current);

  const ExpandedView = () => (
    <View
      style={{
        height: "100%",
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
            backgroundColor: "black",
            width: "30%",
            borderRadius: 7,
            position: "relative",
            top: 0,
          }}
        ></TouchableOpacity>
      </View>
      <Image
        resizeMode="cover"
        resizeMethod="scale"
        source={{ uri: image.current }}
        style={{ width: "100%", height: config.hp("35%") }}
      ></Image>
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
      <View
        style={{
          height: config.hp("5%"),
          width: "100%",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Progress.Bar
          progress={progress}
          width={config.wp("90%")}
          color="white"
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: config.wp("90%"),
            paddingVertical: 4,
          }}
        >
          <Text style={{ color: "white" }}>{position}</Text>
          <Text style={{ color: "white" }}>{duration}</Text>
        </View>
      </View>
      <View
        style={{
          width: "100%",
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-evenly",
          paddingHorizontal: config.wp("8%"),
        }}
      >
        <TouchableOpacity
          style={{ width: config.wp("30%"), alignItems: "center" }}
        >
          <Ionicons name="play-skip-back" size={50} style={styles.button} />
        </TouchableOpacity>
        {playing == true ? (
          <TouchableOpacity
            style={{
              width: config.wp("30%"),
              alignItems: "center",
              paddingLeft: 10,
            }}
            onPress={() => handlePlayPause()}
          >
            <FontAwesome5 name="pause" size={60} style={styles.button} />
          </TouchableOpacity>
        ) : !loaded || state.current.isLoading ? (
          <View style={{ width: 50, padding: 10, display: "flex" }}>
            <ActivityIndicator size="large" color="#00ff00" />
          </View>
        ) : (
          <TouchableOpacity
            style={{
              width: config.wp("30%"),
              alignItems: "center",
              paddingLeft: 10,
            }}
            onPress={handlePlayPause}
          >
            <FontAwesome5 name="play" size={60} style={styles.button} />
          </TouchableOpacity>
        )}
        <TouchableOpacity
          style={{ width: config.wp("30%"), alignItems: "center" }}
        >
          <Ionicons name="play-skip-forward" size={50} style={styles.button} />
        </TouchableOpacity>
      </View>
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
            source={{ uri: image.current }}
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
      <View
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
      </View>
    </>
  ));

  return (
    <View
      style={{
        ...styles.container,
        height: expanded ? config.hp("70%") : config.hp("8%"),
      }}
    >
      {expanded ? <ExpandedView></ExpandedView> : <InlineView></InlineView>}
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
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
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
