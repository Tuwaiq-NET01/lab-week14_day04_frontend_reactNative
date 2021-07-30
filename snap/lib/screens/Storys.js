import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ScrollView,
  Dimensions,
} from "react-native";
import AppBar from "../components/AppBar";
import SectionTitle from "../components/SectionTitle";
import StoryCard from "../components/StoryCard";
import Feather from "react-native-vector-icons/Feather";

const windowWidth = Dimensions.get("window").width;
export default function Storys() {
  const names = [
    "Ezz",
    "Saud",
    "Meshal",
    "Thamer",
    "Sami",
    "Sara",
    "Sana",
    "Anas",
    "Khalid",
    "Fatima",
  ];

  const renderItem = ({ item }) => {
    return <StoryCard name={item} />;
  };
  return (
    <View style={styles.container}>
      <AppBar />
      <ScrollView style={styles.scrollV}>
        <View style={styles.section}>
          <SectionTitle title="Following" />
          <ScrollView horizontal={true}>
            <StoryCard name="Ezz" />
            <StoryCard name="Hussain" />
            <StoryCard name="Samirah" />
            <StoryCard name="Riyad" />
            <StoryCard name="Batool" />
            <StoryCard name="Mazen" />
          </ScrollView>
        </View>

        <View style={styles.section}>
          <SectionTitle title="Friends" />
          <FlatList
            data={names}
            horizontal={false}
            numColumns={3}
            renderItem={renderItem}
            keyExtractor={(item) => item}
          />
        </View>

        <View style={styles.section}>
          <SectionTitle title="Suggested" />
          <ScrollView horizontal={true}>
            <StoryCard name="Ezz" />
            <StoryCard name="Hussain" />
            <StoryCard name="Samirah" />
            <StoryCard name="Riyad" />
            <StoryCard name="Batool" />
            <StoryCard name="Mazen" />
          </ScrollView>
        </View>
        <View style={styles.scrollEnd}></View>
      </ScrollView>
      <View style={styles.footer}>
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
    backgroundColor: "#9f6ed3",
  },
  appBar: { flex: 0.1 },
  scrollV: {
    backgroundColor: "#fff",
    flex: 2,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    paddingBottom: 100,
  },
  scrollEnd: {
    height: 100,
  },
  section: {
    flex: 1,
  },
  footer: {
    height: 90,
    width: windowWidth,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    position: "absolute",
    bottom: 0,
  },
});
