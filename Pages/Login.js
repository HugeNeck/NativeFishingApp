import React, {useState, useLayoutEffect, useEffect} from 'react';
import {View, Text, TextInput ,Button, Alert, Platform} from 'react-native';

import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'

import Header from '../Global/Header'
import styles from '../assets/styles'

import * as SecureStore from 'expo-secure-store';

export default function Login({navigation}) {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const onLoginPress = () => {
        if(Platform.OS !== 'web'){
        SecureStore.setItemAsync("savedEmail", email)
        SecureStore.setItemAsync("savedpassword", password)
        }
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then((response) => {
                const uid = response.user.uid
                
                Alert.alert("SUCCESS" + " userID: " + uid)
                navigation.navigate('Home',
                {uid : uid})
            })
            .catch(error => {
                Alert.alert("FAILURE" + error)
            })
    }

    const forgotPassword = () => {
        firebase.auth().sendPasswordResetEmail(email)
          .then( () =>
            Alert.alert('Please check your email...')
          ).catch(function (e) {
            console.log(e)
          })
    }
      
    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: () => (
                <Header/>
            ) 
        })
    })
    
    useEffect( () => {
        if(Platform.OS !== 'web'){
        const savedEmail =  SecureStore.getItemAsync("savedEmail")
        const savedPassword = SecureStore.getItemAsync("savedPassword")
        savedEmail.then(savedEmail === null ? setEmail(savedEmail) : null) 
        savedPassword.then(savedPassword === null? setPassword( savedPassword): null)
    }
    },[])

    return(
        <View style={styles.centerContainer}>
        <Text style={styles.weather}>Enter Email:  </Text>
        <TextInput  
            style={styles.input}    
            placeholder="none picked"
            placeholderTextColor='red'
            value={email}
            onChangeText={setEmail}/>   
        <Text style={styles.weather}>Enter Password: </Text>
        <TextInput 
           style={styles.input}  
            placeholder="none picked"
            placeholderTextColor='red'
            value={password}
            onChangeText={setPassword}/>   
        <Button title="Forgot/Change Password" onPress={forgotPassword} />
        <View style={styles.space}/>
        <Button title="Login" onPress={onLoginPress}/>
        </View>
    )

}