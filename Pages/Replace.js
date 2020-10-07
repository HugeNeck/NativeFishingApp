import React, {useState, useEffect, useContext} from 'react';
import { Button, Text, TextInput, View} from 'react-native';
import {Picker} from '@react-native-community/picker';
import LiveWellData from '../assets/LiveWellData';
import PicTaker from '../assets/PicTaker'
import styles from '../assets/styles'

import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'

import {CurrentFisherContext} from '../assets/CurrentFisher'
import Header from '../Global/Header';

  // Get a reference to the database service
  // var database = firebase.database();

export default function Replace({navigation}) {

    const [weatherData, setWeatherData] = useState('Loading')

    const [fishLength, setFishLength] = useState()
    const [fishWeight, setFishWeight] = useState()
    const [fishType, setFishType] = useState(LiveWellData[0].fishType)

    const [currentFisher, setCurrentFisher] = useContext(CurrentFisherContext);
    // async function handleSubmit(){
    //     let result = await ImagePicker.launchCameraAsync();
    //     if (!result.cancelled) {
    //         uploadImage(result.uri, "testImage3")
    //         .then( () => {
    //             console.log("SUCCESS")
    //         })
    //         .catch((error) => {
    //             console.log("FAILED" + error)
    //         })
    //     }
    // }

    // async function uploadImage(uri, name){
    //     const response = await fetch(uri);
    //     const blob = await response.blob();
    //     var ref = firebase.storage().ref().child("images/" + name);
    //     return ref.put(blob);
    //   }

    // function storeFishData() {
    //     if (user != null) {
    //       firebase.database().ref('users/' + user.uid).set({
    //         highscore: score
    //       });
    //     }
    //   }

    function submitFish() {
        if(currentFisher === 'Joel')
        firebase.database().ref('users/' + "nH32Rcx6CugwwtcI5V5ggrszQOH3" ).push({
            fishType: fishType,
            fishWeight: fishWeight,
            fishLength: fishLength,
            fisher: firebase.auth().currentUser.displayName
        })
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
            ),
            headerRight: () => (
                <Button title="submitFish" onPress={submitFish}/>
            )      
        })
    })
                return(
                    <View style={styles.screenContainer}>    
                        <Text style={styles.title}>Add a Fish to the Well!</Text>  
                        <View style={styles.centerContainer}>    
                            <View style={styles.pickerContainer}>  
                                <Text>Choose a Fish:</Text>          
                                    <Picker style={styles.picker} 
                                    onValueChange={ (value, index) =>setFishType(value)}
                                    selectedValue= {fishType}>         
                                        {LiveWellData.map(fish => 
                                        <Picker.Item  
                                        key= {fish.fishType} label={fish.fishType}  value={fish.fishType} /> 
                                        )}             
                                </Picker>    
                            </View>                                         
                            <Text>Size of Fish in Inches:  </Text>
                            <TextInput 
                                style={styles.input}
                                placeholder="0"
                                placeholderTextColor='red'
                                value={fishLength}
                                keyboardType='number-pad'
                                onChangeText={setFishLength}/>            
                            <Text>Weight of Fish in Pounds:  </Text>
                            <TextInput
                                style={styles.input}          
                                placeholder="0"
                                placeholderTextColor='red'
                                value={fishWeight}
                                keyboardType='number-pad'
                                onChangeText={setFishWeight}/>  
                        </View>
                        <PicTaker/>             
                            <View style={styles.weatherContainer} >  
                            <Text style={styles.weather}>Current Weather: {weatherData}</Text>     
                            </View>
                    </View>
                )
    }
