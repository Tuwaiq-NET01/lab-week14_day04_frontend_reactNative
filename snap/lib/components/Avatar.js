import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Avatar() {
  return (
    <View style={styles.container}>
      <Text></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 35,
    width: 35,
    borderRadius: 50,
    backgroundColor: "#fff",
    borderWidth: 2,
    borderColor: "orange",
  },
});
