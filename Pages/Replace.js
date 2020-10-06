import React, {useState, useEffect} from 'react';
import { Button, Text, TextInput, View} from 'react-native';
import {Picker} from '@react-native-community/picker';
import LiveWellData from '../assets/LiveWellData';
import PicTaker from '../assets/PicTaker'
import styles from '../assets/styles'
import * as ImagePicker from 'expo-image-picker';
import firebase from 'firebase/app';
import 'firebase/firebase-storage'

import Header from '../Global/Header';

  // Get a reference to the database service
  // var database = firebase.database();

export default function Replace({navigation}) {

    const [weatherData, setWeatherData] = useState('Loading')

    const [fishLength, setFishLength] = useState()
    const [fishWeight, setFishWeight] = useState()
    const [fishType, setFishType] = useState(LiveWellData[0].fishType)

    async function handleSubmit(){
        let result = await ImagePicker.launchCameraAsync();
        if (!result.cancelled) {
            uploadImage(result.uri, "testImage3")
            .then( () => {
                console.log("SUCCESS")
            })
            .catch((error) => {
                console.log("FAILED" + error)
            })
        }
    }

    async function uploadImage(uri, name){
        const response = await fetch(uri);
        const blob = await response.blob();
        var ref = firebase.storage().ref().child("images/" + name);
        return ref.put(blob);
      }

    useEffect(
        () =>{      
            fetch("http://api.openweathermap.org/data/2.5/weather?q=ottawa,ca&APPID=7e943c97096a9784391a981c4d878b22&mode=json&units=metric%22")
            .then(response => response.json())
            .then(data => {
                if(data.cod !== 200)
                    setWeatherData(data.cod)
                else setWeatherData(data.weather[0].description)
            })
    })

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: () => (
                <Header path={ () => navigation.navigate("ChooseFisher")} />
            ) 
        })
    })
                return(
                    <View style={styles.replaceScreenContainer}>    
                        <Text>Choose a Fish</Text>         
                        <View>     
                            <Picker style={styles.picker} 
                              onValueChange={ (value, index) =>setFishType(value)}
                              selectedValue= {fishType}>         
                                {LiveWellData.map(fish => 
                                <Picker.Item  
                                key= {fish.fishType} label={fish.fishType}  value={fish.fishType} /> 
                                )}             
                          </Picker>    
                    </View>   
                    <Text>Size of Fish in Inches:</Text>
                    <TextInput 
                        style={styles.input}
                        placeholder="0"
                        value={fishLength}
                        keyboardType='number-pad'
                        onChangeText={setFishLength}/>              
                    <Text>Weight of Fish in Pounds:</Text>
                    <TextInput
                        style={styles.input}          
                        placeholder="0"
                        value={fishWeight}
                        keyboardType='number-pad'
                        onChangeText={setFishWeight}/>             
                    <Text>Take or Upload Picture: </Text>                             
                    <PicTaker/>    
                    <View style={styles.space} />
                    <Button title= "Take New Picture" onPress = {handleSubmit}/>
                    <View style={styles.space} />       
                    <Text>Current Weather:{weatherData}</Text>     
                    </View>
                )
    }
