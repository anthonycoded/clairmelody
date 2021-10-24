import React, { useState } from "react";
import { View, Text, StyleSheet, Image, ActivityIndicator } from "react-native";
import { config } from "../config/Config";
import { FontAwesome5 } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Audio } from "expo-av";

const url =
  "https://storage.googleapis.com/beatdealer-images/0eb8d9cf-1f70-46da-8ae8-b3e5331ca474";

const audio =
  "https://storage.googleapis.com/beatdealer-beats/(FREE)%20xxxtentacion%20type%20beat%20mess.mp3.mpga";

const Player = () => {
  const [loading, setLoading] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [playing, setPlaying] = useState(false);
  const sound = React.useRef(new Audio.Sound());

  React.useEffect(() => {
    LoadAudio();
  }, [audio]);

  const PlayAudio = async () => {
    try {
      const result = await sound.current.getStatusAsync();
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

  const LoadAudio = async () => {
    setLoading(true);
    const checkLoading = await sound.current.getStatusAsync();
    if (checkLoading.isLoaded === false) {
      try {
        const result = await sound.current.loadAsync({ uri: audio }, {}, true);
        if (result.isLoaded === false) {
          setLoading(false);
          console.log("Error in Loading Audio");
        } else {
          setLoading(false);
          setLoaded(true);
        }
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    } else {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: url }} style={styles.image} />
      <Text style={styles.title}>Media PLayer </Text>
      {playing ? (
        <TouchableOpacity onPress={PauseAudio} style={{ width: 50 }}>
          <FontAwesome5 name="pause" size={24} color="black" />
        </TouchableOpacity>
      ) : loading ? (
        <ActivityIndicator size="large" color="#00ff00" />
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
    backgroundColor: "red",
    height: config.hp("8%"),
    position: "absolute",
    width: "100%",
    bottom: 80,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: config.wp("2%"),
  },
  image: {
    height: 60,
    width: 60,
  },
  title: {
    fontSize: 20,
  },
});

export default Player;
