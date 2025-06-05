import HomeScreen from "@/Compoents/HomeScreen";
import WelcomeScreen from "@/Compoents/WelcomeScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { GestureHandlerRootView } from 'react-native-gesture-handler';


const stack = createNativeStackNavigator();

export default function index() {
  return(
    <GestureHandlerRootView style={{flex:1, marginTop:-40}}>
      <stack.Navigator initialRouteName="welcome">
        <stack.Screen name="welcome" component={WelcomeScreen}/>
        <stack.Screen name="Home" component={HomeScreen}/>
      </stack.Navigator>  
    </GestureHandlerRootView>
  );
}


