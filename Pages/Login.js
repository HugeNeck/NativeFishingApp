import React, {useState} from 'react';
import {View, Text, TextInput ,Button, Alert} from 'react-native';

import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'

export default function Login({navigation}) {

    const [email, setEmail] = useState("none picked")
    const [password, setPassword] = useState("none picked")

    const onLoginPress = () => {
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then((response) => {
                const uid = response.user.uid
                Alert.alert("SUCCESS" + "userID:" + uid)
                navigation.navigate('Home')
            })
            .catch(error => {
                Alert.alert("FAILURE" + error)
            })
    }

    return(
        <View>
        <Text>Enter Email:  </Text>
        <TextInput 
            placeholder="aaaa"
            placeholderTextColor='red'
            value={email}
            onChangeText={setEmail}/>   
        <Text>Enter Password: </Text>
        <TextInput 
            placeholder="aaaa"
            placeholderTextColor='red'
            value={password}
            onChangeText={setPassword}/>   
        <Button title="Login" onPress={onLoginPress}/>
        </View>
    )

}