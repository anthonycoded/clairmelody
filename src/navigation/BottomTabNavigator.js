import React from "react";
import { Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  Ionicons,
  FontAwesome5,
  MaterialIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { config } from "../config/Config";
import { theme } from "../config/Theme";

import HomeNavigator from "./MainNavigator";
//import StoreNavigator from "./StoreNavigator";
import SongScreen from "../screens/SongScreen";
import Header from "../components/Header";
//import BeatScreen from "../screens/BeatsScreen";
import Player from "../components/Player";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          activeTintColor: theme.colors.primary,
          activeBackgroundColor: theme.colors.primary,
          inactiveTintColor: theme.colors.inActive,
          tabStyle: {
            backgroundColor: "#FFFFFF",
          },
          tabBarStyle: {
            position: "absolute",
            justifyContent: "center",
            height: config.hp("10%"),
          },
          labelStyle: {
            fontSize: config.hp("1.75%"),
          },
          keyboardHidesTabBar: true,
          headerShown: false,
        }}
      >
        <Tab.Screen
          name="homeTab"
          component={HomeNavigator}
          options={{
            headerTitle: (props) => <Header {...props} />,
            headerTitleAlign: "center",
            headerShown: true,
            headerBackVisible: false,
            tabBarLabel: ({ focused, color }) => (
              <Text
                style={{
                  color: focused ? theme.colors.primary : theme.colors.inActive,
                  fontSize: 14,
                }}
              >
                Home
              </Text>
            ),
            tabBarColor: theme.colors.primary,
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name="home-outline"
                size={focused ? 24 : 22}
                color={focused ? theme.colors.primary : theme.colors.inActive}
                backgroundColor={focused ? theme.colors.primary : "none"}
              />
            ),
          }}
        />
        <Tab.Screen
          name="SongsScreen"
          component={SongScreen}
          options={{
            headerShown: false,
            tabBarLabel: ({ focused, color }) => (
              <Text
                style={{
                  color: focused ? theme.colors.primary : theme.colors.inActive,
                  fontSize: 14,
                }}
              >
                Songs
              </Text>
            ),
            tabBarColor: theme.colors.primary,
            tabBarIcon: ({ focused }) => (
              <FontAwesome5
                name="headphones"
                size={24}
                color={focused ? theme.colors.primary : theme.colors.inActive}
              />
            ),
          }}
        />
        {/* <Tab.Screen
          name="Store"
          component={StoreNavigator}
          options={{
            headerShown: false,
            tabBarLabel: ({ focused, color }) => (
              <Text
                style={{
                  color: focused ? theme.colors.primary : theme.colors.inActive,
                  fontSize: 14,
                }}
              >
                Shop
              </Text>
            ),
            tabBarColor: theme.colors.primary,
            tabBarIcon: ({ focused }) => (
              <MaterialIcons
                name="store"
                size={24}
                color={focused ? theme.colors.primary : theme.colors.inActive}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Beats"
          component={BeatScreen}
          options={{
            headerShown: false,
            tabBarLabel: ({ focused, color }) => (
              <Text
                style={{
                  color: focused ? theme.colors.primary : theme.colors.inActive,
                  fontSize: 14,
                }}
              >
                Beats
              </Text>
            ),
            tabBarColor: theme.colors.primary,
            tabBarIcon: ({ focused }) => (
              <MaterialCommunityIcons
                name="piano"
                size={24}
                color={focused ? theme.colors.primary : theme.colors.inActive}
              />
            ),
          }}
        /> */}

        <Tab.Screen
          name="blank"
          component={HomeNavigator}
          options={{
            tabBarLabel: "Menu",
            tabBarColor: "black",
            tabBarLabel: ({ focused }) => (
              <Text
                style={{
                  color: focused ? theme.colors.primary : theme.colors.inActive,
                  fontSize: 14,
                }}
              >
                Menu
              </Text>
            ),
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name="menu-outline"
                size={focused ? 24 : 22}
                color={focused ? theme.colors.primary : theme.colors.inActive}
                backgroundColor={focused ? theme.colors.primary : "none"}
              />
            ),
          }}
          listeners={({ navigation }) => ({
            tabPress: (e) => {
              e.preventDefault();
              navigation.openDrawer();
            },
          })}
        />
      </Tab.Navigator>
      <Player></Player>
    </>
  );
};

export default BottomTabNavigator;
