import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Avatar from "./Avatar";
export default function AppBar() {
  return (
    <View style={styles.searchBox}>
      <View style={styles.leftSide}>
        <Avatar />

        <Ionicons
          style={styles.icon}
          name="search"
          size={25}
          color="white"
        ></Ionicons>
        <TextInput
          onChangeText={(text) => useTerm(text)}
          placeholder="Discover"
          placeholderTextColor="white"
        />
      </View>
      <Ionicons name="add" size={30} color="white"></Ionicons>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchBox: {
    height: 50,
    backgroundColor: "#9f6ed3",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    alignItems: "center",
  },
  leftSide: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    margin: 10,
  },
});
