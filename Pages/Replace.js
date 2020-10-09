import React, {useState, useEffect, useContext} from 'react';
import { Alert, Button, Text, TextInput, View} from 'react-native';
import {Picker} from '@react-native-community/picker';
import LiveWellData from '../assets/LiveWellData';
import PicTaker from '../assets/PicTaker'
import styles from '../assets/styles'

import firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/database'
import 'firebase/auth'

import {CurrentFisherContext} from '../assets/CurrentFisher'
import Header from '../Global/Header';


export default function Replace({navigation}) {
    let imageData
    let dataKey
    const [image, setImage] = useState(null);
    const [fishLength, setFishLength] = useState()
    const [fishWeight, setFishWeight] = useState()
    const [fishType, setFishType] = useState('None Selected')

    const [currentFisher, setCurrentFisher] = useContext(CurrentFisherContext);

    function submitFish() {
        if(currentFisher === 'Joel'){
            dataKey =firebase.database().ref('users/' + "u7FOtTJGasMlqIclUFNHuT0uCF72" ).push({
                fishType: fishType,
                fishWeight: fishWeight,
                fishLength: fishLength,
                fisher: currentFisher,
                // photoUri: "gs://fishingapp-36472.appspot.com/images/" + 'test2',
                loggedBy: firebase.auth().currentUser.email
            }).key
        } 
        else if(currentFisher === 'Justin'){
            dataKey =firebase.database().ref('users/' + "euaOW4QZR1V5LsvRqXgF2A51Cam1" ).push({
                fishType: fishType,
                fishWeight: fishWeight,
                fishLength: fishLength,
                fisher: currentFisher,
                // photoUri: imageData.uri,
                loggedBy: firebase.auth().currentUser.email
            }).key
        } 
        else if(currentFisher === 'Fez'){
            dataKey =firebase.database().ref('users/' + "nH32Rcx6CugwwtcI5V5ggrszQOH3" ).push({
                fishType: fishType,
                fishWeight: fishWeight,
                fishLength: fishLength,
                fisher: currentFisher,
                // photoUri: imageData.uri,
                loggedBy: firebase.auth().currentUser.email
            }).key
        } 
      
        else if(currentFisher === 'Dan'){
            datakey= firebase.database().ref('users/' + "Hv3Ql8pSaBfV27hZzCfRnlbRfKx2" ).push({
                fishType: fishType,
                fishWeight: fishWeight,
                fishLength: fishLength,
                fisher: currentFisher,      
                // photoUri: imageData.uri,
                loggedBy: firebase.auth().currentUser.email
            }).key
        } 
       Alert.alert("submission successful")
       if (image != null)   
       imageData = uploadImage(image, dataKey)

        firebase.database().ref('users/u7FOtTJGasMlqIclUFNHuT0uCF72/' + dataKey).update({
            photoUri: dataKey
        })
    }

    async function uploadImage(uri, name){
        const response = await fetch(uri);
        const blob = await response.blob();
        var ref = firebase.storage().ref().child("images/" + name);
        return ref.put(blob);
      }

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
                                <Text>Fish to Add: </Text>      
                                <TextInput 
                                    style={styles.input}
                                    placeholder="Add a Fish"
                                    placeholderTextColor='red'
                                    value={fishType}
                                    onChangeText={setFishType}/>
                            {/* <Picker style={styles.picker} 
                                    onValueChange={ (value, index) =>setFishType(value)}
                                    selectedValue= {fishType}>         
                                    {LiveWellData.map(fish => 
                                        <Picker.Item  
                                            key= {fish.fishType} label={fish.fishType}  value={fish.fishType} /> 
                                    )}        
                            </Picker>   */}
                            </View>              
                            <View style={styles.pickerContainer}>                             
                            <Text>Size of Fish in Inches:  </Text>
                            <TextInput 
                                style={styles.input}
                                placeholder="0"
                                placeholderTextColor='red'
                                value={fishLength}
                                keyboardType='number-pad'
                                onChangeText={setFishLength}/>     
                                </View>       
                            <View style={styles.pickerContainer}>
                            <Text>Weight of Fish in Pounds:  </Text>
                            <TextInput
                                style={styles.input}          
                                placeholder="0"
                                placeholderTextColor='red'
                                value={fishWeight}
                                keyboardType='number-pad'
                                onChangeText={setFishWeight}/>  
                                </View>
                        </View>
                        <PicTaker image={image} setImage={setImage}/>             
                        </View>
                )
    }
