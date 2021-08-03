// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//   //   <View style={styles.container}>
//   //     <Text>Open up App.js to start working on your app!</Text>
//   //     <StatusBar style="auto" />
//   //   </View>
//   <View style={{flex:1}}>
//     <View style={{ flex: 1, backgroundColor: "red" }}></View>
//     <View style={{ flex: 2, backgroundColor: "green" }}></View>
//     <View style={{ flex: 1, backgroundColor: "yellow", flexDirection: "row", justifyContent: "space-around", alignItems: "center"}}>
//       <View style={{height: 150, width: 150, backgroundColor:"orange" }}></View> 
//       <View style={{ height: 150, width: 150, backgroundColor: "blue" }}></View>
//     </View> 
//   </View> 
//   );
// }
// // rns
// // const styles = StyleSheet.create({
// //   style
// // })
// -----------------------------------------------------------------------
// rnf

// import React from 'react'
// import { View, Text } from 'react-native'
// import Welcome from './screens/Welcome'
// export default function App() {
//   return (
//     <View style={{ flex : 1 }}>
//     <Welcome></Welcome>
//     </View>
//   )
// }

import React from 'react';
import Welcome from './screens/Welcome'
import Main from './Main'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function App() {
  const Stack = createStackNavigator()
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }}/>
        <Stack.Screen name="Main" component={Main}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
