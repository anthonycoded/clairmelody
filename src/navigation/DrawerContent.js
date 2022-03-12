import React from "react";
import { View, StyleSheet } from "react-native";
import { Avatar, Drawer, Text } from "react-native-paper";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";

import { config } from "../config/Config";
import { theme } from "../config/Theme";

const DrawerContent = ({ navigation }) => {
  const { colors } = theme;
  const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingHorizontal: config.wp("3%"),
      paddingVertical: config.hp("1.2%"),
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      backgroundColor: "#F4F4F4",
      borderBottomWidth: config.hp(".07%"),
      borderTopWidth: config.hp(".07%"),
      borderColor: theme.colors.fade,
    },
    userImageContainer: {
      flexDirection: "column",
      justifyContent: "center",
      marginLeft: config.wp("1.5%"),
    },
    sideContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      padding: 5,
      width: "80%",
    },

    row: {
      marginTop: config.hp("1.5%"),
      flexDirection: "row",
      alignItems: "center",
    },
    paragraph: {
      fontWeight: "bold",
      marginRight: 3,
    },
    drawerSection: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      paddingVertical: config.hp(".5%"),
      height: "100%",
      // backgroundColor: "yellow",
    },
    drawerItem: {
      overflow: "hidden",
      display: "flex",
      justifyContent: "center",
    },
    bottomDrawerSection: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    preference: {
      flexDirection: "row",
      justifyContent: "space-between",
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
    labelStyle: {
      fontSize: config.hp("2.25%"),
      color: "black",
    },
    userName: {
      fontSize: config.hp("2.5%"),
      paddingBottom: 5,
    },
    userSettingsContainer: {
      flexDirection: "column",
      justifyContent: "space-between",

      width: "80%",
    },

    userSettings: {
      flexDirection: "row",
      justifyContent: "flex-start",
    },
    userSettingsText: {
      fontSize: config.hp("1.6%"),
      color: colors.primary,
      fontWeight: "bold",
      paddingHorizontal: 7,
    },
  });
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView navigation={navigation} style={styles.drawer}>
        <Drawer.Section style={styles.drawerSection}>
          <View style={{ height: "50%" }}>
            <DrawerItem
              style={styles.drawerItem}
              labelStyle={styles.labelStyle}
              label="Songs"
              onPress={() => {
                navigation.navigate("SongsScreen");
              }}
            />
            <DrawerItem
              style={styles.drawerItem}
              labelStyle={styles.labelStyle}
              label="Beats"
              onPress={() => {
                navigation.navigate("Beats");
              }}
            />

            <DrawerItem
              style={styles.drawerItem}
              labelStyle={styles.labelStyle}
              label="Store"
              onPress={() => {
                navigation.navigate("Store");
              }}
            />
          </View>
          <View style={{ height: "50%", justifyContent: "flex-end" }}>
            <DrawerItem
              style={styles.drawerItem}
              labelStyle={styles.labelStyle}
              label="Profile"
              onPress={() => {
                navigation.navigate("ProfileNavigator");
              }}
            />
            <DrawerItem
              style={styles.drawerItem}
              labelStyle={styles.labelStyle}
              label="Settings"
              onPress={() => {
                navigation.navigate("Alerts");
              }}
            />
            <DrawerItem
              style={[styles.drawerItem, styles.drawerItem]}
              labelStyle={styles.labelStyle}
              label="Logout"
              //icon={() => <LogoutIcon />}
              onPress={() => logout()}
            />
          </View>

          <View style={{ paddingHorizontal: 15 }}></View>
        </Drawer.Section>
      </DrawerContentScrollView>
    </View>
  );
};

export default DrawerContent;
