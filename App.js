import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Input, TextInput, ImageBackground, ScrollView } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const image = { uri: 'https://www.diethelmtravel.com/wp-content/uploads/2016/04/bill-gates-wealthiest-person.jpg' }
export default function App() {
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
            style={styles.card} source={{ uri: 'https://images.unsplash.com/photo-1605786441012-3716536d6b83?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80' }} >
            <ImageBackground imageStyle={{
              borderRadius: 30,
              borderColor: '#fff',
              borderWidth: 1,
            }}
              style={styles.avatar} source={image} />
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
      </View>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9057b8',
    height: '100%',
  },
  header:
  {
    width: '90%',
    marginTop: 50,
    margin: 20,
    justifyContent: 'space-between',
    flexDirection: 'row-reverse',
    alignItems: 'center'
  },
  main: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    paddingHorizontal: 20,
    paddingTop: 20
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
    fontWeight: 'bold'
  },
  arrowIcon: {
    color: 'lightgray'
  },
  cards: {
    flexDirection: 'row'
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
  }
});
