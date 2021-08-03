import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Image,ImageBackground } from 'react-native'

export default class MiniStory extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpen: false
        }
    }
    render() {
        // console.log(this.props.username.preview);
        return (
            
        <View style={styles.container}>
                <TouchableOpacity style={styles.messageBox}>
                    <ImageBackground style={styles.imagee}
                    source={this.props.username.preview}
                    imageStyle={{ borderRadius: 10 }}
                    >
                        <TouchableOpacity
                            style={[
                            // this.state.isOpen ?
                            //     { backgroundColor: "white" }
                            //     : { backgroundColor: "purple" }
                            ]}
                            onPress={() => this.setState({ isOpen: true })}>
                                       <Image
                                        style={styles.square}
                                        source={{
                                            uri: this.props.username.preview,
                                        }}
                                        />
                        </TouchableOpacity>
                        <Text style={{color:'white'}}>{this.props.username.name}</Text>
                    </ImageBackground>

                </TouchableOpacity>
            </View>
        )
    }
} 
const styles = StyleSheet.create({
    container:{
        flex:1
    },
    messageBox: {
        height: 80,

        flexDirection: "column",
        alignItems: "center",
        paddingLeft:8,
        // paddingHorizontal: 1
    },
    imagee: {
        marginTop:10,
        height:150,
        width:100,
        borderRadius: 10,
        marginRight: 10,
        backgroundColor:'lightgreen',
        alignItems: "center",
        justifyContent:'flex-end',
        paddingBottom:10,

    },
    square: {
        borderWidth: 1,
        borderColor: "white",
        height: 35,
        width: 35,
        borderRadius: 50,
    },
})