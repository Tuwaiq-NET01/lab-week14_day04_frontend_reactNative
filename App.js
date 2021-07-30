import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Input, TextInput, ImageBackground, ScrollView } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { useFonts } from 'expo-font';

const image = { uri: 'https://www.diethelmtravel.com/wp-content/uploads/2016/04/bill-gates-wealthiest-person.jpg' }

export default function App() {
  // let [fontsLoaded] = useFonts({
  //   'GraphikBold': require('./assets/fonts/GraphikBold.otf')
  // });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <MaterialIcons name="person-add-alt-1" style={styles.personIcon} size={30} />
        <View style={styles.subContainer}>
          <ImageBackground imageStyle={{
            borderRadius: 30,
            borderColor: '#fff',
            borderWidth: 2,
            borderRadius: 30
          }}
            source={image} style={styles.avatar} />
          <MaterialIcons name="search" style={styles.personIcon} size={30} />
          <Text style={styles.textHead}>Discover</Text>
        </View>
      </View>
      <ScrollView >
        <View style={styles.main}>
          <View style={styles.heading}>
            <Text style={styles.headingText}>Following</Text>
            <MaterialIcons name="keyboard-arrow-right" style={styles.arrowIcon} size={30} />
          </View>
          <ScrollView horizontal style={styles.cards}>
            <ImageBackground imageStyle={{ borderRadius: 10 }}
              style={styles.card} source={{ uri: 'https://images.unsplash.com/photo-1605786441012-3716536d6b83?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80' }} >
              <ImageBackground imageStyle={{
                borderRadius: 30,
                borderColor: '#fff',
                borderWidth: 1,
              }}
                style={styles.avatar} source={{ uri: 'https://images.unsplash.com/photo-1604145422058-65c7ce8406c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80' }} />
              <Text style={styles.textSmall}>lela</Text>
            </ImageBackground>
            <ImageBackground imageStyle={{ borderRadius: 10 }}
              style={styles.card} source={{ uri: 'https://images.unsplash.com/photo-1600952711516-6d469fe4ab8a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=668&q=80' }} >
              <ImageBackground imageStyle={{
                borderRadius: 30,
                borderColor: '#fff',
                borderWidth: 1,
              }}
                style={styles.avatar} source={{ uri: 'https://images.unsplash.com/photo-1605677677382-8baa24578e08?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80' }} />
              <Text style={styles.textSmall}>Simon</Text>
            </ImageBackground>
            <ImageBackground imageStyle={{ borderRadius: 10 }}
              style={styles.card} source={{ uri: 'https://images.unsplash.com/photo-1608112433473-415cab382057?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80' }} >
              <ImageBackground imageStyle={{
                borderRadius: 30,
                borderColor: '#fff',
                borderWidth: 1,
              }}
                style={styles.avatar} source={{ uri: 'https://images.unsplash.com/photo-1603325725990-553457a327f4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80' }} />
              <Text style={styles.textSmall}>FA</Text>
            </ImageBackground>
            <ImageBackground imageStyle={{ borderRadius: 10 }}
              style={styles.card} source={{ uri: 'https://images.unsplash.com/photo-1581181933825-dbd71b5aec85?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80' }} >
              <ImageBackground imageStyle={{
                borderRadius: 30,
                borderColor: '#fff',
                borderWidth: 1,
              }}
                style={styles.avatar} source={{ uri: 'https://images.unsplash.com/photo-1531727991582-cfd25ce79613?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=668&q=80' }} />
              <Text style={styles.textSmall}>Nilla</Text>
            </ImageBackground>
            <ImageBackground imageStyle={{ borderRadius: 10 }}
              style={styles.card} source={{ uri: 'https://images.unsplash.com/photo-1627244776093-31ac42439022?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80' }} >
              <ImageBackground imageStyle={{
                borderRadius: 30,
                borderColor: '#fff',
                borderWidth: 1,
              }}
                style={styles.avatar} source={{ uri: 'https://images.unsplash.com/photo-1521122716659-91e52c3f8ca2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=668&q=80' }} />
              <Text style={styles.textSmall}>Ami</Text>
            </ImageBackground>
          </ScrollView>
          <View style={styles.cards}>
          </View>
          <View style={styles.heading}>
            <Text style={styles.headingText}>Friends</Text>
            <MaterialIcons name="keyboard-arrow-right" style={styles.arrowIcon} size={30} />
          </View>
          <View style={styles.cards}>
            <ImageBackground imageStyle={{ borderRadius: 10 }}
              style={styles.bigCard} source={{ uri: 'https://images.unsplash.com/photo-1559544144-56d45da86c2c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=668&q=80' }} >
              <ImageBackground imageStyle={{
                borderRadius: 30,
                borderColor: '#fff',
                borderWidth: 1,
              }}
                style={styles.avatar} source={{ uri: 'https://images.unsplash.com/photo-1619891778809-90a282e5f8df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1134&q=80' }} />
              <Text style={styles.textSmall}>Ameen</Text>
            </ImageBackground>
            <ImageBackground imageStyle={{ borderRadius: 10 }}
              style={styles.bigCard} source={{ uri: 'https://images.unsplash.com/photo-1549237511-bbe6a0979d6a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80' }} >
              <ImageBackground imageStyle={{
                borderRadius: 30,
                borderColor: '#fff',
                borderWidth: 1,
              }}
                style={styles.avatar} source={{ uri: 'https://images.unsplash.com/photo-1622868556661-4a3d1159e005?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80' }} />
              <Text style={styles.textSmall}>Anas</Text>
            </ImageBackground>
          </View>
          <View style={styles.cards}>
            <ImageBackground imageStyle={{ borderRadius: 10 }}
              style={styles.bigCard} source={{ uri: 'https://images.unsplash.com/photo-1458430447310-8b6c596117a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80' }} >
              <ImageBackground imageStyle={{
                borderRadius: 30,
                borderColor: '#fff',
                borderWidth: 1,
              }}
                style={styles.avatar} source={{ uri: 'https://images.unsplash.com/photo-1622559924472-2c2f69abb854?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=668&q=80' }} />
              <Text style={styles.textSmall}>Younis</Text>
            </ImageBackground>
            <ImageBackground imageStyle={{ borderRadius: 10 }}
              style={styles.bigCard} source={{ uri: 'https://images.unsplash.com/photo-1577351594944-a5586c757d8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=668&q=80' }} >
              <ImageBackground imageStyle={{
                borderRadius: 30,
                borderColor: '#fff',
                borderWidth: 1,
              }}
                style={styles.avatar} source={{ uri: 'https://images.unsplash.com/photo-1618655108396-ce1ba6c80b7d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80' }} />
              <Text style={styles.textSmall}>Rana</Text>
            </ImageBackground>
          </View>
          <View style={styles.heading}>
            <Text style={styles.headingText}>Suggested</Text>
            <MaterialIcons name="keyboard-arrow-right" style={styles.arrowIcon} size={30} />
          </View>
          <ScrollView horizontal style={styles.cards}>
            <ImageBackground imageStyle={{ borderRadius: 10 }}
              style={styles.card} source={{ uri: 'https://images.unsplash.com/photo-1605786441012-3716536d6b83?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80' }} >
              <ImageBackground imageStyle={{
                borderRadius: 30,
                borderColor: '#fff',
                borderWidth: 1,
              }}
                style={styles.avatar} source={{ uri: 'https://images.unsplash.com/photo-1604145422058-65c7ce8406c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80' }} />
              <Text style={styles.textSmall}>lela</Text>
            </ImageBackground>
            <ImageBackground imageStyle={{ borderRadius: 10 }}
              style={styles.card} source={{ uri: 'https://images.unsplash.com/photo-1600952711516-6d469fe4ab8a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=668&q=80' }} >
              <ImageBackground imageStyle={{
                borderRadius: 30,
                borderColor: '#fff',
                borderWidth: 1,
              }}
                style={styles.avatar} source={{ uri: 'https://images.unsplash.com/photo-1605677677382-8baa24578e08?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80' }} />
              <Text style={styles.textSmall}>Simon</Text>
            </ImageBackground>
            <ImageBackground imageStyle={{ borderRadius: 10 }}
              style={styles.card} source={{ uri: 'https://images.unsplash.com/photo-1608112433473-415cab382057?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80' }} >
              <ImageBackground imageStyle={{
                borderRadius: 30,
                borderColor: '#fff',
                borderWidth: 1,
              }}
                style={styles.avatar} source={{ uri: 'https://images.unsplash.com/photo-1603325725990-553457a327f4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80' }} />
              <Text style={styles.textSmall}>FA</Text>
            </ImageBackground>
            <ImageBackground imageStyle={{ borderRadius: 10 }}
              style={styles.card} source={{ uri: 'https://images.unsplash.com/photo-1581181933825-dbd71b5aec85?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80' }} >
              <ImageBackground imageStyle={{
                borderRadius: 30,
                borderColor: '#fff',
                borderWidth: 1,
              }}
                style={styles.avatar} source={{ uri: 'https://images.unsplash.com/photo-1531727991582-cfd25ce79613?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=668&q=80' }} />
              <Text style={styles.textSmall}>Nilla</Text>
            </ImageBackground>
            <ImageBackground imageStyle={{ borderRadius: 10 }}
              style={styles.card} source={{ uri: 'https://images.unsplash.com/photo-1627244776093-31ac42439022?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80' }} >
              <ImageBackground imageStyle={{
                borderRadius: 30,
                borderColor: '#fff',
                borderWidth: 1,
              }}
                style={styles.avatar} source={{ uri: 'https://images.unsplash.com/photo-1521122716659-91e52c3f8ca2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=668&q=80' }} />
              <Text style={styles.textSmall}>Ami</Text>
            </ImageBackground>
          </ScrollView>
        </View>
      </ScrollView >
      <View style={styles.tapBar}>
        <MaterialIcons name="mode-comment" size={25} style={styles.tapBarIcons} />
        <View style={styles.circle}></View>
        <MaterialIcons name="view-carousel" size={25} style={styles.tapBarIcons} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9057b8',
    height: '100%',
    position: 'relative'
  },
  header:
  {
    width: '90%',
    marginTop: 50,
    margin: 20,
    justifyContent: 'space-between',
    flexDirection: 'row-reverse',
    alignItems: 'center',
    position: 'absolute',
    zIndex: 1
  },
  main: {
    marginTop: 110,
    backgroundColor: '#fff',
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 50,
  },
  card: {
    width: 200,
    height: 300
  },
  personIcon: {
    color: '#fff'
  },
  subContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '50%',
    justifyContent: 'space-between'
  },
  avatar: {
    width: 40,
    height: 40,
  },
  textHead: {
    fontSize: 20,
    color: '#fff'
  },
  heading: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10
  },
  headingText: {
    fontSize: 17,
    fontWeight: 'bold',
    // fontFamily: 'GraphikBold'
  },
  arrowIcon: {
    color: 'lightgray'
  },
  cards: {
    flexDirection: 'row',
    marginVertical: 5
  },
  card: {
    width: 100,
    height: 150,
    marginHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  textSmall: {
    color: '#fff',
    fontWeight: 'bold',
    marginVertical: 6
  },
  bigCard: {
    width: 170,
    height: 250,
    marginRight: 7,
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  tapBar: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginBottom: 20,
    position: 'absolute', left: 0, right: 0, bottom: 0
  },
  circle: {
    width: 80,
    height: 80,
    borderWidth: 5,
    borderRadius: 50,
    borderColor: '#fff',
    marginHorizontal: 30
  },
  tapBarIcons: {
    color: '#fff'
  }
});
