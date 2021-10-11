import React from "react";
import { View, Text } from "react-native";
import { Navbar } from "../component/Navbar";
import { AntDesign } from "@expo/vector-icons";

export const HomeScreen = ({ navigation }) => {
  const openDrawer = () => {
    navigation.openDrawer();
  };
  return (
    <View>
      <Navbar
        title="Home"
        props={
          <AntDesign
            name="menufold"
            size={30}
            color="white"
            style={{ position: "relative", left: 20, top: 10, height: "auto" }}
            onPress={openDrawer}
          />
        }
      ></Navbar>
    </View>
  );
};
