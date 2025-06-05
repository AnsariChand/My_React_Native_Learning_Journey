import { TouchableOpacity, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const App = () => {
    const [email, setEmail] = useState('');
    const[password, setPassword] = useState('');

    const handleSignIn = () => {
        alert(`Email: ${email}\nPassword: ${password}`);
    };

  return (
    <View style={styles.Container}>
        <Text style={styles.Text}>Sign In </Text>
        <Text style={styles.Text2}>This is a Perfect Place To Write a Short Description of this Step and even the next steps ahead.</Text>
        
        <View style={styles.Container2}>
            <Icon name="facebook" size={60} color="#3b5998" style={styles.icon} />
           <Icon name="twitter" size={60} color="#1DA1F2" style={styles.icon} />
           <Icon name="google" size={60} color="#DB4437" style={styles.icon} />
        </View>

        <Text style={styles.Text3}> Or Be Classical </Text>

        <View style={styles.InputContainer}>
            <TextInput
            style={styles.input}
            placeholder='Email'
            onChangeText={setEmail}
            value={email}
            keyboardType="email-address"
            numberOfLines={1}
            />

            <TextInput
            style={styles.input}
            placeholder='Password'
            secureTextEntry
            onChangeText={setPassword}
            value={password}
            />

            <TouchableOpacity>
                <Text style={styles.ForgotPassWord}>Forgot Your Password ? </Text>
            </TouchableOpacity>
             
            <TouchableOpacity style={styles.Button}>
                <Text style={styles.ButtonText}>Sign In</Text>
            </TouchableOpacity>

            <View style={styles.SignUpContainer}>
                <Text>Don't Have An Acount ?</Text>
                <TouchableOpacity>
                    <Text>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
  );
};
export default App;

const styles = StyleSheet.create({
    Container:{
        flex:1,
        backgroundColor:'	#fda1bb',
        alignContent:'center',
        alignItems:'center',
    },
    Text:{
        fontSize:25,
        fontWeight:'800',
        paddingTop:20
    },
    Text2:{
        fontSize:20,
        fontWeight:'500',
        color:'#808080',
        textAlign:'center',
        paddingTop:40,
    },
    Container2:{
        flexDirection:'row',
        justifyContent:'center',
        marginTop:50
    },
    icon:{
        marginHorizontal:20,
    },
    Text3:{
       fontSize:20,
       color:'#808080',
       marginTop:25,
       fontWeight:'500'
    },
    input:{
        height:50,
        borderColor:'#ccc',
        borderWidth:1,
        paddingHorizontal:150,
        borderRadius:30,
        marginBottom:10,
        fontSize:16,
        color:'#000',  
        textAlign:'center'  
    },
    Button:{
        backgroundColor:'#007bff',
        paddingVertical:15,
        borderRadius:30,
    },
    ButtonText:{
        textAlign:'center',
        color:'#fff',
        fontSize:16,
        fontWeight:'600',
    },
    SignUpContainer:{
        flexDirection:'row',
        justifyContent:'center',
        marginTop:25,
    },
    ForgotPassWord:{
        color:'#007bff',
        textAlign:'right',
        marginBottom:20,
        fontSize:14,
    },
    SignUpLink:{
        fontSize:14,
        color:'#007bff',
        fontWeight:'500',
    },
    InputContainer:{
        flex:1,
        marginTop:55,
    }
});