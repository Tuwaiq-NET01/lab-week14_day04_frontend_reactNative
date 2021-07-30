import React from "react";
import { StyleSheet, View, Text, ImageBackground, Image } from "react-native";

const StoryCard = ({ username }) => {
  return (
    <View style={styles.storyCard}>
      <ImageBackground
        source={{ uri: "https://picsum.photos/200/300" }}
        resizeMode="cover"
        style={styles.storyBackground}
      >
        <Image
          style={styles.avatar}
          source={{ uri: "https://picsum.photos/200" }}
        ></Image>
        <Text style={styles.username}>{username}</Text>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  storyCard: {
    width: 200,
    height: 290,
  },
  storyBackground: {
    flex: 1,
    justifyContent: "center",
    borderRadius: 10,
    overflow: "hidden",
  },
  avatar: {
    width: 45,
    height: 45,
    alignSelf: "center",
    borderRadius: 50,
    borderColor: "white",
    borderWidth: 1,
    marginTop: 170,
    marginBottom: 15,
  },
  username: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 14,
  },
});
export default StoryCard;
