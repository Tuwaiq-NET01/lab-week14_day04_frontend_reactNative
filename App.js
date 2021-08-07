import React, {useState, useEffect} from 'react'
import { View, Text, StyleSheet, TextInput, ScrollView, Dimensions, Image } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Stories from './components/Stories'
import Feather from 'react-native-vector-icons/Feather'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

const windowWidth = Dimensions.get('window').width;

export default function App() {

  return (
    <View style={styles.container}>
      <View style={styles.searchBox}>
        <View style={styles.leftSide}>
          <Image style={styles.profilePic} source={require('./assets/profilepic.jpg')}/>
          <Ionicons style={styles.icon} name="search" size={25} color="white"></Ionicons>
          <TextInput onChangeText={(text) => useTerm(text)} placeholder="Discover" placeholderTextColor="white"></TextInput>
        </View>
        <MaterialIcons name="person-add-alt-1" size={25} color="white"></MaterialIcons>
      </View>

      <ScrollView style={styles.scrollV}>
        <Stories/>

      <View style={styles.footer}>
        <Ionicons name="chatbox" size={25} color="#bdb9b9"></Ionicons>
        <Feather name="circle" size={70} color="#bdb9b9"></Feather>
        <FontAwesome5 name="pause" size={30} color="#bdb9b9"></FontAwesome5>
      </View>      </ScrollView>

    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
  },
  profilePic:
  {
    margin: 10,
    height: 30, 
    width: 30,
    borderRadius: 50,
    borderWidth:1.5,
    borderColor: 'white'
  },
  searchBox: {
    height: 80,
    backgroundColor: "#9153bb",
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
    margin: -10,
    backgroundColor: "white",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  footer: {
    height: 90,
    width: windowWidth,
    flexDirection: "row", 
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 1, 
    position: "absolute",
    bottom: -10,
  }
})