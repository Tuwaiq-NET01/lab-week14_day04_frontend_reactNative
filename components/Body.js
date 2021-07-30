import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Entypo } from '@expo/vector-icons';

export default function Body() {
    return (
        <View style={styles.bodyContainer}>
            <View style={styles.following}>
                <Text style={styles.heading}>
                    Following  
                    <Entypo name="chevron-thin-right" size={14} color="grey" />
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    bodyContainer: {
        backgroundColor: '#fff',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff',
        padding: 10,
        paddingTop: 20
    }, 
    heading:{
        fontWeight: "bold",
        fontSize: 16,
    }
    });
    