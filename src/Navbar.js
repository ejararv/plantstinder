import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Icon, Header, Left } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign } from "@expo/vector-icons";

export const Navbar = ({props, title}) => {
  
  return (
    <LinearGradient colors={["#2C7853", "#19B859"]} start={[1, 0]} end={[0, 1]} >
        
        
      <View style={styles.navbar}>
     {props}
        
      </View>
      <View>
     
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  navbar: {
    height: 80,
    justifyContent: "center",
    backgroundColor: "transparent",
    paddingBottom: 10,
  },
  text: {
    width: 53,
    fontFamily:"Montserrat",
    fontSize:50,
    
    left: 55,
    
    color: "#FFFFFF",
  },
 
});
