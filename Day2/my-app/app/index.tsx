import { View, Text, Button, StyleSheet } from 'react-native'
import React from 'react'
import { useState } from 'react'

const index = () => {
  const [count, setCount] = useState(0);
  return (
    <View style={styles.container}>
      <Text>Count:{count}</Text>
      <Button title='Increase' onPress={()=> setCount(count + 1 )}/>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container:{
    padding:20,
    backgroundColor: 'lightblue'
  },
  Text:{
    fontSize:18,
    color:'DarkBlue'
  }
})