import React from 'react'
import { View, Text, StyleSheet, Image, TextInput, ScrollView, Dimensions, ImageBackground } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'


const windowWidth = Dimensions.get('window').width;
export default function App() {

  return (
    <View style={styles.container}>
      <View style={styles.searchBox}>
        <View style={styles.leftSide}>
          <Image style={styles.logo} source={require('./assets/personalFemail.jpg')}></Image>
          <Ionicons style={styles.icon} name="search" size={25} color="white"></Ionicons>
          <TextInput onChangeText={(text) => useTerm(text)} placeholder="Discover" placeholderTextColor="white"></TextInput>
        </View>
        <Ionicons name="add" size={30} color="white"></Ionicons>
      </View>

      <ScrollView>
        <View style={styles.mainContainer}>   
          <Text style={styles.heading}>Following</Text>
          <ScrollView style={styles.scrollH} horizontal={true}>
            <ImageBackground style={styles.stories} imageStyle={{ borderRadius: 15 }} source={require('./assets/7.jpg')}>
              <Image style={styles.logo1} source={require('./assets/personalFemail.jpg')}></Image>
              <Text style={styles.name}>Albandry</Text>
            </ImageBackground>
            <ImageBackground style={styles.stories} imageStyle={{ borderRadius: 15 }} source={require('./assets/2.jpeg')}>
              <Image style={styles.logo1} source={require('./assets/personalFemail.jpg')}></Image>
              <Text style={styles.name}>Sarah</Text>
            </ImageBackground>
            <ImageBackground style={styles.stories} imageStyle={{ borderRadius: 15 }} source={require('./assets/6.jpg')}>
              <Image style={styles.logo1} source={require('./assets/personalMale.jpg')}></Image>
              <Text style={styles.name}>Ahmed</Text>
            </ImageBackground>
            <ImageBackground style={styles.stories} imageStyle={{ borderRadius: 15 }} source={require('./assets/4.jpeg')}>
              <Image style={styles.logo1} source={require('./assets/personalMale.jpg')}></Image>
              <Text style={styles.name}>Waleed</Text>
            </ImageBackground>

          </ScrollView><Text style={styles.heading}>Friends</Text>
          <ScrollView style={styles.scrollV} >
            <View style={styles.secondStories}>
              <ImageBackground style={styles.stories2} imageStyle={{ borderRadius: 15 }} source={require('./assets/1.jpeg')}>
                <Image style={styles.logo1} source={require('./assets/personalFemail.jpg')}></Image>
                <Text style={styles.name}>Albandry</Text>
              </ImageBackground>
              <ImageBackground style={styles.stories2} imageStyle={{ borderRadius: 15 }} source={require('./assets/5.jpg')}>
                <Image style={styles.logo1} source={require('./assets/personalFemail.jpg')}></Image>
                <Text style={styles.name}>Sarah</Text>
              </ImageBackground>
              <ImageBackground style={styles.stories2} imageStyle={{ borderRadius: 15 }} source={require('./assets/7.jpg')}>
                <Image style={styles.logo1} source={require('./assets/personalMale.jpg')}></Image>
                <Text style={styles.name}>Ahmed</Text>
              </ImageBackground>
              <ImageBackground style={styles.stories2} imageStyle={{ borderRadius: 15 }} source={require('./assets/4.jpeg')}>
                <Image style={styles.logo1} source={require('./assets/personalMale.jpg')}></Image>
                <Text style={styles.name}>Waleed</Text>
              </ImageBackground>
            </View>
          </ScrollView>

          <Text style={styles.heading}>Suggested</Text>
          <ScrollView style={[styles.scrollH], { marginBottom: 120, padding: 18 }} horizontal={true}>
            <ImageBackground style={styles.stories} imageStyle={{ borderRadius: 15 }} source={require('./assets/1.jpeg')}>
              <Image style={styles.logo1} source={require('./assets/personalFemail.jpg')}></Image>
              <Text style={styles.name}>Albandry</Text>
            </ImageBackground>
            <ImageBackground style={styles.stories} imageStyle={{ borderRadius: 15 }} source={require('./assets/2.jpeg')}>
              <Image style={styles.logo1} source={require('./assets/personalFemail.jpg')}></Image>
              <Text style={styles.name}>Sarah</Text>
            </ImageBackground>
            <ImageBackground style={styles.stories} imageStyle={{ borderRadius: 15 }} source={require('./assets/3.jpeg')}>
              <Image style={styles.logo1} source={require('./assets/personalMale.jpg')}></Image>
              <Text style={styles.name}>Ahmed</Text>
            </ImageBackground>
            <ImageBackground style={styles.stories} imageStyle={{ borderRadius: 15 }} source={require('./assets/4.jpeg')}>
              <Image style={styles.logo1} source={require('./assets/personalMale.jpg')}></Image>
              <Text style={styles.name}>Waleed</Text>
            </ImageBackground>
          </ScrollView>

        </View>
      </ScrollView>
      <View style={styles.footer}>
        <Feather name="message-square" size={25} color="white"></Feather>
        <Feather name="circle" size={70} color="white"></Feather>
        <Feather name="more-horizontal" size={30} color="white"></Feather>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({

  container: {
    marginTop: 25,
    backgroundColor: "#A663CC",

  },
  mainContainer: {
    backgroundColor: "white",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,

  },
  secondStories: {
    flexDirection: "row",
    flexWrap: "wrap"
  },
  stories2: {
    width: 165,
    height: 240,
    borderRadius: 50,
    justifyContent: "flex-end",
    margin: 11,
  },
  logo: {
    height: 45,
    width: 45,
    borderRadius: 80
  },
  logo1: {
    height: 45,
    width: 45,
    borderRadius: 80,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center"

  },
  heading: {
    fontSize: 20,
    marginLeft: 20,
    marginTop: 10,
  },
  stories: {
    width: 120,
    height: 200,
    borderRadius: 50,
    justifyContent: "flex-end",
    margin: 5,

  },
  name: {
    color: "white",
    justifyContent: "flex-end",
    alignItems: "center",
    alignSelf: "center",
    marginBottom: 10,
  },
  searchBox: {
    height: 60,
    backgroundColor: "#A663CC",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    alignItems: "center",
  },
  leftSide: {
    flexDirection: "row",
  },
  icon: {
    margin: 10
  },
  scrollH: {
    padding: 18
  },
  scrollV: {
    padding: 18,
  },
  footer: {
    height: 90,
    width: windowWidth,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    position: "absolute",
    bottom: 65
  }

})
