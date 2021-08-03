import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'

export default class Message extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpen: false
        }
    }
    render() {
        return (
            <View>
                <View style={styles.messageBox}>
                    <View style={styles.leftSide}>
                        <TouchableOpacity
                            style={[styles.square,
                            this.state.isOpen ?
                                { backgroundColor: "white" }
                                : { backgroundColor: "purple" }]}
                            onPress={() => this.setState({ isOpen: true })}>
                        </TouchableOpacity>
                        <View style={styles.textContainer}>
                            <Text>{this.props.username}</Text>
                            <Text>Tap tp view</Text>
                        </View>
                    </View>
                    <Text>😍💖😘</Text>
                </View>
            </View>
        )
    }
} const styles = StyleSheet.create({
    messageBox: {
        height: 80,
        borderBottomWidth: 0.5,
        borderColor: "gray",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 10
    },
    leftSide: {
        flexDirection: "row",
    },
    square: {
        borderWidth: 2,
        borderColor: "purple",
        height: 35,
        width: 35,
        borderRadius: 10,
        marginRight: 10
    },
})