import React from "react";
import { View, Text } from "react-native";
import { Navbar } from "../Navbar";
import { AntDesign } from "@expo/vector-icons";

export const AdvertisementsScreen = ({navigation}) => {

  const openDrawer = () => {
    navigation.openDrawer();
  }; 
  return (
    <View>
      <Navbar 
      title="Advertisements"

      props={
        <AntDesign
          name="menufold"
          size={30}
          color="white"
          style={{position: "relative",
          left: 20,
          top: 10,
          height: "auto"}}
          onPress={openDrawer}
        />
      }></Navbar>
    </View>
  );
};
