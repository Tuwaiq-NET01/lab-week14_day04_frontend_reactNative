import React from 'react'
import { View, Text, Image, StyleSheet , TouchableOpacity} from 'react-native'

export default function Welcome({navigation}) {
    return (
        <View style={{ flex: 1 }}>
            <View style={styles.yellow}>
                <Image style={styles.logo}
                source={{
                    uri: 'https://cdn.freelogovectors.net/wp-content/uploads/2014/05/snapchat-icon.png'
                }}
                />
            </View>

            <TouchableOpacity onPress={() => navigation.navigate("Main")} style={[styles.button, {backgroundColor:"red"}]}>
                <Text style={styles.buttonText}>Log In</Text>
            </TouchableOpacity>
            <TouchableOpacity  style={[styles.button, {backgroundColor:"#1ab3ee"}]}>
                <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    yellow:{
        flex:5, 
        backgroundColor:"yellow",
        justifyContent:"center",
        alignItems:"center"
    },
    button:{
        flex:1,
        // display:"flex",
        justifyContent:"center",
        alignItems:"center"
    },
    logo:{
        width:60,
        height:60
    },
    buttonText:{
        color:"white",
        fontSize:25,
        fontWeight:"bold",
        letterSpacing:3
    }
})
