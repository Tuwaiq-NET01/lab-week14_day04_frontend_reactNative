import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import Heading from './components/Heading';
import Body from './components/Body';
import Nav from './components/Nav';

export default function App() {
  return (
    <View style={styles.purple}>
      <ScrollView>
        <Heading />
        <Body />
      </ScrollView>
      <Nav />

    </View>
  );
}

const styles = StyleSheet.create({
  purple: {
    backgroundColor: '#9053BA',
  }
});
