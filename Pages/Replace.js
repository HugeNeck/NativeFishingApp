import React, {useState, useEffect, useContext} from 'react';
import { Alert, SafeAreaView, Text, TextInput, View, BackHandler, Platform} from 'react-native';
import {Picker} from '@react-native-community/picker';
import { Button } from 'react-native-paper';
import PicTaker from '../Global/PicTaker'
import styles from '../assets/styles'

import firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/database'
import 'firebase/auth'

import {CurrentFisherContext} from '../Global/CurrentFisher'
import Header from '../Global/Header';


export default function Replace({route, navigation}) {

    let dataKey
    let uid
    let loggedBy
    // let loggedByUid
    const [image, setImage] = useState(null);
    const [fishLength, setFishLength] = useState()
    const [fishWeight, setFishWeight] = useState()
    const [fishType, setFishType] = useState()

    const {weather} = route.params;

    const [currentFisher, setCurrentFisher] = useContext(CurrentFisherContext);

    function submitFish() {
        loggedBy= firebase.auth().currentUser.email
        if(!fishWeight) {setFishWeight("0")}
        if(!fishLength) {setFishLength("0")}
        if(!fishType) {Alert.alert("Must Select Fish Type")
        return }
        if(!image){Alert.alert("Please add image")
        return }
        // loggedByUid = firebase.auth().currentUser.uid
        if(currentFisher === 'Joel'){
            uid = "u7FOtTJGasMlqIclUFNHuT0uCF72"
            // if(uid != loggedByUid) console.log('FYI- different Fisher!')
            dataKey =firebase.database().ref('users/' + uid ).push({
                fishType: fishType,
                fishWeight: fishWeight,
                fishLength: fishLength,
                fisher: currentFisher,
                // photoUri: "gs://fishingapp-36472.appspot.com/images/" + 'test2',
                loggedBy: loggedBy,
                weatherData: weather
            }).key
           
        } 
        else if(currentFisher === 'Justin'){
            uid="euaOW4QZR1V5LsvRqXgF2A51Cam1"
            // if(uid != loggedByUid) console.log('FYI- different Fisher!')
            dataKey =firebase.database().ref('users/' + uid).push({
                fishType: fishType,
                fishWeight: fishWeight,
                fishLength: fishLength,
                fisher: currentFisher,
                // photoUri: imageData.uri,
                loggedBy: loggedBy,
                weatherData: weather
            }).key
          
        } 
        else if(currentFisher === 'Fez'){
            uid= "nH32Rcx6CugwwtcI5V5ggrszQOH3"
            // if(uid != loggedByUid) console.log('FYI- different Fisher!')
            dataKey =firebase.database().ref('users/' + uid ).push({
                fishType: fishType,
                fishWeight: fishWeight,
                fishLength: fishLength,
                fisher: currentFisher,
                // photoUri: imageData.uri,
                loggedBy: loggedBy,
                weatherData: weather
            }).key
          
        } 
      
        else if(currentFisher === 'Dan'){
            uid= "Hv3Ql8pSaBfV27hZzCfRnlbRfKx2"
            // if(uid != loggedByUid) console.log('FYI- different Fisher!')   
            dataKey= firebase.database().ref('users/' + uid ).push({
                fishType: fishType,
                fishWeight: fishWeight,
                fishLength: fishLength,
                fisher: currentFisher,      
                // photoUri: imageData.uri,
                loggedBy: loggedBy,
                weatherData: weather
            }).key                
        } 

       Alert.alert("submission successful")
       
       if (image != null) {  
            uploadImage(image, dataKey)
            firebase.database().ref('users/' + uid + '/' + dataKey).update({
                photoUri: dataKey
            })
        }
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
                <Button onPress={submitFish}>Submit Fish</Button> 
            )      
        })
    })

  
    useEffect(() => {
        if(Platform.OS === 'android'){
        const backAction = () => { 
            if(route.name === 'Replace'){
                   navigation.pop()
                    return true;
            } else{return false}
        }

        const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);

        return () => backHandler.remove();
         }
    }, []);
    
                return(
                    <SafeAreaView style={styles.screenContainer}>    
                        <Text style={styles.title}>Add a Fish to the Well!</Text>  
                        {/* <View style={styles.centerContainer}>     */}
                        <View style={styles.pickerContainer}>  
                                <Text>Fish to Add: </Text>      
                                <TextInput 
                                    style={styles.input}
                                    placeholder="Type Here"
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
                            {/* </View> */}
                        </View>
                        <PicTaker image={image} setImage={setImage}/>             
                        </SafeAreaView>
                )
    }
