import React, { Component } from 'react'
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native'
export default class Welcome extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.background}>
                    <Image style={styles.logo} source={require('../assets/snapchat-logo.jpg')} />
                </View>
                <TouchableOpacity onPress={() => this.props.navigation.navigate("Login")} style={styles.button}>
                    <Text style={styles.text}>LOG IN</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, { backgroundColor: "#24bffb" }]}>
                    <Text style={styles.text}>SIGN UP</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    background: {
        flex: 5,
        backgroundColor: "yellow",
        justifyContent: "center",
        alignItems: "center"
    },
    logo: {
        height: 60,
        width: 60
    },
    button: {
        flex: 1,
        backgroundColor: "#fb2445",
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        color: "white",
        fontSize: 25,
        fontWeight: "bold",
        letterSpacing: 3
    }
})