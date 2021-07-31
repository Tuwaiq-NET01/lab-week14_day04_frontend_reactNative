import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';
import { Entypo, Ionicons } from '@expo/vector-icons';

export default function Nav() {
    return (
        <View style={styles.menu}>
        <Ionicons style={styles.menuItems} name="chatbox" size={24} color="white" />
          <Entypo style={styles.menuItems} name="circle" size={60} color="white" />
          <Ionicons style={styles.menuItems} name="ios-stats-chart" size={24} color="white" />
        </View>
    )
}

const styles = StyleSheet.create({
    menu: {
        position: "absolute",
        bottom: 0,
        width: "100%",
        padding: 15,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "baseline"
      },
      menuItems: {
        marginHorizontal: 10,
        shadowColor: "#000",
        shadowOffset: {
          width: 5,
          height: 2,
        },
        shadowOpacity: 0.7,
        shadowRadius: 4.84,
        elevation: 5
      }
    });
    