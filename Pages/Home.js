import React, {useState} from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';
import { ScreenContainer } from 'react-native-screens';
import Header from '../Global/Header'

const Home = (props) => {
    
    const [currentFisher, setCurrentFisher] = useState('None Picked')

    // function handleFisherChange(e){
    //     setCurrentFisher(e)
    // }
  
    return (
        <ScreenContainer>
        <Header
        navigation = {props.navigation}
        // chooseFisher={() => props.navigation.navigate("ChooseFisher",{
        //     currentFisher: currentFisher,
        //     setFisher: setCurrentFisher
        // })}
        currentFisher={currentFisher}
        setFisher={setCurrentFisher}/>
        <Text>Welcome To the LiveWell App!</Text>  
        <Button
        title="Go to LiveWell"
        onPress={()=> props.navigation.navigate("LiveWell")} />
        </ScreenContainer>   
    )
}

export default Home