import { StyleSheet } from "react-native";
import { config } from "../../config/Config";
import { theme } from "../../config/Theme";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: config.hp("22%"),
    paddingHorizontal: config.wp("4%"),
    overflow: "hidden",
  },
  inputContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    height: "100%",
    width: "100%",
  },
  inputView: {
    width: "100%",
    height: config.hp("12%"),
  },
  input: {
    // height: config.deviceHeight * 0.09,
    height: config.hp("10%"),
    backgroundColor: "white",
    fontSize: config.hp("2.15%"),
  },
  inputTry: {
    flex: 1,
  },
  bioContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: config.hp("7%"),
    paddingHorizontal: config.wp("2%"),
    height: "60%",
    marginTop: config.hp("4%"),
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: config.hp("3%"),
    paddingHorizontal: config.wp("2%"),
  },
  button: {
    backgroundColor: theme.colors.primary,
    borderRadius: config.hp(".5%"),
    paddingVertical: config.hp("1.35%"),
    width: "100%",
    elevation: config.hp(".5%"),
  },
  buttonText: {
    color: "white",
    fontSize: config.hp("2.55%"),
    textAlign: "center",
  },

  signIn: {
    color: "black",
    marginTop: 10,
    height: 50,
  },
  switchContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 25,
    paddingVertical: 10,
    color: "gray",
  },
  switchText: {
    color: "gray",
  },
  touchId: {
    flexDirection: "row",
    color: "black",
    backgroundColor: theme.colors.primary,
    borderRadius: config.hp(".5%"),
    paddingVertical: config.hp("1.35%"),
    width: "100%",
    elevation: config.hp(".5%"),
    paddingHorizontal: config.wp("4%"),
  },
});
