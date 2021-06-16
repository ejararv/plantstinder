import React from "react";
import { View, Text, StyleSheet, Dimensions,FlatList, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Footer } from "../Footer";
import { Navbar } from "../Navbar";
import { AntDesign } from "@expo/vector-icons";
import {bg} from './../../assets/bg.jpg'
import { logo} from './../../assets/logo.png'
import {plant} from './../../assets/plant.png'

const { width: WIDTH } = Dimensions.get("window");
const { height: HEIGHT } = Dimensions.get("window");

export const HomeScreen = ({ navigation }) => {
  const openDrawer = () => {
    navigation.openDrawer();
  };

  const data = [
    {
      id: 1,
      title: 'ALOE',
      key:1,
      image:'./../../assets/bg.jpg'
    },
    {
      id:2,
      title: 'ALOE VERA',
      key:2,
      image: './../../assets/logo.png'
    },
    {
      id:3,
      title: 'ALOE VERA 3 ',
      key:3,
      image: './../../assets/plant.png'
    }
  ]
  return (
    <View>
    <View>
      <Navbar
        props={
          <AntDesign
            name="menufold"
            size={30}
            color="white"
            style={styles.menu}
            onPress={openDrawer}
          />
        }
      ></Navbar>
     
    </View>
    <View>
        {/* <FlatList 
        data={data}
        renderItem={({ item }) => (
          // <View>
          // <Image source={{url: item.image}} style={styles.logo}> </Image>
          // </View>,
          // <View>
          // <Text style={styles.text}>{item.title}</Text>
          // </View>
          

        )}> 

        </FlatList>*/}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bacground: {
    width: WIDTH,
    height: HEIGHT,
    backgroundColor: "transparent",
  },
  menu: {
    position: "relative",
    left: 20,
    top: 10,
    height: "auto",
  },
  text: {
    fontFamily: "Montserrat",
    fontSize: 24,
    alignItems: "center",
    left: 20,
  },
  logo: {
    marginTop: 70,
    width: 150,
    height: 160,
  },
});
