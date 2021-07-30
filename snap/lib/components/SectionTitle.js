import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function SectionTitle(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {props.title} {">"}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "row",
    marginHorizontal: 15,
    marginVertical: 10,
  },
  text: {
    color: "#000",
    fontSize: 18,
    fontWeight: "bold",
  },
});
