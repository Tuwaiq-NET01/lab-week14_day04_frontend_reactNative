import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, TextInput, ScrollView, Dimensions } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Message from '../components/Message'
import Feather from 'react-native-vector-icons/Feather'

const windowWidth = Dimensions.get('window').width;

export default function Chat() {
    const names = ["Abdulaziz", "Ahmed", "Ali", "Sana", "Rawabe", "Afnan", "Salwa", "Riyad", "Younes"]
    const [term, useTerm] = useState("")
    const [result, useResult] = useState([])

    useEffect(() => {
        const result = names.filter((item) =>
            item.toLowerCase().includes(term))
        useResult(result)
    }, [term])

    return (
        <View style={styles.container}>
            <View style={styles.searchBox}>
                <View style={styles.leftSide}>
                    <Ionicons style={styles.icon} name="search" size={25} color="white"></Ionicons>
                    <TextInput onChangeText={(text) => useTerm(text)} placeholder="Chat" placeholderTextColor="white"></TextInput>
                </View>
                <Ionicons name="add" size={30} color="white"></Ionicons>
            </View>

            <ScrollView style={styles.scrollV}>
                {result.map((name, index) => (
                    <Message key={index} username={name} />
                ))}
            </ScrollView>
            {/* <View style={styles.footer}>
                <Feather name="message-square" size={25} color="gray"></Feather>
                <Feather name="circle" size={70} color="gray"></Feather>
                <Feather name="more-horizontal" size={30} color="gray"></Feather>
            </View> */}
        </View>
    )
} const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 25,
    },
    searchBox: {
        height: 60,
        // height: 75,
        backgroundColor: "#45bde1",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        alignItems: "center"
    },
    searchBoxFooter:{
        height: 60,
        backgroundColor: "#45bde1", 
    },
    leftSide: {
        flexDirection: "row"
    },
    icon: {
        margin: 10
    },
    scrollV: {
        backgroundColor: "white",
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        // bottom:15,
        paddingBottom:50,
    },
    footer: {
        height: 90,
        width: windowWidth,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        position: "absolute",
        bottom: 0
    }
})