import React, {useState, useEffect} from 'react'
import { View, Text, StyleSheet, TextInput, ScrollView, Dimensions  } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Message from './components/SnapchatStory'
import { Image } from 'react-native'
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import Feather from 'react-native-vector-icons/Feather'
const windowWidth = Dimensions.get('window').width;
export default function App() {
  const names = ["Abdulaziz", "Ahmed", "Ali", "Sana", "Rawabe", "Afnan", "Salwa", "Riyad", "Younes","Ahmed","Afnan"]
  const [term, useTerm] = useState("")
  const [result, useResult] = useState([])
  useEffect(() => {
    const result = names.filter((item) => 
      item.toLowerCase().includes(term))
    useResult(result)
  }, [term])
  return (
    <View style={styles.container}>
      <View style={styles.searchBox}>
        <View style={styles.leftSide}>
        <Image 
  source={{
    uri: 'https://www.pngitem.com/pimgs/m/128-1284293_marina-circle-girl-picture-in-circle-png-transparent.png'
  }} 
  
  style={{width: 35, height: 35, borderRadius: 35/ 2,marginTop:5}} 
/>

          <Ionicons style={styles.icon} name="search" size={25} color="white"></Ionicons>
          <TextInput onChangeText={(text) => useTerm(text)} placeholder="Discover" placeholderTextColor="white"></TextInput>
        </View>
        <MaterialIcons name="person-add-alt-1" size={30} color="white"></MaterialIcons>
        {/* <Ionicons name="add" size={30} color="white"></Ionicons> */}
      </View>
      <ScrollView style={styles.scrollV}>
       
        
        <Message  username={"Name"} image2={"https://www.pngitem.com/pimgs/m/128-1284293_marina-circle-girl-picture-in-circle-png-transparent.png"} image1={"https://i.pinimg.com/originals/e1/42/4d/e1424d64b5b36667aa15fe86f6424438.png"}/>
      {/* {result.map((name, index) => (
        <Message key={index} username={"name"} image2={"https://www.pngitem.com/pimgs/m/128-1284293_marina-circle-girl-picture-in-circle-png-transparent.png} image1={https://m7et.com/wp-content/uploads/2020/04/69d1a788bc2b9dc45340a3d5343f9c75.jpg"}/>
      ))} */}
      </ScrollView>
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
  },
  searchBox: {
    height: 100,
    backgroundColor: "#9B59C6",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    alignItems: "flex-end",
    paddingBottom:10
    
  },
  leftSide: {
    flexDirection: "row"
  },
  icon: {
    margin: 10
  },
  scrollV: {
    backgroundColor: "white",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
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
  }
})