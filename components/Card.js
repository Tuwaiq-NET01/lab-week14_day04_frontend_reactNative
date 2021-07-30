import React from 'react'
import { ImageBackground, Text, StyleSheet, View, Image } from 'react-native'

export default function Card() {
    return (
        <ImageBackground 
        source={{ uri: "https://images.unsplash.com/photo-1627616031178-6ba663540b98?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" }}
         resizeMode="cover" style={styles.cardContainer}>
             <View style={styles.cardInfo}>
             <Image source={{ uri: "https://images.unsplash.com/photo-1627616031178-6ba663540b98?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80" }} style={styles.image} />
             <Text style={styles.cardName}>User</Text>
             </View>
      </ImageBackground>
    )
}
const styles = StyleSheet.create({
    cardContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        borderRadius: 10,
        overflow: "hidden",
        borderWidth: 3,
        borderColor: "white",
        height: 200,
        width: 150,
        marginTop: 10,
        marginRight: 10
    },
    cardInfo:{
    padding: 10,
    },
    image: {
        width: 40,
        height: 40,
        borderRadius: 150 / 2,
        overflow: "hidden",
        borderWidth: 1,
        borderColor: "white",
        marginHorizontal: 5
      },
      cardName:{
          fontWeight: "bold",
          textAlign: "center",
          color: "white"
      }
    });
    