import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Heading from './components/Heading';
import Body from './components/Body';
export default function App() {
  return (
    <View style={styles.purple}>
      <Heading/>

      <Body/>
    </View>
  );
}

const styles = StyleSheet.create({
  purple:{
    backgroundColor: '#9053BA',
  }
});
