import { View, StyleSheet } from 'react-native'
import React from 'react'
import App from '../MyComponent/LoginScreen'


const index = () => {
  return (
    <View style={styles.Container}>
      <App/>
    </View>
  )
}

export default index;

const styles = StyleSheet.create({
  Container:{
   flex: 1,
   backgroundColor:'	#fda1bb',
  }
  
})