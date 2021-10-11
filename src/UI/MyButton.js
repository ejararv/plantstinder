import { View, Button, StyleSheet, TouchableOpacity, Text } from "react-native";
import React from "react";

const MyButton = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.button}>
      <Text style={styles.text}>{props.text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 220,
    height: 50,
    justifyContent: "center",
    alignContent: "center",

    backgroundColor: "transparent",
    borderRadius: 14,
    backgroundColor: "#FFFF00",
    paddingVertical: 10,
    paddingHorizontal: 12,
    margin: 5,
  },
  text: {
    fontSize: 18,
    color: "#000000",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },
});

export default MyButton;
