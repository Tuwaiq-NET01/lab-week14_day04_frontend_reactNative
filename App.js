import React, {useState, useEffect} from 'react'
import { View, Text, StyleSheet, TextInput, ScrollView, Dimensions,Image} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'
import Story from './Story'
import Trend from './Trend'

const windowWidth = Dimensions.get('window').width;
export default function App() {
  const names = ["Norah", "Maha", "Arwa", "Sanaa", "Khaled", "Adbdullah", "Nada", "Fai"]
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
        <Image style={styles.image} source={{ uri: "https://picsum.photos/200" }}></Image>    
        <Ionicons style={styles.icon} name="search" size={25} color="white"></Ionicons>
        <TextInput onChangeText={(text) => useTerm(text)} placeholder="Discover" placeholderTextColor="white"></TextInput>
      </View>
      <Ionicons name="person-add-outline" size={25} color="white"></Ionicons>
    </View>
    <Text style={{marginTop: 10, fontWeight: "bold"}}> Following {'>'} </Text>
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {result.map((name, index) => (
          <View key={index} style={styles.story}>
            <Story key={index} username={name} />
          </View>
        ))}
      </ScrollView>
    </View>
    <Text style={{marginTop: 10, fontWeight: "bold"}}> Friends {'>'}  </Text>
    <View>
      <ScrollView showsHorizontalScrollIndicator={false}>
        <View style={styles.friends} >
          {result.map((name, index) => (
            <View key={index} style={styles.story}>
            <Trend key={index} username={name} />
          </View>
          ))}
        </View>
      </ScrollView>
    </View>
    <View style={styles.footer}>
      <Feather name="message-square" size={25} color="#60C3FA"></Feather>
      <Feather name="circle" size={70} color="gray"></Feather>
      <Feather name="more-horizontal" size={30} color="#A25DD4"></Feather>
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
    height: 60,
    backgroundColor: "#A25DD4",
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
  story: {
    margin:5
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
 
  image: {
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