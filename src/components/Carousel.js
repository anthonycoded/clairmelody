import React from "react";
import { View, ScrollView, Text, StyleSheet } from "react-native";
import NewestCard from "./home/NewestCard";
import { config } from "../config/Config";
import { theme } from "../config/Theme";

const Carousel = (props) => {
  const { items, style } = props;
  const itemsPerInterval =
    props.itemsPerInterval === undefined ? 1 : props.itemsPerInterval;

  const [interval, setInterval] = React.useState(1);
  const [intervals, setIntervals] = React.useState(1);
  const [width, setWidth] = React.useState(0);

  const init = (width) => {
    // initialise width
    setWidth(width);
    // initialise total intervals
    const totalItems = items.length;
    setIntervals(Math.ceil(totalItems / itemsPerInterval));
  };

  const getInterval = (offset) => {
    for (let i = 1; i <= intervals; i++) {
      if (offset + 1 < (width / intervals) * i) {
        return i;
      }
      if (i == intervals) {
        return i;
      }
    }
  };

  let bullets = [];
  for (let i = 1; i <= intervals; i++) {
    bullets.push(
      <Text
        key={i}
        style={
          props.bulletsWhite
            ? [
                {
                  ...styles.bulletWhite,
                  opacity: interval === i ? 0.9 : 0.2,
                },
              ]
            : [
                {
                  ...styles.bullet,
                  opacity: interval === i ? 0.9 : 0.2,
                },
              ]
        }
      >
        &bull;
      </Text>
    );
  }
  console.log(items);

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal={true}
        contentContainerStyle={{
          ...styles.scrollView,
          width: `${100 * intervals}%`,
        }}
        showsHorizontalScrollIndicator={false}
        onContentSizeChange={(w, h) => init(w)}
        onScroll={(data) => {
          setWidth(data.nativeEvent.contentSize.width);
          setInterval(getInterval(data.nativeEvent.contentOffset.x));
        }}
        scrollEventThrottle={200}
        pagingEnabled
        decelerationRate="fast"
      >
        {items.map((item, index) => {
          // return <Slide key={index} title={item.title} />;
          switch (props.type) {
            case "songs":
              //Account Balance Cards
              return <NewestCard key={index} item={item} {...props} />;
            default:
              return <NewestCard key={index} item={item} {...props} />;
          }
        })}
      </ScrollView>
      <View style={styles.bullets}>{bullets}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#f4f4f4",
  },
  scrollView: {
    display: "flex",
    flexDirection: "row",
    overflow: "hidden",
  },
  bullets: {
    position: "absolute",
    width: "100%",
    bottom: -config.hp("1.5%"),
    right: 0,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: config.wp("1%"),
    paddingTop: config.hp("1.5%"),
  },
  bullet: {
    paddingHorizontal: config.wp("1.5%"),
    fontSize: config.hp("3.55%"),
    color: theme.colors.primary,
    fontWeight: "bold",
  },
  bulletWhite: {
    paddingHorizontal: config.wp("1.5%"),
    fontSize: config.hp("3.55%"),
    color: "white",
    fontWeight: "bold",
  },
});

export default Carousel;
