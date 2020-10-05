import React, {useState, useEffect} from 'react';
import { Button, StyleSheet, Text, TextInput, View} from 'react-native';
import {Picker} from '@react-native-community/picker';
import LiveWellData from '../assets/LiveWellData';
import { ScreenContainer } from 'react-native-screens';
import PicTaker from '../assets/PicTaker'

export default function Replace() {

    const [weatherData, setWeatherData] = useState('Loading')

    const [fishLength, setFishLength] = useState(0)
    const [fishWeight, setFishWeight] = useState(0)
    const [fishType, setFishType] = useState(LiveWellData[0].fishType)

    function handleSubmit(e){
    
    }

    useEffect(
        () =>{      
            fetch("http://api.openweathermap.org/data/2.5/weather?q=ottawa,ca&APPID=7e943c97096a9784391a981c4d878b22&mode=json&units=metric%22")
            .then(response => response.json())
            .then(data => {
                    setWeatherData(data.cod)
            })
    })
                return(
                    <View>
                        <Text>Choose a Fish</Text>
                            <Picker
                            style={styles.input}
                             onValueChange={ (value, index) =>setFishType(value)} selectedValue= {fishType}>         
                                {LiveWellData.map(fish => 
                                <Picker.Item 
                                key = {fish.fishType} label={fish.fishType}  value={fish.fishType} /> 
                                )}             
                          </Picker>
                    <Text>Size of Fish in Inches:</Text>
                    <TextInput 
                        style={styles.input}
                        value={fishLength}
                        defaultValue="0"
                        onChangeText={setFishLength}/>              
                    <Text>Weight of Fish in Pounds:</Text>
                    <TextInput
                        style={styles.input}
                        value={fishWeight}
                        defaultValue="0"
                        onChangeText={setFishWeight}/>             
                    <Text>Take or Upload Picture: </Text>                             
                    <PicTaker/>    
                    <Text>Current Weather:{weatherData}</Text>
                    <Button title= "SUBMIT" onPress = {handleSubmit}/>      
                    </View>
                )
    }

    const styles = StyleSheet.create({
        input: {
          color: 'red'
        },
        screenContainer: {
            flex: 1,
            justifyContent: 'space-evenly',
            alignItems: 'center',
            padding: 16
          }
    })

