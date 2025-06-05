import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from '@/MyComponent/HomeScreen'

const stack = createNativeStackNavigator();

export default function App() {
    return(
        <NavigationContainer>
            <stack.Navigator>
                <stack.Screen name='News' component={HomeScreen} />
            </stack.Navigator>
        </NavigationContainer>

    );
}
