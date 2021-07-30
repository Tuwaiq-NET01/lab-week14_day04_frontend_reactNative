import React from "react";
import { View, Text, StyleSheet, FlatList, ScrollView } from "react-native";
import AppBar from "../components/AppBar";
import SectionTitle from "../components/SectionTitle";
import StoryCard from "../components/StoryCard";

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
      </ScrollView>
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
  },
  section: {
    flex: 1,
  },
});
