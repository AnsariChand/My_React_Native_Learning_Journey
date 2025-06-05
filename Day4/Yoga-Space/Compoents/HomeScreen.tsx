import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export default function HomeScreen() {
    return(
        <ScrollView contentContainerStyle={styles.Container}>
            <Text style={styles.greeting}>🧘‍♀️ Welcome back!</Text>
            <Text style={styles.Subheading}>Choose Your Fitness Journey:</Text>

            <Image source={require('../assets/images/Fit.jpeg')} style={styles.image}/>

            <View style={styles.categories}>
        <TouchableOpacity style={styles.categoryBox}>
          <Text style={styles.categoryText}>Beginner Flow</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryBox}>
          <Text style={styles.categoryText}>Morning Yoga</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryBox}>
          <Text style={styles.categoryText}>Meditation</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryBox}>
          <Text style={styles.categoryText}>Relaxation</Text>
        </TouchableOpacity>
      </View>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    Container:{
        padding:20,
        alignItems:'center',
    },
    greeting:{
        fontSize:18,
        color:'gray',
        marginBottom:20,
    },
    Subheading:{
        fontSize:18,
        color:'gray',
        marginBottom:20,
    },
    image:{
        width:'100%',
        height:220,
        resizeMode:'contain',
        borderRadius:20,
        marginBottom:20,
    },
    categories:{
        width:'100%',
    },
  categoryBox: {
    backgroundColor: '#ffcc80',
    padding: 16,
    borderRadius: 16,
    marginBottom: 12,
    alignItems: 'center',
  },


})