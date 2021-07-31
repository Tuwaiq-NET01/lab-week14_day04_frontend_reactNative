import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons';

export default function Heading() {
    return (
        <SafeAreaView>
            <View style={styles.purpleContainer}>
                <View style={styles.topBar}>
                    <Image source={{ uri: "https://images.unsplash.com/photo-1627616031178-6ba663540b98?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80" }} style={styles.image} />
                    <Feather name="search" size={25} color="white" />
                    <Text style={styles.text}>Discover</Text>
                </View>
                <View style={styles.topBar}>
                    <Ionicons name="person-add" size={25} color="white" />
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    image: {
        width: 40,
        height: 40,
        borderRadius: 150 / 2,
        overflow: "hidden",
        borderWidth: 3,
        borderColor: "white",
        marginHorizontal: 5
      },
      topBar: {
        display: "flex",
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: "space-between",
      },
      text: {
        fontWeight: "bold",
        color: "white",
        marginHorizontal: 5
      },
      purpleContainer: {
        backgroundColor: '#9053BA',
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: "space-between",
        padding: 15,
        paddingBottom: 20
      }
    });
    