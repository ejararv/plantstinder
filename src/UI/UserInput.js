import { View, StyleSheet, Text, Dimensions } from "react-native";
import React from "react";

import { TextInput } from "react-native-gesture-handler";

const { width: WIDTH } = Dimensions.get("window");

const UserInput = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.text}</Text>
      <TextInput style={styles.input} {...props}></TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  input: {
    width: WIDTH - 55,

    borderRadius: 10,
    padding: 10,
    fontSize: 16,
    paddingLeft: 45,
    backgroundColor: "rgba(0, 0, 0, 0.35)" || props.color,
    color: "rgba(255, 255, 255, 0.7)",
    marginHorizontal: 25,
  },
});

export default UserInput;
