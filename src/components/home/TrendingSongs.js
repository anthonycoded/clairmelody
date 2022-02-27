import React, { useState, useCallback, useRef } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
} from "react-native";
import Carousel from "react-native-snap-carousel";
import { useSelector, useDispatch } from "react-redux";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Audio } from "expo-av";
import { SelectTrack } from "../../store/actions/PlayerActions";

import { theme } from "../../config/Theme";
import { config } from "../../config/Config";

const TrendingSongs = ({ navigation }) => {
  const data = useSelector((state) => state.songs);
  const songs = data.sort((a, b) => b.id - a.id);
  const [activeIndex, setActiveIndex] = useState(0);
  const [carouselItems, setCarouselItems] = useState(songs);
  const sound = React.useRef(new Audio.Sound());
  const ref = useRef(null);
  const dispatch = useDispatch();

  const selectTrack = (id) => {
    dispatch(SelectTrack(id));
  };

  const renderItem = useCallback(
    ({ item, index }) => (
      <TouchableOpacity
        style={styles.card}
        onPress={() => selectTrack(item._id)}
      >
        <ImageBackground
          source={{ uri: item.image }}
          style={styles.image}
          resizeMode="cover"
        ></ImageBackground>
        <Text
          style={{ fontSize: 30, color: "black", textTransform: "capitalize" }}
        >
          {item.title}
        </Text>
        <Text style={{ textTransform: "capitalize" }}>{item.text}</Text>
      </TouchableOpacity>
    ),
    []
  );

  return (
    <View>
      <Text
        style={{
          fontSize: 32,
          fontWeight: "bold",
          color: theme.colors.primary,
          fontWeight: "bold",
          paddingVertical: config.hp("1%"),
        }}
      >
        Albums & EPs
      </Text>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <Carousel
          layout="default"
          ref={ref}
          data={carouselItems}
          sliderWidth={config.wp("70%")}
          itemWidth={config.wp("70%")}
          renderItem={renderItem}
          onSnapToItem={(index) => setActiveIndex(index)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 12,
    marginLeft: 24,
  },
  container: {
    paddingVertical: config.hp("4%"),
    flexDirection: "row",
  },
  image: {
    width: config.wp("100%"),
    height: 200,

    borderRadius: 5,
    height: 250,

    alignItems: "center",
  },
});

export default TrendingSongs;
