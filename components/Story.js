import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, TouchableOpacity,ImageBackground,Image } from 'react-native'

export default function Story (props){
    const [isOpen, SetIsOpen] = useState(false)
        return (
            <View style={styles.container}>
            <TouchableOpacity style={styles.messageBox}>
                {/* <View style={styles.imagee}>
                    <TouchableOpacity
                        style={[styles.square,
                        isOpen ?
                            { backgroundColor: "white" }
                            : { backgroundColor: "purple" }]}
                        onPress={() => SetIsOpen(true )}>
                    </TouchableOpacity>
                    <Text style={{color:'white'}}>{props.username}</Text>
                </View> */}
                                    <ImageBackground style={styles.imagee}
                    source={props.username.preview}
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
                                            uri: props.username.preview,
                                        }}
                                        />
                        </TouchableOpacity>
                        <Text style={{color:'white'}}>{props.username.name}</Text>
                    </ImageBackground>

            </TouchableOpacity>
        </View>
        )

} 
const styles = StyleSheet.create({
    container:{
        // flex:1
    },
    messageBox: {
        // height: 100,
        // paddingHorizontal: 1
    },
    imagee: {
        marginTop:10,
        height:240,
        width:170,
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