import React, {useState, useEffect} from 'react';
import { Button, StyleSheet, Text, TextInput, View} from 'react-native';
import {Picker} from '@react-native-community/picker';
import LiveWellData from '../assets/LiveWellData'

export default function Replace(props) {

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
                        onChangeText={setFishLength}/>              
                    <Text>Weight of Fish in Pounds:</Text>
                    <TextInput
                       style={styles.input}
                        value={fishWeight}
                        onChangeText={setFishWeight}/>             
                    <Text>Take or Upload Picture:</Text>                                
                    <Button title= "SUBMIT" value= "Submit" onPress = {handleSubmit}/>               
                    <View>
                    <Text>Current Weather:{weatherData}</Text>
                    </View>
                    </View>
                )
    }

    const styles = StyleSheet.create({
        input: {
          flex: 1,
          backgroundColor: '#ffffff'
        }
    })

