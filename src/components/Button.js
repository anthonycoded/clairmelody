import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const Button = ({
  color,
  text,
  height,
  width,
  radius,
  marginBottom,
  background,
  fontSize,
  fontWeight,
  onPress,
}) => {
  const styles = StyleSheet.create({
    container: {
      height: height,
      width: width,
      backgroundColor: background,
      borderRadius: radius,
      marginBottom: marginBottom,
      justifyContent: "center",
      alignItems: "center",
      fontWeight: fontWeight,
    },
    text: {
      color: color,
      fontSize: fontSize,
    },
  });
  return (
    <TouchableOpacity style={styles.button} onPress={() => onPress()}>
      <View style={styles.container}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;
