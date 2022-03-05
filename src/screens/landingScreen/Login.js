import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Switch,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { TextInput } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { useIsFocused } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";
import LottieView from "lottie-react-native";

import { styles } from "./style";
import { userLoginMain } from "../../store/actions/authActions";
import { GetBeats } from "../../store/actions/beatActions";
import { GetSongs } from "../../store/actions/songActions";
import ErrorModal from "../../components/modals/ErrorModal";

const Login = ({ navigation }) => {
  const profile = useSelector((state) => state.profile);
  const accounts = useSelector((state) => state.accounts);
  const auth = useSelector((state) => state.auth);
  //const rememberUserId = profile?.rememberUserId;
  const enableBioAuth = profile?.enableBioAuth || false;

  const [showErrorModal, setShowErrorModal] = useState(false);
  const [error, setError] = useState(undefined);
  const [isBiometricSupported, setIsBiometricSupported] = useState(false);
  const [isEnabled, setIsEnabled] = useState(profile?.rememberUserId || false);
  const [showLogin, setShowLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState();
  const [type, setType] = useState([]);
  const dispatch = useDispatch();
  const isFocused = useIsFocused();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  //Check if BioAuth is enabled and is RememberUserId enabled
  //   useEffect(() => {
  //     setShowLogin(!enableBioAuth);
  //     if (rememberUserId) {
  //       setUsername(username);
  //     }
  //     setIsEnabled(rememberUserId);
  //   }, [enableBioAuth, rememberUserId]);

  //INPUT HANDLER
  const handleChange = (name, value) => {
    setUser({ ...user, [name]: value });
  };

  //Submit Login to backend
  const handleSubmit = () => {
    setUsername(user.email);
    setLoading(true);
    dispatch(userLoginMain(user));
    // if (isEnabled) {
    //   dispatch(
    //     ToggleRememberUserId({
    //       remember: true,
    //       email: user.email,
    //     })
    //   );
    // }
  };
  useEffect(() => {
    //Auth Successful
    if (auth?.success) {
      //dispatch(SetUserID(user.email));
      //dispatch(GetNameAndProfilePic());
      async function loadData() {
        //dispatch(GetBeats());
        //dispatch(GetSongs());
        await navigation.navigate("Drawer"); //Navigate to home screen
        setLoading(false); //Remove Loading Spinner
      }

      loadData();

      //if (!isEnabled) {
      //Reset Username
      setUser({
        email: "",
        password: "",
      });
      //return;
      //   } else {
      //     setUser({
      //       email: rememberUserId ? profile.email : "",
      //       password: "",
      //     });
      //   }

      //Auth Failed
    } else if (auth?.success == false && auth?.error) {
      setLoading(false); //Remove Loading Spinner
      setError(auth.error); //set error message to be displayed in modal
      setShowErrorModal(true); //Show Error Modal
      //Reset Username
      //   setUser({
      //     email: rememberUserId ? profile.email : "",
      //     password: "",
      //   });
    }
  }, [auth]);
  //Toggle Remember UserId
  const toggleSwitch = () => {
    //setIsEnabled(!isEnabled);
  };

  //////////////////////////////////////////////////////////////////////////////////////////////////////////
  //   const checkHardware = async () => {
  //     const types = await LocalAuthentication.supportedAuthenticationTypesAsync();

  //     setType(types);
  //     const savedBiometrics = await LocalAuthentication.isEnrolledAsync();
  //     if (!savedBiometrics && enableBioAuth)
  //       return alert(
  //         "Biometric record not found",
  //         "Please verify your identity with your password",
  //         "OK",
  //         () => fallBackToDefaultAuth()
  //       );
  //   };

  //   // Check if hardware supports biometrics
  //   useEffect(() => {
  //     const compatible = LocalAuthentication.hasHardwareAsync();
  //     setIsBiometricSupported(compatible);
  //     checkHardware();
  //   }, []);

  //   const bioLogin = async () => {
  //     //Set message to display with bio login
  //     const result = await LocalAuthentication.authenticateAsync({
  //       promptMessage:
  //         type[0] == 1 && Platform.OS == "ios"
  //           ? "Sign In with Touch ID"
  //           : type[0] == 1 && Platform.OS == "android"
  //           ? "Sign In With FingerPrint"
  //           : type[0] == 2
  //           ? "Sign In with Face ID"
  //           : type[0] == 3
  //           ? "Use Iris Recognition"
  //           : "Your device is not compatible with Touch Id or facial recognition",
  //       cancelLabel: "Cancel",
  //       disableDeviceFallback: false,
  //       fallbackLabel: "string",
  //     });
  //     //If Successful Bio Auth Submit Login
  //     if (result.success === true) {
  //       handleSubmit();
  //     }
  //   };
  //Close Error Modal
  const closeErrorModal = () => {
    setShowErrorModal(false);
  };

  useEffect(() => {
    // if (!rememberUserId) {
    //   setUser({
    //     ...user,
    //     email: "",
    //   });
    // }
  }, [isFocused]);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "padding"}
    >
      <ScrollView>
        <View style={{ paddingBottom: Platform.OS == "android" ? -200 : 50 }}>
          {loading ? (
            <View
              style={{
                alignItems: "center",
                justifyContent: "flex-start",
                height: "100%",
                paddingTop: 25,
              }}
            >
              <LottieView
                loop
                autoPlay
                style={{
                  width: 160,
                  height: 160,
                }}
                source={require("../../../assets/lottieFiles/loading-spinner.json")}
              />
            </View>
          ) : loading == false && showLogin ? (
            <View>
              <View style={styles.container}>
                <View style={styles.inputContainer}>
                  <View style={styles.inputView}>
                    <TextInput
                      underlineColor="gray"
                      style={styles.input}
                      label="Email"
                      placeholder="Enter your username"
                      onChangeText={(value) => handleChange("email", value)}
                      textContentType="username"
                    />
                  </View>

                  <View style={styles.inputView}>
                    <TextInput
                      underlineColor="gray"
                      style={styles.input}
                      label="Password"
                      placeholder="Enter your Password"
                      onChangeText={(value) => handleChange("password", value)}
                      value={user.password}
                      secureTextEntry
                      textContentType="password"
                    />
                  </View>
                </View>
              </View>
              <View style={styles.switchContainer}>
                <Text style={styles.switchText}>Remember User ID</Text>
                <Switch
                  trackColor={{ false: "#767577", true: "rgb(14, 164, 75)" }}
                  thumbColor={isEnabled ? "white" : "#f4f3f4"}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSwitch}
                  value={isEnabled}
                />
              </View>

              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  activeOpacity={0.85}
                  onPress={() => handleSubmit()}
                  style={styles.button}
                >
                  <Text style={styles.buttonText}>Sign In with password</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("Forgot")}>
                  <Text style={{ paddingVertical: 10 }}>Forgot Password?</Text>
                </TouchableOpacity>
                {enableBioAuth ? (
                  <TouchableOpacity
                    activeOpacity={0.85}
                    onPress={() => setShowLogin(false)}
                    style={styles.signIn}
                  >
                    <Text style={{ color: "black" }}>
                      {type[0] == 1 && Platform.OS == "ios"
                        ? "Sign In with Touch ID"
                        : type[0] == 1 && Platform.OS == "android"
                        ? "Sign In With FingerPrint"
                        : type[0] == 2
                        ? "Sign In with Face ID"
                        : type[0] == 3
                        ? "Use Iris Recognition"
                        : "Your device is not compatible with Touch Id or facial recognition"}
                    </Text>
                  </TouchableOpacity>
                ) : undefined}
              </View>
            </View>
          ) : loading == false && enableBioAuth ? (
            <View style={styles.bioContainer}>
              <View style={styles.buttonContainer}>
                {isBiometricSupported && enableBioAuth == true ? (
                  <TouchableOpacity
                    // disabled={!formOneIsFilled}
                    activeOpacity={0.85}
                    style={styles.touchId}
                    onPress={bioLogin}
                  >
                    <Text style={styles.buttonText}>
                      {type[0] == 1 && Platform.OS == "ios"
                        ? "Sign In with Touch ID"
                        : type[0] == 1 && Platform.OS == "android"
                        ? "Sign In With FingerPrint"
                        : type[0] == 2
                        ? "Sign In with Face ID"
                        : type[0] == 3
                        ? "Use Iris Recognition"
                        : "Your device is not compatible with Touch Id or facial recognition"}
                    </Text>
                  </TouchableOpacity>
                ) : undefined}
                <TouchableOpacity
                  activeOpacity={0.85}
                  onPress={() => setShowLogin(true)}
                  style={styles.signIn}
                >
                  <Text style={{ color: "black" }}>Sign In with password</Text>
                </TouchableOpacity>
              </View>
            </View>
          ) : undefined}
        </View>
        <ErrorModal
          showErrorModal={showErrorModal}
          closeErrorModal={closeErrorModal}
          error={error}
        ></ErrorModal>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Login;
