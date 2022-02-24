import React, { useState, useEffect, useRef } from "react";
import { View, Text, StyleSheet, Image, ActivityIndicator } from "react-native";
import { config } from "../config/Config";
import { FontAwesome5 } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Audio } from "expo-av";
import { useSelector, useDispatch } from "react-redux";
import { theme } from "../config/Theme";

const Player = () => {
  const player = useSelector((state) => state.player); //Get current track id
  const songs = useSelector((state) => state.songs); //Get all songs
  const playbackInstance = useRef(new Audio.Sound());
  let track = songs.filter((item) => item._id == player.currentTrack);
  let currentTrack = track[0] ? track[0] : songs[0]; //Filter songs to get current track by id

  const [state, setState] = useState({
    isPlaying: undefined,
    isLoaded: undefined,
    isLoading: undefined,
    currentIndex: 0,
    volume: 1.0,
    isBuffering: undefined,
    error: undefined,
    url: currentTrack.url,
  });

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
      setState({
        ...state,
        isLoading: true,
      });
      if (state?.isPlaying) {
        await playbackInstance.current.pauseAsync();
      }
      await playbackInstance.current.unloadAsync();
      await loadAudio();
    } catch (error) {
      console.log(error);
    }
  }

  async function loadAudio() {
    const { currentIndex, isPlaying, volume } = state;
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
        //   ...state,
        //   isLoaded: data.isLoaded,
        //   isPlaying: data.isPlaying,
        // });
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
          ? await playbackInstance.current.pauseAsync()
          : await playbackInstance.current.playAsync();
      } catch (error) {
        console.log(error);
      }
      return;
    }
  };

  async function statusUpdate() {
    playbackInstance.current._onPlaybackStatusUpdate = (status) => {
      setState({
        ...state,
        isLoaded: status.isLoaded,
        isPlaying: status.isPlaying,
        isBuffering: status.isBuffering,
        error: status.error,
        isLoading: status.isLoading,
        url: status.uri,
      });
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
      if (playbackInstance.current._loaded && state.url != currentTrack.url) {
        await reload();
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    StatusUpdate();
  }, [currentTrack, playbackInstance.current]);

  useEffect(() => {
    init();
  }, []);

  return (
    <View style={styles.container}>
      <View style={{ width: 50 }}>
        <Image source={{ uri: currentTrack?.image }} style={styles.image} />
      </View>
      <View style={{ width: 100 }}>
        <Text style={styles.title}>{currentTrack?.title}</Text>
      </View>
      {state.isPlaying == true ? (
        <TouchableOpacity
          onPress={() => handlePlayPause()}
          style={{ width: 50 }}
        >
          <FontAwesome5 name="pause" size={24} color="black" />
        </TouchableOpacity>
      ) : !state.isLoaded || state.isLoading ? (
        <View style={{ width: 50 }}>
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
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.primary,
    height: config.hp("8%"),
    position: "absolute",
    width: "100%",
    bottom: config.hp("10%"),
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingRight: config.wp("2%"),
  },
  image: {
    height: "100%",
    width: 100,
  },
  title: {
    fontSize: 20,
    color: "white",
  },
});

export default Player;
