import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import HomeScreen from "../screens/homeScreen/HomeScreen";
import Header from "../components/Header";
import StoreScreen from "../screens/store/StoreScreen";
import CollectionScreen from "../screens/store/Collections/CollectionScreen";
import MerchDetailsScreen from "../screens/store/merchandise/MerchDetailsScreen";
import MusicDetailScreen from "../screens/store/sections/musicDetails/MusicDetailScreen";
import GoBack from "../components/GoBack";
import CartButton from "../components/CartButton";
import CartScreen from "../screens/store/cart/CartScreen";

const Stack = createNativeStackNavigator();

const StoreNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="index"
        component={StoreScreen}
        options={({ navigation }) => ({
          headerTitle: (props) => <Header {...props} />,
          headerTitleAlign: "center",
          headerShown: true,
          headerBackVisible: false,
        })}
      ></Stack.Screen>
      <Stack.Screen
        name="Collection"
        component={CollectionScreen}
        options={({ navigation }) => ({
          headerTitle: (props) => <Header {...props} />,
          headerTitleAlign: "center",
          headerShown: true,
          headerBackVisible: false,
        })}
      ></Stack.Screen>
      <Stack.Screen
        name="ProductDetails"
        component={MerchDetailsScreen}
        options={({ navigation }) => ({
          headerTitle: (props) => <Header {...props} />,
          headerTitleAlign: "center",
          headerShown: true,
          headerBackVisible: false,
          headerLeft: () => {
            return <GoBack navigation={navigation} />;
          },
          headerRight: () => {
            return <CartButton navigation={navigation} />;
          },
        })}
      ></Stack.Screen>
      <Stack.Screen
        name="MusicDetails"
        component={MusicDetailScreen}
        options={({ navigation }) => ({
          headerTitle: (props) => <Header {...props} />,
          headerTitleAlign: "center",
          headerShown: true,
          headerBackVisible: false,
          headerLeft: () => {
            return <GoBack navigation={navigation} />;
          },
        })}
      ></Stack.Screen>
      <Stack.Screen
        name="Cart"
        component={CartScreen}
        options={({ navigation }) => ({
          headerTitle: (props) => <Header {...props} />,
          headerTitleAlign: "center",
          headerShown: true,
          headerBackVisible: false,
          headerLeft: () => {
            return <GoBack navigation={navigation} />;
          },
        })}
      ></Stack.Screen>
    </Stack.Navigator>
  );
};

export default StoreNavigator;
