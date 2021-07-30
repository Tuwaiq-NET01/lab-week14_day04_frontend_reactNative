import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Avatar from "./Avatar";

export default function StoryCard(props) {
  const rand = (min, max) => {
    return min + Math.random() * (max - min);
  };

  const get_random_color = () => {
    var h = rand(1, 255);
    var s = rand(0, 255);
    var l = rand(0, 255);
    return "rgb(" + h + "," + s + "," + l + ")";
  };
  return (
    <View style={[styles.container, { backgroundColor: get_random_color() }]}>
      <Avatar />
      <Text style={styles.name}>{props.name}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 150,
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
    justifyContent: "flex-end",
    margin: 10,
  },
  name: {
    color: "#fff",
    fontWeight: "bold",
  },
});
