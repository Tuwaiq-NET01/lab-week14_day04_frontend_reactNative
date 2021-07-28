import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Feather from 'react-native-vector-icons/Feather'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Fontisto from 'react-native-vector-icons/Fontisto'

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={{flexDirection:'row'}} > 
        <Feather name="search" size={27} color='white'/>
        <Text style={{ color: 'white', fontSize: 22, marginLeft: 10}} >Discover</Text>
        </View>
        <Ionicons name='person-add' size={26  } color='white'/>
      </View>

      <View style={styles.other}>

      </View>

      <View style={styles.footer}>
        <Feather name="message-square" size={25} color="gray" style={{alignSelf: 'flex-end', marginBottom: 10, paddingRight: 20}} />
        <Feather name="circle" size={70} color="gray" />
        <Fontisto name="snapchat" size={25} color="gray" style={{alignSelf: 'flex-end', marginBottom: 10, paddingLeft: 20}} />
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#9154bb',
  },
  other: {
    flex:9,
    backgroundColor: 'red',
  },
  footer: {
    height: 90,
    width: '100%',
    flexDirection: "row", 
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    position: "absolute",
    bottom: 0
  }
});
