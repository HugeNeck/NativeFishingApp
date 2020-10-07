import React, {useState} from 'react';
import {View, Text, TextInput ,Button, Alert} from 'react-native';

import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'

import styles from '../assets/styles'

export default function Login({navigation}) {

    const [email, setEmail] = useState("vill0352@algonquinlive.com")
    const [password, setPassword] = useState("rodfather77")

    const onLoginPress = () => {
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

    return(
        <View style={styles.screenContainer}>
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
        <Button title="Login" onPress={onLoginPress}/>
        </View>
    )

}