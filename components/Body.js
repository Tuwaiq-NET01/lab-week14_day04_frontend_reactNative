import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import Card from './Card';
export default function Body() {
    return (
        <View style={styles.bodyContainer}>
            <View>
                <Text style={styles.heading}>
                    Following
                    <Entypo name="chevron-thin-right" size={14} color="grey" />
                </Text>
            </View>
            <ScrollView horizontal style={styles.sectionContainer}>
                <Card />
                <Card />
                <Card />
                <Card/>
            </ScrollView>
            <View>
                <Text style={styles.heading}>
                    Friends
                    <Entypo name="chevron-thin-right" size={14} color="grey" />
                </Text>
            </View>
            <View style={styles.sectionContainerV}>
                <Card style={styles.item} />
                <Card style={styles.item} />
                <Card style={styles.item} />
                <Card style={styles.item} />
                <Card style={styles.item} />
                <Card style={styles.item} />
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
    sectionContainer: {
        display: "flex",
        flexDirection: "row",
    },
    heading: {
        fontWeight: "bold",
        fontSize: 16,
    },
    sectionContainerV: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "flex-start"
    }
});
