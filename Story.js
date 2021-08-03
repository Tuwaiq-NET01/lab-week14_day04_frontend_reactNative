import React, { Component } from 'react'
import { Text, View, StyleSheet, Image} from 'react-native'
export default class Story extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpen: false
        }
    }
    render() {
        return (
            <View>
                <View style={styles.continer} >
                        <Image style={styles.image} source={{ uri: "https://picsum.photos/200/300" }}></Image>
                        <Text style={styles.username}>{this.props.username}</Text>
                </View>
            </View >
        )
    }
}
const styles = StyleSheet.create({
    continer: {
        width: 100,
        height: 170
    },
    image: {
        flex: 1,
        justifyContent: "center",
        borderRadius:10,
    },
    username: {
        color: "black",
        alignSelf: "center",
        fontWeight:"bold",
        marginTop: 2,
        fontSize:12
    }
})