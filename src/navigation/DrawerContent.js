import React from "react";
import { View, StyleSheet } from "react-native";
import { Avatar, Drawer, Text } from "react-native-paper";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { TouchableOpacity } from "react-native-gesture-handler";

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
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={styles.userImageContainer}></View>
            <View style={styles.sideContainer}>
              <View style={styles.userSettingsContainer}>
                <Text style={styles.userName}>Jane Smith</Text>
                <TouchableOpacity
                  style={styles.userSettings}
                  onPress={() => {
                    navigation.navigate("Profile/Settings");
                  }}
                >
                  <Text style={styles.userSettingsText}>Profile</Text>
                  <Text style={styles.userSettingsText}>Settings</Text>
                  <Text style={styles.userSettingsText}>Disclosures</Text>
                </TouchableOpacity>
              </View>
              <Icon
                name="close"
                color={colors.primary}
                size={config.hp("4.5%")}
                onPress={() => {
                  navigation.toggleDrawer();
                }}
              />
            </View>
          </View>
          {/* <View style={styles.row}></View> */}
        </View>

        <Drawer.Section style={styles.drawerSection}>
          <DrawerItem
            style={styles.drawerItem}
            labelStyle={styles.labelStyle}
            label="Accounts"
            onPress={() => {
              navigation.navigate("Accounts");
            }}
          />
          <DrawerItem
            style={styles.drawerItem}
            labelStyle={styles.labelStyle}
            label="Mobile Deposit"
            onPress={() => {
              navigation.navigate("depositTab");
            }}
          />
          <DrawerItem
            style={styles.drawerItem}
            labelStyle={styles.labelStyle}
            label="Transfer Funds"
            onPress={() => {
              navigation.navigate("transferTab");
            }}
          />

          <DrawerItem
            style={styles.drawerItem}
            labelStyle={styles.labelStyle}
            label="BillPay"
            onPress={() => {
              navigation.navigate("BillPayStack");
            }}
          />
          <DrawerItem
            style={styles.drawerItem}
            labelStyle={styles.labelStyle}
            label="Card Control"
            onPress={() => {
              navigation.navigate("CardControls");
            }}
          />
          <DrawerItem
            style={styles.drawerItem}
            labelStyle={styles.labelStyle}
            label="eStatements"
            onPress={() => {
              navigation.navigate("E-statements");
            }}
          />
          <DrawerItem
            style={styles.drawerItem}
            labelStyle={styles.labelStyle}
            label="eMessage center"
            onPress={() => {
              navigation.navigate("e-message");
            }}
          />
          <DrawerItem
            style={styles.drawerItem}
            labelStyle={styles.labelStyle}
            label="eSafe"
            onPress={() => {
              navigation.navigate("e-safe");
            }}
          />
          <DrawerItem
            style={styles.drawerItem}
            labelStyle={styles.labelStyle}
            label="Reminders"
            onPress={() => {
              navigation.navigate("Profile/Settings", {
                screen: "profileReminders",
              });
            }}
          />
          <DrawerItem
            style={styles.drawerItem}
            labelStyle={styles.labelStyle}
            label="Alerts"
            onPress={() => {
              navigation.navigate("Alerts");
            }}
          />
          <DrawerItem
            style={[styles.drawerItem, styles.drawerItem2]}
            labelStyle={styles.labelStyle}
            label="Logout"
            onPress={() => {
              navigation.navigate("Camera");
            }}
          />

          <View style={{ paddingHorizontal: 15 }}></View>
        </Drawer.Section>
      </DrawerContentScrollView>
    </View>
  );
};

export default DrawerContent;
