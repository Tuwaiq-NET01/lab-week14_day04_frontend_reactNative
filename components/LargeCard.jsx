import React from 'react'
import { Text, View, Image, ImageBackground } from 'react-native'

const LargeCard = (props) => {

        return (
                <View style={
                    {
                        height: 290,
                        width: 200,
                        marginVertical: 3
                    }
                }>

                    <ImageBackground source={{ uri: "https://picsum.photos/200/300" }} resizeMode="cover" style={
                            {
                                flex: 1,
                                justifyContent: "center",
                                overflow:"hidden",
                                borderRadius:10,
                            }
                    }>
                        <Image
                            style={
                                {
                                    marginTop: 170,
                                    alignSelf: "center",
                                    height: 35,
                                    width: 35,
                                    borderColor: "white",
                                    borderRadius: 50,
                                    borderWidth: 1
                                }
                            }
                            source={{ uri: "https://picsum.photos/200" }}>
                        </Image>

                        <Text style={
                            {
                                marginTop: 2,
                                alignSelf: "center",
                                color: "white",
                                fontWeight:"bold",
                                fontSize:12                            
                            }
                        }>{props.name}</Text>

                    </ImageBackground>
                </View>
        )
    }

export default LargeCard