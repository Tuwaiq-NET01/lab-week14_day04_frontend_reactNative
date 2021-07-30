import React, {useState, useEffect} from 'react'
import { View, Text, Image ,StyleSheet, TextInput, ScrollView, Dimensions  } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'

const windowWidth = Dimensions.get('window').width;
export default function Snaps(navigation) {
    const [term, useTerm] = useState("")
  
    return (

        <View style={styles.container}>
                  
        <View style={styles.searchBox}>
         
        <View style={styles.RightSide}>
        <Feather style={styles.icon} name="user-plus" size={25} color="white"></Feather>

</View>

          <View style={styles.leftSide}>
            <Ionicons style={styles.icon} name="search" size={25} color="white" ></Ionicons>
            <TextInput onChangeText={(text) => useTerm(text)} placeholder="Discover" placeholderTextColor="white"></TextInput>
          </View>
          <View style={styles.PicSmall}>
          <Image
       style={styles.PicSmall}
        source={{
          uri: 'https://www.publicdomainpictures.net/pictures/320000/velka/background-image.png',
        }}
      />
         
          </View>
          </View>
          <View style={styles.Box1}>
            <Text><h1>Following &gt;</h1> </Text>
          
          <View style={styles.pics}>
          <Image
       style={styles.picSnap}
        source={{
          uri: 'https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300',
        }}
      />
        <Image
       style={styles.picSnap}
        source={{
          uri: 'https://images.unsplash.com/photo-1544526226-d4568090ffb8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGQlMjBpbWFnZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
        }}
      />
        <Image
       style={styles.picSnap}
        source={{
          uri: 'https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg',
        }}
      />
       </View>
          
          <Text><h1>Friends &gt;</h1> </Text>
          <View style={styles.pics}>
          <Image
       style={styles.picSnapF}
        source={{
          uri: 'https://beanalog.com/wp-content/uploads/2019/04/developer-api.jpg',
        }}
      />
       <Image
       style={styles.picSnapF}
        source={{
          uri: 'https://tinypng.com/images/social/photoshop.jpg',
        }}
      />
       </View>
       <View style={styles.pics}>
          <Image
       style={styles.picSnapF}
        source={{
          uri: 'https://im0-tub-ru.yandex.net/i?id=84dbd50839c3d640ebfc0de20994c30d&n=27&h=480&w=480',
        }}
      />
       <Image
       style={styles.picSnapF}
        source={{
          uri: 'https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg',
        }}
      />
       </View>


<Text><h1>Suggested &gt;</h1> </Text>

<View style={styles.pics}>
          <Image
       style={styles.picSnap}
        source={{
          uri: 'https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300',
        }}
      />
        <Image
       style={styles.picSnap}
        source={{
          uri: 'https://images.unsplash.com/photo-1544526226-d4568090ffb8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGQlMjBpbWFnZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
        }}
      />
        <Image
       style={styles.picSnap}
        source={{
          uri: 'https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg',
        }}
      />
       </View>
          </View>
          <View style={styles.footer}>
        <Feather name="message-square" size={25} color="gray"></Feather>
        <Feather name="circle" size={70} color="gray"></Feather>
        <Feather name="more-horizontal" size={30} color="gray"></Feather>
      </View>


          </View>

        

    )

}
const styles = StyleSheet.create ({
    searchBox: {
        height: 60,
        backgroundColor: "blueviolet",
        flexDirection: "row-reverse",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        alignItems: "center"
    },
    Box1:{
    flex:2,

    },
    
    leftSide: {
      flexDirection: "row",
      left:-170
     
    },
    icon: {
      margin: 10
    },
    container: {
        flex: 1,
        marginTop: 25,
      },
      PicSmall: {
height:50,
width:50,
borderRadius:20

      },
      pics:{
        flexDirection: "row-reverse",
        justifyContent: "space-around",
        alignItems: "center",


      },
      picSnap:{
        height:420,
        width:210,
        borderRadius:10,

      },
      picSnapF:{
        height:520,
        width:310,
        borderRadius:10,


      },
      footer: {
        height: 90,
        width: windowWidth,
        flexDirection: "row", 
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        position: "absolute",
        bottom: 0
      }


 })