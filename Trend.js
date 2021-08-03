import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
export default class Trend extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpen: false
        }
    }
    render() {
        return (
            <View>
                <View style={styles.continer} resizeMode="cover">
                    <Image style={styles.image} source={{ uri: "https://picsum.photos/200/300" }}></Image>
                    <Text style={styles.username}>{this.props.username}</Text>
                </View>
            </View >
        )
    }
}
const styles = StyleSheet.create({
    continer: {
        width: 190,
        height: 290 ,
    },

    image: {
        width: 40,
        height: 40,
    },
    image: {
        flex: 1,
        borderRadius:15,
        
    },
    username: {
        color: "black",
        alignSelf: "center",
        fontWeight:"bold",
        fontSize:14,
    }
})