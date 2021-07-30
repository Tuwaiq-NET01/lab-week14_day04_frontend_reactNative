import React from "react";
import { View, Text, StyleSheet} from "react-native";
import Feather from 'react-native-vector-icons/Feather'
import Fontisto from 'react-native-vector-icons/Fontisto'

export default function Footer() {
  return (
    <View>
      <View style={styles.footer}>
        <Feather
          name="message-square"
          size={25}
          color="gray"
          style={{ alignSelf: "flex-end", marginBottom: 10, paddingRight: 20 }}
        />
        <Feather name="circle" size={70} color="gray" />
        <Fontisto
          name="snapchat"
          size={25}
          color="gray"
          style={{ alignSelf: "flex-end", marginBottom: 10, paddingLeft: 20 }}
        />
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
    footer: {
      height: 90,
      width: '100%',
      flexDirection: "row", 
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgba(255, 255, 255, 0.8)",
      position: "absolute",
      bottom: 0
    }
  });
  
