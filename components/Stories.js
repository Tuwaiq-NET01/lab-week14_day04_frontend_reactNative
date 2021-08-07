import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'


export default class Message extends Component {
    render() {
        return (
            <View>
                <Text style={styles.text}>
                   Followings            
                  <MaterialCommunityIcons name="greater-than" size={15} color="#bdb9b9"></MaterialCommunityIcons>
                </Text>

                <View style={styles.FollowingPart}>
  
                    <View>
                       <Image style={styles.FollowingStory} source={require('../assets/FollowingStory1.jpg')}/>
                       <Image style={styles.FollowingPic} source={require('../assets/FollowingPic1.jpg')}/>
                       <Text style={styles.FollowingName}>
                           annemarie
                       </Text>
                    </View>
                    <View>
                       <Image style={styles.FollowingStory} source={require('../assets/FollowingStory2.jpg')}/>
                       <Image style={styles.FollowingPic} source={require('../assets/FollowingPic2.jpg')}/>
                       <Text style={styles.FollowingName}>
                           invisibleapp
                       </Text>
                    </View>
                    <View>
                       <Image style={styles.FollowingStory} source={require('../assets/FollowingStory3.jpg')}/>
                       <Image style={styles.FollowingPic} source={require('../assets/FollowingPic3.jpg')}/>
                       <Text style={styles.FollowingName}>
                           donutmedia
                       </Text>
                    </View>
                </View>


                <Text style={styles.text}>
                   Friends
                  <MaterialCommunityIcons name="greater-than" size={15} color="#bdb9b9"></MaterialCommunityIcons>
                </Text>

                <View style={styles.FriendPart}>
  
                    <View>
                       <Image style={styles.FriendStory} source={require('../assets/FriendStory1.jpg')}/>
                       <Image style={styles.FriendPic} source={require('../assets/FriendPic1.jpg')}/>
                       <Text style={styles.FriendName}>
                           yasminadel
                       </Text>
                    </View>
                    <View>
                       <Image style={styles.FriendStory} source={require('../assets/FriendStory2.jpg')}/>
                       <Image style={styles.FriendPic} source={require('../assets/FriendPic2.jpg')}/>
                       <Text style={styles.FriendName}>
                           bellathomas
                       </Text>
                    </View>
                    <View>
                       <Image style={styles.FriendStory} source={require('../assets/FriendStory3.jpg')}/>
                       <Image style={styles.FriendPic} source={require('../assets/FriendPic3.jpg')}/>
                       <Text style={styles.FriendName}>
                           carleypaige
                       </Text>
                    </View>

                    <View>
                       <Image style={styles.FriendStory} source={require('../assets/FriendStory4.jpg')}/>
                       <Image style={styles.FriendPic} source={require('../assets/FriendPic4.jpg')}/>
                       <Text style={styles.FriendName}>
                            karliekloss
                       </Text>
                    </View>
                    <View>
                       <Image style={styles.FriendStory} source={require('../assets/FriendStory5.jpg')}/>
                       <Image style={styles.FriendPic} source={require('../assets/FriendPic5.jpg')}/>
                       <Text style={styles.FriendName}>
                           mikewilliams
                       </Text>
                    </View>
                    <View>
                       <Image style={styles.FriendStory} source={require('../assets/FriendStory6.jpg')}/>
                       <Image style={styles.FriendPic} source={require('../assets/FriendPic6.jpg')}/>
                       <Text style={styles.FriendName}>
                           tagiakokami
                       </Text>
                    </View>
                </View>


                
                <Text style={styles.text}>
                   Suggested
                  <MaterialCommunityIcons name="greater-than" size={15} color="#bdb9b9"></MaterialCommunityIcons>
                </Text>

                <View style={styles.FollowingPart}>
  
                    <View>
                       <Image style={styles.FollowingStory} source={require('../assets/FollowingStory1.jpg')}/>
                       <Image style={styles.FollowingPic} source={require('../assets/FollowingPic1.jpg')}/>
                       <Text style={styles.FollowingName}>
                           annemarie
                       </Text>
                    </View>
                    <View>
                       <Image style={styles.FollowingStory} source={require('../assets/FollowingStory2.jpg')}/>
                       <Image style={styles.FollowingPic} source={require('../assets/FollowingPic2.jpg')}/>
                       <Text style={styles.FollowingName}>
                           invisibleapp
                       </Text>
                    </View>
                    <View>
                       <Image style={styles.FollowingStory} source={require('../assets/FollowingStory3.jpg')}/>
                       <Image style={styles.FollowingPic} source={require('../assets/FollowingPic3.jpg')}/>
                       <Text style={styles.FollowingName}>
                           donutmedia
                       </Text>
                    </View>
                   
                </View>
                <View style={{flex: 2, margin: 50}}>

                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    text:
    {
        margin: 20,
        fontWeight: "bold",
        
    },
    FollowingPart:
    {
        flexDirection: "row",
        justifyContent: "space-evenly",
    },
    FollowingStory:
    {
        height: 150,
        width: 100,
        borderRadius: 10
    },
    FollowingPic:
    {
        position: "absolute",
        top: 90,
        left: 35,
        height: 30,
        width: 30,
        borderRadius: 50,
        borderWidth: 1.5,
        borderColor: 'white',
    },
    FollowingName:
    {
        position: "absolute",
        top: 125,
        left: 15,
        color: "white",
        fontWeight: "bold",
    },
    FriendPart:
    {
        margin: 30,
        width: 330,
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "row",
        justifyContent: "space-evenly",
    },
    FriendStory:
    {
        margin: 2,
        height: 250,
        width: 160,
        borderRadius: 10,
    },
    FriendPic:
    {
        position: "absolute",
        top: 190,
        left: 65,
        height: 30,
        width: 30,
        borderRadius: 50,
        borderWidth: 1.5,
        borderColor: 'white',
    },
    FriendName:
    {
        position: "absolute",
        top: 220,
        left: 40,
        color: "white",
        fontWeight: "bold",
    },
})