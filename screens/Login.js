import React from 'react'
import { View, Text, Button,StyleSheet, TextInput, TouchableOpacity} from 'react-native'
export default function Login(navigation) {
    return (
        <View style={{flex:1}}>
            <View style={styles.labelContainer}>
                <Text style={styles.label}>What's your name?</Text>
            </View>
            <View style={styles.inputContainer}>
                <TextInput style={styles.input} placeholder="FIRST NAME"></TextInput>
                <TextInput style={styles.input} placeholder="LAST NAME"></TextInput>

                <Text style={styles.agreemnt}>By tapping Sign UP & Accept, you agree to <Text style={styles.specialAgreemnt}>Terms of Service</Text> and <Text style={styles.specialAgreemnt}>Privacy Policy</Text> </Text>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity>
                    <Text style={styles.button}>Sign UP & Accept</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    labelContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    label: {
        fontSize: 20
    },
    inputContainer: {
        flex: 2
    },
    input: {
        borderBottomWidth: 0.5,
        borderColor: "gray",
        paddingBottom: 35,
        marginHorizontal: 30,
        marginBottom: 10
    },
    agreemnt: {
        textAlign: "justify",
        marginHorizontal: 30
    },
    specialAgreemnt: {
        color: '#2ab89f'
    },
    buttonContainer: {
        flex: 1
    },
    button: {
        fontSize: 15,
        fontWeight: "bold",
        color: "white",
        backgroundColor: "#b7bfbd",
        height: 50,
        width: 200,
        alignSelf: "center",
        textAlign: "center",
        paddingVertical: 12,
        borderRadius: 90
    }
})