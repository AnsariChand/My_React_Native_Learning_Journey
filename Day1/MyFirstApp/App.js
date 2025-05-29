import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function App() {
  return(
    <View style={styles.container}>
      <Text style={styles.title}>Hello, React Native</Text>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: '#fefefe'
  },
  title:{
    fontSize:24,
    fontWeight:'bold',
  }
})