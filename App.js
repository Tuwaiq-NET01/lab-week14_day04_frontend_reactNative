import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Feather from 'react-native-vector-icons/Feather'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Fontisto from 'react-native-vector-icons/Fontisto'
import Footer from './Footer';
import Main from './Main';

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

      <View style={styles.main}>
        <Text style={{fontWeight: 'bold', fontSize: 20, justifyContent: 'flex-start'}}>Friends <Fontisto name="angle-right" size={20} color="gray" /> </Text>
        <Main />
      </View>

      <Footer />
      
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
  main: {
    flex:9,
    
  },
});
