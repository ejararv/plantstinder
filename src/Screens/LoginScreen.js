import { LinearGradient } from "expo-linear-gradient";
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
import logo from "./../../assets/logo.png";
import { useFonts } from "expo-font";


const { width: WIDTH } = Dimensions.get("window");
const { height: HEIGHT } = Dimensions.get("window");



export const LoginScreen = ({ navigation }) => {

  const [loaded] = useFonts({
    Montserrat: require("./../../assets/fonts/Montserrat-Light.ttf"),
  });
  if (!loaded) {
    return null;
  }

  const onPressHandler = () => {
    navigation.navigate("Registration");
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
          <Button
            style={styles.button}
            onPress={onPressMyPlants}
            title="LogIn"
            color="#FFD200"
            accessibilityLabel="Login"
          />

          <Button
            style={styles.button}
            title="Go to Registration"
            color="#FFD200"
            onPress={onPressHandler}
          ></Button>
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  input: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 10,
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
    width: 45,
    height: 45,
    borderRadius: 45,
    marginHorizontal: 33,
    alignItems: 'center',
    padding: 10,
    fontSize: 16,
    paddingLeft: 45,
    marginHorizontal: 25,
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
    fontFamily:"Montserrat",
    fontSize:50,
    alignItems: "center",
    left: 55,
    
    color: "#FFFFFF",
  },
});
