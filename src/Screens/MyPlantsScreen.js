import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  FlatList,
  Image,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Footer } from "../Footer";
import { Navbar } from "../Navbar";
import { AntDesign } from "@expo/vector-icons";
import bg from "./../../assets/bg.jpg";
import logo from "./../../assets/logo.png";
import kaktus from "./../../assets/kaktus.jpg";
import aloe from "./../../assets/aloe.jpg";
import plant from "./../../assets/plant.png";
import SearchBarComponent from "./../SearchBarComponent";
import SearchBar from "react-native-elements/dist/searchbar/SearchBar-ios";

const { width: WIDTH } = Dimensions.get("window");
const { height: HEIGHT } = Dimensions.get("window");

export const MyPlantsScreen = ({ navigation }) => {
  const openDrawer = () => {
    navigation.openDrawer();
  };

  const data = [
    {
      id: 1,
      title: "ALOE",
      key: 1,
      image: "./../../assets/bg.jpg",
    },
    {
      id: 2,
      title: "ALOE VERA",
      key: 2,
      image: "./../../assets/bg.jpg",
    },
    {
      id: 3,
      title: "ALOE VERA 3 ",
      key: 3,
      image: "./../../assets/bg.jpg",
    },
  ];
  return (
    <View>
      <View>
        <Navbar
          title="My Plants"
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
        <SearchBar></SearchBar>
      </View>

      <View style={styles.logoContainer}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View style={{}}>
            <Image source={kaktus} style={styles.logo}></Image>
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={styles.text}> KAKTUS  JAN</Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View>
            <Image source={aloe} style={styles.logo}></Image>
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={styles.text}> ALOE VERA</Text>
          </View>
        </View>
       

        {/* <FlatList 
        data={data}
        
        keyExtractor={item => item.key}
        renderItem={({ item }) => (
          <View>
          <Image source={{uri: item.image}} style={styles.logo}></Image>
          </View>,
          
          <View>
          <Text style={styles.text}>{item.title}</Text>
          </View>
          

        )}> 

        </FlatList> */}
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
    width: 140,
    height: 130,
    borderRadius: 90,
  },
  logoContainer: {
    alignItems: "center",
  },
});
