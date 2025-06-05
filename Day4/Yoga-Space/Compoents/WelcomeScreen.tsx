import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";


export default function WelcomeScreen({ navigation }) {
    return(
     <View style={style.container}>
        <Text style={style.title}>Have The best </Text>
        <Text style={style.subTitle}>Yoga Experience</Text>
        <Text style={style.description}>Tranasform Your Body and Mind With our Comprehensive Yoga App. Discover expert-led classes, personalized routines.</Text>
        <Image source={require('../assets/images/Yoga.png')} style={style.image}/>
        <TouchableOpacity onPress={()=> navigation.navigate('Home')} style={style.button}>
            <Text style={style.ButtonText}>Start Journey</Text>
        </TouchableOpacity>
        
     </View>
    );
}

const style = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff',
    alignItems: 'center',
    justifyContent:'center',
  },
  title:{
    fontSize:28,
    fontWeight:'400',
  },
  subTitle:{
    fontSize:32,
    fontWeight:'bold',
    marginBottom:12,
  },
  description:{
    fontSize:16,
    textAlign:'center',
    paddingHorizontal:24,
    borderRadius:30,
    marginBottom:20
  },
  button:{
    backgroundColor:'#ff7f50',
    paddingVertical:12,
    paddingHorizontal:24,
    borderRadius:40,
    marginTop:25
  },
  ButtonText:{
    color:'#fff',
    fontSize:16,
  },
  image:{
    width:370,
    height:400,
    resizeMode:'stretch',
  },
});