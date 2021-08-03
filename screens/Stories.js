import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, TextInput, ScrollView, Dimensions } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MiniStory from '../components/MiniStory'
import Story from '../components/Story'
import Feather from 'react-native-vector-icons/Feather'

const windowWidth = Dimensions.get('window').width;

export default function Stories() {

    const users = [{id:1, name:"Abdulaziz", snap:"", preview:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"},
    {id:2, name:"Ahmed", snap:"", preview:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuBNfY0kukfy3XLdbPZJ3nR4T07yxtKNSyNKrliThSZ_LN4nlBYMHXXULhP1beS-sKFHc&usqp=CAU"},
    {id:3, name:"Ali", snap:"", preview:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDTja7MZo0KNXnvYbDnfEDVrHl4eLJ6pu-V_y-5txaMxRi7xELf7zR2AhO9uYpxxXazpU&usqp=CAU"},
    {id:4, name:"Younes", snap:"", preview:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgpqoDDa0NClRv-lYiNWpYoi_qfo7XvRAiM6UeqjAgoiWJ9DBrAfVUot-5qdRn0JE3Wq4&usqp=CAU"},
    {id:5, name:"Afnan", snap:"", preview:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"},
    {id:6, name:"Riyad", snap:"", preview:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7iNK9_Qc18pvIxOCMoChnX5_6USwjOLsomfwVGLAcxfUL4v9A4c4MhsWr4anP6ucVWCQ&usqp=CAU"},
    {id:6, name:"Muh77", snap:"", preview:"https://data.whicdn.com/images/180130458/original.jpg"},
    {id:7, name:"Sami", snap:"", preview:"https://64.media.tumblr.com/49078313499dd37188bb41803f32e579/tumblr_o160vpVbkj1udbqfoo1_1280.jpg"}];
    const names = ["Abdulaziz", "Ahmed", "Ali", "Sana", "Rawabe", "Afnan", "Salwa", "Riyad", "Younes"]
    const [term, useTerm] = useState("")
    const [result, useResult] = useState([])

    useEffect(() => {
        const result = users.filter((item) =>
            item.name.toLowerCase().includes(term))
        useResult(result)
    }, [term])

    return (
        <ScrollView style={styles.container}>
            <View style={styles.searchBox}>
                <View style={styles.leftSide}>
                    <Ionicons style={styles.icon} name="search" size={25} color="white"></Ionicons>
                    <TextInput onChangeText={(text) => useTerm(text)} placeholder="Discover" placeholderTextColor="white"></TextInput>
                </View>
                <Ionicons name="add" size={30} color="white"></Ionicons>
            </View>
            <View>
                <Text style={styles.textTopic}>Following > </Text>
            </View>
            <ScrollView style={styles.scrollH} horizontal={true}>
                {result.map((user, index) => (
                    <MiniStory key={index} username={user} />
                ))}
            </ScrollView>

            <View>
                <Text style={styles.textTopic}>Friends  > </Text>
            </View>
            <View style={styles.scrollV} >
                {result.map((user, index) => (
                    <Story key={index} username={user} />
                ))}
                </View>
            
            <View>
                <Text style={styles.textTopic}>Suggested  > </Text>
            </View>
            <ScrollView style={styles.scrollH} horizontal={true}>
                {result.map((user, index) => (
                    <MiniStory key={index} username={user} />
                ))}
            </ScrollView>

        </ScrollView>
    )
} const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 25,
        backgroundColor: "white",
    },
    searchBox: {
        height: 60,
        backgroundColor: "purple",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        alignItems: "center"
    },
    leftSide: {
        flexDirection: "row"
    },
    icon: {
        margin: 10
    },
    scrollV: {


        display: 'flex',
        flexDirection: "row",
        flexWrap: 'wrap',
        justifyContent: "space-around",
        alignItems: "center",
        paddingLeft:8,
    },
    scrollH: {
        height:180,
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
    },
    textTopic:{
        fontWeight: 'bold',
        marginVertical:15,
        marginLeft:10
    }
})