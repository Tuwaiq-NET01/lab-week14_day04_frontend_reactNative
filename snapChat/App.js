import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, TextInput, ScrollView, Dimensions, Image, StatusBar } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FollowingStory from './components/FollowingStory'
import Feather from 'react-native-vector-icons/Feather'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FrindsStory from './components/FrindsStory'
const windowWidth = Dimensions.get('window').width;

export default function App() {
  const names = ["Fatimah", "Abdulazi", "Norh", "Snan", "Shade", "Amal", "Nawal", "Lama", "Fatimah"]
  const [term, useTerm] = useState("")
  const [result, useResult] = useState([])
  useEffect(() => {
    const result = names.filter((item) =>
      item.toLowerCase().includes(term))
    useResult(result)
  }, [term])
  return (
    <View style={styles.container}>

      
      <StatusBar style={{backgroundColor: "#9354bc"}}/>
      <View style={styles.searchBox}>
        <View style={styles.leftSide}>
          <Image
            style={styles.avatar}
            source={{ uri: "https://picsum.photos/200" }}>
          </Image>
          <Ionicons style={styles.icon} name="search" size={25} color="white"></Ionicons>
          <TextInput onChangeText={(text) => useTerm(text)} placeholder="Discover" placeholderTextColor="white"></TextInput>
        </View>
        <AntDesign  name="adduser" size={30} color="white"></AntDesign>
      </View>


      <Text style={{ fontWeight: "bold", marginLeft: 10, marginTop: 20 }}>Following ► </Text>
      <View >
        <ScrollView style={styles.scrollV} horizontal showsHorizontalScrollIndicator={false}>
          {result.map((name, index) => (
            <View key={index} style={styles.stories}>
              <FollowingStory key={index} username={name} />
            </View>
          ))}
        </ScrollView>
      </View>



      <Text style={{ fontWeight: "bold", marginLeft: 10, marginTop: 10 }}>Friends ►</Text>
      <View>
        <ScrollView style={styles.scrollV} showsHorizontalScrollIndicator={false}>
          <View style={styles.friends} >
            {result.map((name, index) => (
              <View key={index} style={styles.stories}>
              <FrindsStory key={index} username={name} />
            </View>
            ))}
          </View>

        </ScrollView>
      </View>


      <Text style={{ fontWeight: "bold", marginLeft: 10, marginTop: 20 }}>Suggested ► </Text>
      <View>
        <ScrollView style={styles.scrollV} horizontal showsHorizontalScrollIndicator={false}>
          {result.map((name, index) => (
            <View key={index} style={styles.stories}>
            </View>
          ))}
        </ScrollView>
      </View>


      
      <View style={styles.footer}>
        <Ionicons name="md-chatbox-sharp" size={25} color="white"></Ionicons>
        <Feather name="circle" size={70} color="white"></Feather>
        <MaterialIcons name="amp-stories" size={30} color="white"></MaterialIcons>
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
    flexDirection:"row-reverse",
    height:2000,
    flexWrap:"wrap"
  }
})
