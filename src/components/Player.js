import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, ActivityIndicator } from "react-native";
import { config } from "../config/Config";
import { FontAwesome5 } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Audio } from "expo-av";
import { useSelector, useDispatch } from "react-redux";
import { theme } from "../config/Theme";

const Player = () => {
  const [loading, setLoading] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [playing, setPlaying] = useState(false);
  const sound = React.useRef(new Audio.Sound());

  //Get current track id
  const player = useSelector((state) => state.player);

  //Get all songs
  const songs = useSelector((state) => state.songs);
  await Audio.setAudioModeAsync({ playsInSilentModeIOS: true });
  console.log(songs.length);
  //Filter songs to get current track by id
  let currentTrack = songs[0];
  //Set audio to currentTrack
  let audio = currentTrack?.url;

  useEffect(() => {
    async function reload() {
      const result = await sound.current.getStatusAsync();
      if (result.isLoaded) {
        sound.current.pauseAsync();
        console.log("pause");
        sound.current.unloadAsync();
        console.log("unload");
      }

      setPlaying(false);
      LoadAudio();
    }
    reload();
  }, [audio]);

  const PlayAudio = async () => {
    try {
      const result = await sound.current.getStatusAsync();
      const result = await sound.current.loadAsync({ uri: audio }, {}, true);

      if (result.isLoaded) {
        if (result.isPlaying === false) {
          sound.current.playAsync();
          setPlaying(true);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const PauseAudio = async () => {
    try {
      const result = await sound.current.getStatusAsync();
      if (result.isLoaded) {
        if (result.isPlaying === true) {
          sound.current.pauseAsync();
          setPlaying(false);
        }
      }
    } catch (error) {}
  };

  // const LoadAudio = async () => {
  //   setLoading(true);
  //   const checkLoading = await sound.current.getStatusAsync();
  //   if (checkLoading.isLoaded === false && currentTrack) {
  //     try {
  //       const result = await sound.current.loadAsync({ uri: audio }, {}, true);
  //       if (result.isLoaded === false) {
  //         setLoading(false);
  //         console.log("Error in Loading Audio");
  //       } else {
  //         setLoading(false);
  //         setLoaded(true);
  //       }
  //     } catch (error) {
  //       console.log(error);
  //       setLoading(false);
  //     }
  //   } else {
  //     setLoading(false);
  //   }
  // };

  return (
    <View style={styles.container}>
      <View style={{ width: 50 }}>
        <Image source={{ uri: currentTrack?.image }} style={styles.image} />
      </View>
      <View style={{ width: 100 }}>
        <Text style={styles.title}>{currentTrack?.title}</Text>
      </View>
      {playing ? (
        <TouchableOpacity onPress={PauseAudio} style={{ width: 50 }}>
          <FontAwesome5 name="pause" size={24} color="black" />
        </TouchableOpacity>
      ) : loading ? (
        <View style={{ width: 50 }}>
          <ActivityIndicator size="large" color="#00ff00" />
        </View>
      ) : (
        <TouchableOpacity style={{ width: 50 }} onPress={() => PlayAudio()}>
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
