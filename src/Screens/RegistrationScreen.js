import React from "react";
import {
  TextInput,
  StyleSheet,
  View,
  Text,
  Button,
  Dimensions,
  Image,
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import logo from "./../../assets/logo.png";

const { width: WIDTH } = Dimensions.get("window");
const { height: HEIGHT } = Dimensions.get("window");

export const RegistrationScreen = ({ navigation }) => {
  const onPressHandler = () => {
    navigation.navigate("Login");
  };

  return (
    <LinearGradient colors={["#2C7853", "#19B859"]} start={[1, 0]} end={[0, 1]}>
      <View style={styles.bacground}>
        <View style={styles.logoContainer}>
          <Image source={logo} style={styles.logo} />
        </View>

        <View>
          <TextInput
            styles={styles.input}
            placeholder="Email"
            style={styles.input}
            autoCapitalize="none"
          ></TextInput>
          <TextInput
            styles={styles.input}
            placeholder="Password"
            style={styles.input}
            autoCapitalize="none"
          ></TextInput>
          <TextInput
            styles={styles.input}
            placeholder="Confirm Password"
            style={styles.input}
            autoCapitalize="none"
          ></TextInput>
          <Button
            style={styles.button}
            onPress={onPressHandler}
            title="Registration"
            color="#841584"
            accessibilityLabel="Registration"
          />
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  bacground: {
    width: WIDTH,
    height: HEIGHT,
    backgroundColor: "transparent",
  },
  input: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    padding: 10,
    fontSize: 16,
    paddingLeft: 45,
    backgroundColor: "rgba(0, 0, 0, 0.35)",
    color: "rgba(255, 255, 255, 0.7)",
    marginHorizontal: 25,
  },
  footer: {
    flex: 1,
    backgroundColor: "green",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
    marginTop: "60%",
  },
  button: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    padding: 10,
    fontSize: 16,
    paddingLeft: 45,
    marginHorizontal: 25,
  },

  logoContainer: {
    alignItems: "center",
  },
  logo: {
    borderRadius: 180,
    width: 320,
    height: 320,
  },
});
