import React, {useState, useEffect, useContext, useLayoutEffect } from 'react';
import {Image,Text, View, BackHandler} from 'react-native';
import { RadioButton } from 'react-native-paper';
import Header from '../Global/Header'
import styles from '../assets/styles'

import Dan from '../assets/Dan.jpg'
import Fez from '../assets/Fez.jpg'
import Justin from '../assets/Justin.jpg'
import Joel from '../assets/Joel.jpg'

import {CurrentFisherContext} from '../Global/CurrentFisher'

// import firebase from 'firebase/app'
// import 'firebase/database'
// import 'firebase/auth'


const ChooseFisher = ({navigation, route}) => {

    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: () => (
                <Header/>
            ) 
        })
    })


    const [currentFisher, setCurrentFisher] = useContext(CurrentFisherContext)

    let startFisher
    if (currentFisher === 'Joel'){
        startFisher = Joel
    }
    else if (currentFisher === 'Justin'){
        startFisher = Justin
    }
    else if (currentFisher === 'Fez'){
        startFisher = Fez
    }
    else if  (currentFisher === 'Dan'){
        startFisher = Dan
    }

    const [image, setImage] = useState(startFisher)

    const updateFisher = (value) => {
        setCurrentFisher(value)
        if(value ==='Dan')
        setImage(Dan)
        else if(value==='Joel')
        setImage(Joel)
        else if(value==='Fez')
        setImage(Fez)
        else if(value==='Justin')
        setImage(Justin)
    }


    useEffect(() => {
        const backAction = () => { 
            if(route.name === 'ChooseFisher'){
                   navigation.pop()
                    return true;
            } else{return false}
        }

        const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);

        return () => backHandler.remove();
      }, []);

    return (
       <View style={styles.screenContainer}>
        <Text>Change Fisher: </Text>
        <View style={styles.pickerContainer}>
        <Text> Joel: </Text> 
       <RadioButton.Group onValueChange={value => updateFisher(value)} value={currentFisher}>   
       <RadioButton
            value="Joel"
            status={ currentFisher === 'Joel' ? 'checked' : 'unchecked' }
        />
        <Text> Dan: </Text>
       <RadioButton
            value="Dan"
            status={ currentFisher === 'Dan' ? 'checked' : 'unchecked' }
        />
        <Text> Fez: </Text>
        <RadioButton
            value="Fez"
            status={ currentFisher === 'Fez' ? 'checked' : 'unchecked' }
        />
        <Text> Justin: </Text>
        <RadioButton
            value="Justin"
            status={ currentFisher === 'Justin' ? 'checked' : 'unchecked' }
       />    
       </RadioButton.Group>
       </View>
       <Image style={{flex:1, alignSelf: "center"}} title = "fisher" source = {image}/>
       </View>
    )
}

export default ChooseFisher