import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import StoryCard from "./StoryCard";
import Feather from "react-native-vector-icons/Feather";

export default function App() {
  const usernames = [
    "Alice",
    "Saud",
    "Dania",
    "Ahmed",
    "Reem",
    "Mohammed",
    "Nadia",
    "Carl",
    "Jojo",
    "Steve",
  ];
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.searchBar}>
        <Feather name="search" size={35} color="white"></Feather>
        <Text>Search</Text>
      </View>

      <View>
        <ScrollView vertical>
          {usernames.map((u, i) => (
            <View key={i} style={styles.stories}>
              <StoryCard key={i} username={u} />
            </View>
          ))}
        </ScrollView>
      </View>
      <View style={styles.actions}>
        <Feather name="message-square" size={25} color="gray"></Feather>
        <Feather name="circle" size={70} color="gray"></Feather>
        <Feather name="more-horizontal" size={30} color="gray"></Feather>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 25,
  },
  searchBar: {
    height: 70,
    backgroundColor: "#9354bc",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  stories: {
    marginLeft: 10,
    marginBottom: 10,
    display: "flex",
  },
  actions: {
    width: 100,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
  },
});
