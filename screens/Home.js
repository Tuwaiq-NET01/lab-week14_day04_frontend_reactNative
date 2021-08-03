import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, TextInput, ScrollView, Dimensions } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Message from '../components/Message'
import Feather from 'react-native-vector-icons/Feather'

const windowWidth = Dimensions.get('window').width;

export default function Home() {
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

        </View>
    )
} const styles = StyleSheet.create({

})