import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
  Image,
} from "react-native";
import { config } from "../../config/Config";
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons, Feather } from "@expo/vector-icons";
import * as Progress from "react-native-progress";
import { Audio } from "expo-av";
import { useSelector, useDispatch } from "react-redux";
import LottieView from "lottie-react-native";

import { theme } from "../../config/Theme";
import { formatMilliseconds } from "../../utils/utils";
import { RecentlyPlayed, SelectTrack } from "../../store/actions/PlayerActions";
import { AddToRecentlyPlayed } from "./functions/Shuffle";

const PlayerControls = ({ expanded }) => {
  const playbackInstance = useRef(new Audio.Sound());
  const player = useSelector((state) => state.player); //Get current track id
  const songs = useSelector((state) => state.songs); //Get all songs
  const beats = useSelector((state) => state.beats); //get all beats
  const library = [...songs, ...beats];

  let currentTrack = player.currentTrack ? player.currentTrack : songs[0]; //Filter songs to get current track by id
  const dispatch = useDispatch();

  const [state, setState] = useState({
    isPlaying: undefined,
    isLoaded: undefined,
    isLoading: undefined,
    currentIndex: 0,
    volume: 1.0,
    isBuffering: undefined,
    error: undefined,
    url: undefined,
    duration: 0,
    currentPosition: 0,
    currentIndex: 0,
  });

  const [autoPlay, setAutoPlay] = useState(false);

  //console.log(state);

  let progress = state.currentPosition / state.duration;
  let duration = formatMilliseconds(state.duration ? state.duration : 0);
  let position = formatMilliseconds(
    state.currentPosition ? state.currentPosition : 0
  );

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
      if (state.isPlaying) {
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
          uri: currentTrack.url,
        };

        let status = {
          shouldPlay: autoPlay,
          volume: volume,
        };

        let data = await playbackInstance?.current?.loadAsync(
          source,
          status,
          false
        );
        if (autoPlay) {
          AddToRecentlyPlayed(
            currentTrack.url,
            dispatch,
            player.recentlyPlayed
          );
        }
      } catch (e) {
        console.log(e);
      }
    }
  }
  const handlePlayPause = async () => {
    let currentStatus = await playbackInstance.current.getStatusAsync();

    async function play() {
      await playbackInstance.current.playAsync(),
        setAutoPlay(true),
        AddToRecentlyPlayed(currentStatus.uri, dispatch, player.recentlyPlayed);
    }
    if (currentStatus.isLoaded == true && !currentStatus.isBuffering) {
      try {
        currentStatus.isPlaying
          ? await playbackInstance.current.pauseAsync()
          : await play();
      } catch (error) {
        console.log(error);
      }
      return;
    }
  };

  const Replay = async () => {
    let currentStatus = await playbackInstance.current.getStatusAsync();
    if (currentStatus.isLoaded == true && !currentStatus.isBuffering) {
      try {
        await playbackInstance.current.replayAsync();
      } catch (error) {
        console.log(error);
      }
      return;
    }
  };

  async function statusUpdate() {
    playbackInstance.current._onPlaybackStatusUpdate = (status) => {
      console.log(status);

      setState({
        ...state,
        isLoaded: status.isLoaded,
        isPlaying: status.isPlaying,
        isBuffering: status.isBuffering,
        error: status.error,
        isLoading: status.isLoading,
        url: status.uri,
        duration: status.durationMillis,
        currentPosition: status.positionMillis,
      });

      // //////////////////WHEN SONG ENDS////////////////////////////
      // if (status.didJustFinish) {
      //   playbackInstance.current.unloadAsync(); //UNLOAD AUDIO
      //   if (state.currentIndex < player.playlist?.length) {
      //     //
      //     setState({
      //       ...state,
      //       isLoading: true,
      //       currentIndex: state.currentIndex + 1,
      //     });
      //     dispatch(SelectTrack(player.playlist[state.currentIndex]));
      //   }
      // }
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
        if (currentTrack?.url) {
          await loadAudio();
        }
      }

      await statusUpdate();
      if (playbackInstance.current._loaded && state.url != currentTrack?.url) {
        await reload();
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    StatusUpdate();
  }, [player]);

  useEffect(() => {
    init();
  }, []);

  return (
    <View style={{ width: "100%" }}>
      {expanded ? (
        <View style={{ width: "100%", height: "100%" }}>
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
              progress={progress ? progress : 0}
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
              <Text style={{ color: "white" }}>{position ? position : 0}</Text>
              <Text style={{ color: "white" }}>{duration ? duration : 0}</Text>
            </View>
          </View>
          <View
            style={{
              width: "100%",

              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-evenly",
              paddingHorizontal: config.wp("8%"),
            }}
          >
            <TouchableOpacity
              onPress={Replay}
              style={{ width: config.wp("30%"), alignItems: "center" }}
            >
              <Ionicons
                name="play-skip-back"
                size={50}
                color="white"
                style={styles.button}
              />
            </TouchableOpacity>
            {state.isPlaying == true ? (
              <TouchableOpacity
                style={{
                  width: config.wp("30%"),
                  alignItems: "center",
                }}
                onPress={() => handlePlayPause()}
              >
                <FontAwesome5
                  name="pause"
                  size={60}
                  color="white"
                  style={styles.button}
                />
              </TouchableOpacity>
            ) : !state.isLoaded || state.isLoading ? (
              <View style={{ width: 50, padding: 10, display: "flex" }}>
                <ActivityIndicator size="large" color="#00ff00" />
              </View>
            ) : (
              <TouchableOpacity
                style={{
                  width: config.wp("30%"),
                  alignItems: "center",
                }}
                onPress={handlePlayPause}
              >
                <FontAwesome5
                  name="play"
                  size={60}
                  color="white"
                  style={styles.button}
                />
              </TouchableOpacity>
            )}
            <TouchableOpacity
              style={{ width: config.wp("30%"), alignItems: "center" }}
            >
              <Ionicons
                name="play-skip-forward"
                size={50}
                color="white"
                style={styles.button}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingHorizontal: 0,
              width: "100%",
            }}
          >
            <LottieView
              loop={false}
              style={{
                width: 75,
                height: 75,
                paddingLeft: 12,
              }}
              source={require("../../../assets/lottieFiles/heart.json")}
            />

            <View style={{ width: 75 }}>
              <Feather name="share" size={24} color="white" />
            </View>
          </View>
        </View>
      ) : (
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "start",
          }}
        >
          {state.isPlaying == true ? (
            <TouchableOpacity onPress={() => handlePlayPause()}>
              <FontAwesome5
                name="pause"
                size={42}
                color="white"
                style={styles.button}
              />
            </TouchableOpacity>
          ) : !state.isLoaded || state.isLoading ? (
            <View style={{ width: 50, padding: 10, display: "flex" }}>
              <ActivityIndicator size="large" color="#00ff00" />
            </View>
          ) : (
            <TouchableOpacity onPress={handlePlayPause}>
              <FontAwesome5
                name="play"
                size={42}
                color="white"
                style={styles.button}
              />
            </TouchableOpacity>
          )}
        </View>
      )}
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

export default PlayerControls;
