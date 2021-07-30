import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import Heading from './components/Heading';
import Body from './components/Body';
export default function App() {
  return (
    <ScrollView style={styles.purple}>
      <Heading/>

      <Body/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  purple:{
    backgroundColor: '#9053BA',
  }
});
