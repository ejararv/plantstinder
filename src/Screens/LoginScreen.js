import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import {
  TextInput,
  StyleSheet,
  View,
  Text,
  Dimensions,
  Image,
} from "react-native";
import logo from "./../../assets/logo.png";
import { useFonts } from "expo-font";
import MyButton from "../UI/MyButton";
import UserInput from "../UI/UserInput";

const { width: WIDTH } = Dimensions.get("window");
const { height: HEIGHT } = Dimensions.get("window");

export const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [loaded] = useFonts({
    Montserrat: require("./../../assets/fonts/Montserrat-Light.ttf"),
  });
  if (!loaded) {
    return null;
  }

  const onPressHandler = () => {
    navigation.navigate("Registration");
  };

  const showLoginData = () => {
    return console.log(email, password);
  };
  const onPressMyPlants = () => {
    navigation.navigate("MyPlantsScreen");
  };
  return (
    <LinearGradient colors={["#2C7853", "#19B859"]} start={[1, 0]} end={[0, 1]}>
      <View style={styles.bacground}>
        <View style={styles.logoContainer}>
          <Image source={logo} style={styles.logo} />
        </View>
        <View>
          <Text style={styles.text}>GreenMate</Text>
        </View>

        <View style={styles.container}>
          <UserInput
            placeholder="Email"
            onChange={(e) => setEmail(e.nativeEvent.text)}
            autoCapitalize="none"
          />
          <UserInput
            placeholder="Password"
            onChange={(e) => setPassword(e.nativeEvent.text)}
            autoCapitalize="none"
          />

          <MyButton text="LogIn" onPress={onPressMyPlants} />
          <MyButton text="Go to Registration" onPress={onPressHandler} />
          <MyButton text="LogIn data" onPress={showLoginData} />
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "space-around",
    padding: 20,
    alignItems: "center",
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

  logoContainer: {
    alignItems: "center",
  },

  bacground: {
    width: WIDTH,
    height: HEIGHT,
    backgroundColor: "transparent",
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
  logo: {
    marginTop: 70,
    width: 150,
    height: 160,
  },
  text: {
    width: 533,
    fontFamily: "Montserrat",
    fontSize: 50,
    alignItems: "center",
    left: 55,

    color: "#FFFFFF",
  },
});
