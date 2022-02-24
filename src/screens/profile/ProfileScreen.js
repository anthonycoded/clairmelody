import { View, Text, StyleSheet, ScrollView } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { config } from "../../config/Config";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";

const ProfileScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          height: config.hp("30%"),
        }}
      >
        <View style={{}}>
          <View style={styles.avatarContainer}>
            <AntDesign name="user" size={48} color="black" />
          </View>

          <TouchableOpacity>
            <Text>Update Profile Picture</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Mary "
          placeholderTextColor="white"
        ></TextInput>
        <TextInput
          style={styles.input}
          placeholder=" Jane"
          placeholderTextColor="white"
        ></TextInput>
        <TextInput
          style={styles.input}
          placeholder="@username"
          placeholderTextColor="white"
        ></TextInput>
      </View>
      <Text
        style={{
          color: "white",
          fontSize: 22,
          fontWeight: "bold",
          paddingHorizontal: config.wp("4%"),
          paddingVertical: config.hp("2%"),
        }}
      >
        Contact Details
      </Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Mary "
          placeholderTextColor="white"
        ></TextInput>
        <TextInput
          style={styles.input}
          placeholder=" Jane"
          placeholderTextColor="white"
        ></TextInput>
        <TextInput
          style={styles.input}
          placeholder="@username"
          placeholderTextColor="white"
        ></TextInput>
      </View>
      <Text
        style={{
          fontSize: 22,
          fontWeight: "bold",
          paddingHorizontal: config.wp("2%"),
          paddingVertical: config.hp("2%"),
          color: "white",
        }}
      >
        Security Settings
      </Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Mary "
          placeholderTextColor="white"
        ></TextInput>
        <TextInput
          style={styles.input}
          placeholder=" Jane"
          placeholderTextColor="white"
        ></TextInput>
      </View>
      <Text
        style={{
          fontSize: 22,
          fontWeight: "bold",
          paddingHorizontal: config.wp("2%"),
          paddingVertical: config.hp("2%"),
          color: "white",
        }}
      >
        App Settings
      </Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Mary "
          placeholderTextColor="white"
        ></TextInput>
      </View>
      <View style={{ marginBottom: 200, height: 100 }}></View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  avatarContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    padding: 40,
    borderRadius: 100,
    margin: 25,
  },
  container: {
    backgroundColor: "#0d47a1",
  },
  input: {
    height: config.hp("6%"),
    backgroundColor: "#5472d3",
    width: "100%",
    borderRadius: 7,
    fontSize: 18,
    paddingHorizontal: config.wp("2%"),
    marginBottom: config.hp("2%"),
    color: "white",
  },
  inputContainer: {
    paddingHorizontal: config.wp("8%"),
  },
});

export default ProfileScreen;
