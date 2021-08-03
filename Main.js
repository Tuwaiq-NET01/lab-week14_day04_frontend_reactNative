import React from "react";
import { Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Feather from 'react-native-vector-icons/Feather'

import Home from "./screens/Home";
import Chat from "./screens/Chat";
import Stories from "./screens/Stories";

const Tab = createBottomTabNavigator();
export default function Main() {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let iconSize;

            if (route.name === "Chat") {
                iconName = "message-square"
                iconSize=35
            } else if (route.name === "Home") {
                iconName = "circle" 
                iconSize=75
                
            } else if (route.name === "Stories") {
                iconName = "more-horizontal" 
                iconSize=35

            } else {
            }

            // // You can return any component that you like here!
            return (
                <Feather name={iconName} size={iconSize} color="gray"></Feather>
            );
          },
        })}
        tabBarOptions={{
          activeTintColor: "#23AA9C",
          inactiveTintColor: "#AFAFAF",
          style: {
              height:90,
            // backgroundColor: "rgba(255, 255, 255, 0.6)",
            
            // borderTopWidth: 20
          },
          tabStyle: {
            backgroundColor: "rgba(255, 255, 255, 0.6)",
            padding:10
          },
        }}
        
      >
        <Tab.Screen name="Chat" component={Chat} options={{ tabBarLabel: '' }}/>
        <Tab.Screen name="Home" component={Home} options={{ tabBarLabel: '' }}/>
        <Tab.Screen name="Stories" component={Stories} options={{ tabBarLabel: '' }}/>

      </Tab.Navigator>
    </NavigationContainer>
  );
}
