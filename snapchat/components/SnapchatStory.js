import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity,ImageBackground ,Image,ScrollView, Dimensions  } from 'react-native'
export default class Message extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpen: false
        }
    }
    render() {
        return (
            
                <View>
                    <Text>
                        Following
                    </Text>
                <View  style={{  height: 205, width: "100%",flexDirection:"row", justifyContent:"flex-start",   }}>
                     <ScrollView style={styles.scrollV} horizontal={true}>
                    <ImageBackground borderRadius={10} source={{ uri: this.props.image1 }} style={{ height: 150, width: 95,margin:20,padding:20 }}>

                        <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}>
                             {/* //here you can change position of image with justifyContent and alignItems */}
              <Image
                                source={{ uri: this.props.image2 }}
                                style={{ width: 20, height: 20, alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: '#fff', borderRadius: 30 }} />
                        
                        <Text style={{ color:"white",fontWeight:"bold"}}>{this.props.username}  </Text>
                        </View>

                    </ImageBackground>

                    <ImageBackground borderRadius={10} source={{ uri: this.props.image1 }} style={{ height: 150, width: 95,margin:20,padding:20 }}>

                        <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}>
                             {/* //here you can change position of image with justifyContent and alignItems */}
              <Image
                                source={{ uri: this.props.image2 }}
                                style={{ width: 20, height: 20, alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: '#fff', borderRadius: 30 }} />
                        
                        <Text style={{ color:"white",fontWeight:"bold"}}>{this.props.username}  </Text>
                        </View>

                    </ImageBackground>

                    <ImageBackground borderRadius={10} source={{ uri: this.props.image1 }} style={{ height: 150, width: 95,margin:20,padding:20 }}>

                        <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}>
                             {/* //here you can change position of image with justifyContent and alignItems */}
              <Image
                                source={{ uri: this.props.image2 }}
                                style={{ width: 20, height: 20, alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: '#fff', borderRadius: 30 }} />
                        
                        <Text style={{ color:"white",fontWeight:"bold"}}>{this.props.username}  </Text>
                        </View>

                    </ImageBackground>

                    <ImageBackground borderRadius={10} source={{ uri: this.props.image1 }} style={{ height: 150, width: 95,margin:20,padding:20 }}>

                        <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}>
                             {/* //here you can change position of image with justifyContent and alignItems */}
              <Image
                                source={{ uri: this.props.image2 }}
                                style={{ width: 20, height: 20, alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: '#fff', borderRadius: 30 }} />
                        
                        <Text style={{ color:"white",fontWeight:"bold"}}>{this.props.username}  </Text>
                        </View>

                    </ImageBackground>
                    
                    </ScrollView>
                </View>
                </View>
           
        )
    }
}
const styles = StyleSheet.create({

})