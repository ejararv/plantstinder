import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export const Navbar = ({ props, title }) => {
  return (
    <LinearGradient colors={["#2C7853", "#19B859"]} start={[1, 0]} end={[0, 1]}>
      <View style={styles.navbar}>
        <View style={[styles.box, styles.box2]}>{props}</View>
        <View style={[styles.box, styles.two]}>
          <View>
            <Text style={styles.title}>{title}</Text>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  navbar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "transparent",
    marginTop: 30,
  },
  title: {
    fontSize: 35,
    position: "absolute",
    fontFamily: "Montserrat",
    color: "#FFFFFF",
    flex: 2,
  },
  text: {
    width: 53,
    fontFamily: "Montserrat",
    left: 55,
    color: "#FFFFFF",
  },

  row: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  box: {
    flex: 1,
    height: 55,
    backgroundColor: "transparent",
  },
  box2: {
    backgroundColor: "transparent",
  },
  box3: {
    backgroundColor: "transparent",
  },
  two: {
    flex: 2,
  },
});
