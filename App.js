import React from 'react'
import { View, Text, TextInput, ScrollView, Dimensions, Image } from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'

import LargeCard from './components/LargeCard'
import SmallCard from './components/SmallCard'

export default function App() {

  return (

    <View style={{flex:1}}>
      <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{backgroundColor: "#9354bc", paddingTop: 20}}></View>
      <View style={{
          marginBottom: 20,
          height: 70,
          backgroundColor: "#9354bc",
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 20,
          alignItems: "center"
        }}>
        <View style={{flexDirection: "row"}}>
          <Image
            style={
              {
                width: 35,
                height: 35,
                borderRadius: 50,
                borderColor: "white",
                alignSelf: "center",
                borderWidth: 1,
              }
            }
            source={{ uri: "https://picsum.photos/200" }}>
          </Image>
          <Ionicons style={{ margin: 10}} name="search" size={25} color="white"></Ionicons>
          <TextInput onChangeText={(text) => useTerm(text)} placeholder="Discover" placeholderTextColor="white"></TextInput>
        </View>
        <Ionicons name="add" size={30} color="white"></Ionicons>
      </View>
      <Text style={{ fontWeight: "bold", paddingLeft: 10, marginBottom: 10 }}>Following <AntDesign name="right" size={10} color="gray" /></Text>
      <View style={{marginBottom:20}} >
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <SmallCard name={"Anas"} />
        <SmallCard name={"Saad"} />
        <SmallCard name={"Hussan"} />
        <SmallCard name={"Saud"} />
        <SmallCard name={"Ahmed"} />
        <SmallCard name={"Mansour"} />
        <SmallCard name={"Meshal"} />
        </ScrollView>
      </View>
      <Text style={{ fontWeight: "bold", paddingLeft: 10, marginBottom:10 }}>Friends <AntDesign name="right" size={10} color="gray" /></Text>
      <View>
          <View style={
            {
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
              marginHorizontal: 3,
              marginBottom: 20
            }
          } >
          <LargeCard name={"Anas"} />
          <LargeCard name={"Saad"} />
          <LargeCard name={"Hussan"} />
          <LargeCard name={"Saud"} />
          <LargeCard name={"Ahmed"} />
          <LargeCard name={"Mansour"} />
          <LargeCard name={"Meshal"} />
          </View>
      </View>
      <Text style={{ fontWeight: "bold", paddingLeft: 10, marginBottom: 10 }}>Suggested <AntDesign name="right" size={10} color="gray" /></Text>
      <View style={{marginBottom:90}} >
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <SmallCard name={"Anas"} />
        <SmallCard name={"Saad"} />
        <SmallCard name={"Hussan"} />
        <SmallCard name={"Saud"} />
        <SmallCard name={"Ahmed"} />
        <SmallCard name={"Mansour"} />
        <SmallCard name={"Meshal"} />
        </ScrollView>
      </View>
      <View style={
        {
          height: 90,
          width: Dimensions.get('window').width,
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          position: "absolute",
          bottom: 0
        }
      }>
        <Feather name="message-square" size={25} color="gray"></Feather>
        <Feather name="circle" size={70} color="gray"></Feather>
        <Feather name="more-horizontal" size={30} color="gray"></Feather>
      </View>
      </ScrollView>
    </View>
  )
}