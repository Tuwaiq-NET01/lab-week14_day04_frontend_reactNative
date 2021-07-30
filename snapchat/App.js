import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, TextInput, ScrollView, Dimensions, Image, StatusBar } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Story from './Story'
import Feather from 'react-native-vector-icons/Feather'
import BigStory from './BigStory'
const windowWidth = Dimensions.get('window').width;
export default function App() {
  const names = ["Hana", "Maryam", "Batool", "Samirah", "Reema", "Mohammed", "Sana", "Osama", "Ahmed"]
  const [term, useTerm] = useState("")
  const [result, useResult] = useState([])
  useEffect(() => {
    const result = names.filter((item) =>
      item.toLowerCase().includes(term))
    useResult(result)
  }, [term])
  return (

    <View style={styles.container}>
      <StatusBar style={{ backgroundColor: "#9354bc" }} backgroundColor="#9354bc" hidden />
      <View style={styles.searchBox}>
        <View style={styles.leftSide}>
          <Image
            style={styles.avatar}
            source={{ uri: "https://picsum.photos/200" }}>
          </Image>
          <Ionicons style={styles.icon} name="search" size={25} color="white"></Ionicons>
          <TextInput onChangeText={(text) => useTerm(text)} placeholder="Discover" placeholderTextColor="white"></TextInput>
        </View>
        <Ionicons name="add" size={30} color="white"></Ionicons>
      </View>
      <Text style={{ fontWeight: "bold", marginLeft: 10, marginTop: 20 }}>Following ➤</Text>
      <View>
        <ScrollView style={styles.scrollV} horizontal showsHorizontalScrollIndicator={false}>
          {result.map((name, index) => (
            <View key={index} style={styles.stories}>
              <Story key={index} username={name} />
            </View>
          ))}
        </ScrollView>
      </View>
      <Text style={{ fontWeight: "bold", marginLeft: 10, marginTop: 10 }}>Friends ➤</Text>
      <View>
        <ScrollView style={styles.scrollV} showsHorizontalScrollIndicator={false}>
          <View style={styles.friends} >
            {result.map((name, index) => (
              <View key={index} style={styles.stories}>
              <BigStory key={index} username={name} />
            </View>
            ))}
          </View>

        </ScrollView>
      </View>
      <View style={styles.footer}>
        <Feather name="message-square" size={25} color="gray"></Feather>
        <Feather name="circle" size={70} color="gray"></Feather>
        <Feather name="more-horizontal" size={30} color="gray"></Feather>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 25,
  },
  searchBox: {
    height: 70,
    backgroundColor: "#9354bc",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    alignItems: "center"
  },
  leftSide: {
    flexDirection: "row"
  },
  icon: {
    margin: 10
  },
  scrollV: {
    marginTop: 10,
    marginLeft: 10,
    marginBottom: 10,
  },
  stories: {
    marginRight: 10,
    marginBottom:10
  },
  footer: {
    height: 90,
    width: windowWidth,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    position: "absolute",
    bottom: 0
  },
  avatar: {
    width: 35,
    height: 35,
    borderRadius: 50,
    borderColor: "white",
    alignSelf: "center",
    borderWidth: 1,
  },
  friends: {
    display:"flex",
    flexDirection:"row",
    height:2000,
    flexWrap:"wrap"
  }
})