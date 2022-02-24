import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet } from "react-native";

import Header from "../components/Header";
// import RegisterPath from "../screens/register/RegisterPath";
// import RegisterFormContainer from "../screens/register/RegisterFormContainer";
// import NewMemberScreen from "../screens/newMember/NewMemberScreen";
import LandingScreen from "../screens/landingScreen/LandingScreen";
import Help from "../screens/landingScreen/Help";
// import NewMemberFormContainer from "../screens/newMember/NewMemberFormContainer";
// import ChooseAccountScreen from "../screens/newMember/ChooseAccountScreen";
// import ForgotPassword from "../screens/landing/ForgotPassword";
import GoBack from "../components/GoBack";

const AuthNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LandingScreen}
          options={{
            headerShown: false,
            headerBackVisible: false,
          }}
        ></Stack.Screen>
        {/* <Stack.Screen
          name="Forgot"
          component={ForgotPassword}
          options={({ navigation }) => ({
            headerTitle: (props) => <Header {...props} />,
            headerTitleAlign: "center",
            headerStyle: styles.nav,
            headerBackVisible: false,
            headerLeft: () => {
              return <GoBack navigation={navigation} />;
            },
          })}
        ></Stack.Screen>
        <Stack.Screen
          name="RegisterPath"
          component={RegisterPath}
          options={{
            headerTitle: (props) => <Header {...props} />,
            headerTitleAlign: "center",
            headerStyle: styles.nav,
            headerBackVisible: false,
            headerLeft: () => {
              return null;
            },
          }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterFormContainer}
          options={{
            headerTitle: (props) => <Header {...props} />,
            headerTitleAlign: "center",
            headerStyle: styles.nav,
            headerLeft: () => {
              return null;
            },
          }}
        />

        <Stack.Screen
          name="NewMemberForms"
          component={NewMemberFormContainer}
          options={{
            headerTitle: (props) => <Header {...props} />,
            headerTitleAlign: "center",
            headerStyle: styles.nav,
            headerLeft: () => {
              return null;
            },
          }}
        />
        <Stack.Screen
          name="NewMemberPath"
          component={NewMemberScreen}
          options={{
            headerTitle: (props) => <Header {...props} />,
            headerTitleAlign: "center",
            headerStyle: styles.nav,
            headerLeft: () => {
              return null;
            },
          }}
        />
        <Stack.Screen
          name="ChooseAccount"
          component={ChooseAccountScreen}
          options={{
            headerTitle: (props) => <Header {...props} />,
            headerTitleAlign: "center",
            headerStyle: styles.nav,
            headerLeft: () => {
              return null;
            },
          }}
        /> */}
      </Stack.Navigator>
      <Help></Help>
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "#0EA44B",
    fontSize: 20,
  },
  nav: {
    backgroundColor: "white",
  },
  headerTitle: {
    color: "blue",
  },
  iconContainer: {
    height: "100%",
    width: 100,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  backIcon: {
    color: "black",
    fontSize: 20,
  },
  barText: {
    fontSize: 20,
  },
  container: {
    height: "100%",
  },
});

export default AuthNavigator;
