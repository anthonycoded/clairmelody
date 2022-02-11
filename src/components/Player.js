import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, ActivityIndicator } from "react-native";
import { config } from "../config/Config";
import { FontAwesome5 } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Audio } from "expo-av";
import { useSelector, useDispatch } from "react-redux";
import { theme } from "../config/Theme";

const playbackInstance = new Audio.Sound();

const Player = () => {
  const player = useSelector((state) => state.player); //Get current track id
  const songs = useSelector((state) => state.songs); //Get all songs

  let state = {
    isPlaying: false,
    isLoaded: false,
    currentIndex: 0,
    volume: 1.0,
    isBuffering: false,
    error: undefined,
  };

  let track = songs.filter((item) => item._id == player.currentTrack);
  let currentTrack = track[0] || songs[0]; //Filter songs to get current track by id

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

      if (state.isLoaded == false && currentTrack) {
        await loadAudio();
      }
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    init();
  }, []);

  async function loadAudio() {
    const { currentIndex, isPlaying, volume } = state;

    try {
      let source = {
        uri: currentTrack?.url,
      };

      let status = {
        shouldPlay: isPlaying,
        volume: volume,
      };

      if (state.isLoaded == false) {
        await playbackInstance.loadAsync(source, status, false);
      }
    } catch (e) {
      console.log(e);
    }
  }
  handlePlayPause = async () => {
    if (state.isLoaded == true) {
      try {
        state.isPlaying
          ? await playbackInstance.pauseAsync()
          : await playbackInstance.playAsync();
      } catch (error) {
        console.log(error);
      }
    }
  };
  async function reload() {
    try {
      if (state.isPlaying) {
        await playbackInstance.pauseAsync();
      }
      await playbackInstance.unloadAsync();
      await init();
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    async function statusUpdate() {
      playbackInstance._onPlaybackStatusUpdate = (status) => {
        state = {
          ...state,
          isLoaded: status.isLoaded,
          isPlaying: status.isPlaying,
          isBuffering: status.isBuffering,
          error: status.error,
        };
      };
    }
    statusUpdate();
  }, [playbackInstance]);
  console.log(state);

  useEffect(() => {
    if (currentTrack) {
      reload();
    }
  }, [currentTrack]);

  return (
    <View style={styles.container}>
      <View style={{ width: 50 }}>
        <Image source={{ uri: currentTrack?.image }} style={styles.image} />
      </View>
      <View style={{ width: 100 }}>
        <Text style={styles.title}>{currentTrack?.title}</Text>
      </View>
      {state.isPlaying ? (
        <TouchableOpacity onPress={handlePlayPause} style={{ width: 50 }}>
          <FontAwesome5 name="pause" size={24} color="black" />
        </TouchableOpacity>
      ) : state.isBuffering ? (
        <View style={{ width: 50 }}>
          <ActivityIndicator size="large" color="#00ff00" />
        </View>
      ) : (
        <TouchableOpacity style={{ width: 50 }} onPress={handlePlayPause}>
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
