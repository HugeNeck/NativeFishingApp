import React, {useState} from 'react';
import {View, StyleSheet, Text, Button, Image} from 'react-native';
import { ScreenContainer } from 'react-native-screens';
import Header from '../Global/Header';
import fishIcon from '../assets/fishIcon.jpg'
import styles from '../assets/styles'

const Home = (props) => {
    
    const [currentFisher, setCurrentFisher] = useState('None Picked')

    return (
        <ScreenContainer style={styles.screenContainer}>
        <Header   
        navigation = {props.navigation}
        // chooseFisher={() => props.navigation.navigate("ChooseFisher",{
        //     currentFisher: currentFisher,
        //     setFisher: setCurrentFisher
        // })}
        currentFisher={currentFisher}
        setFisher={setCurrentFisher}/>
        <Text style={styles.text}>Welcome To the LiveWell App!</Text>  
        <View >
        <Image style={styles.image} source = {fishIcon} title="That's a Beauty"/>
        <View style={styles.space} />
        <Button
            title="Go to LiveWell"
            onPress={()=> props.navigation.navigate("LiveWell")} />
        <View style={styles.space} />
        <Button
            title="Replace Fish in Well"
            onPress={()=> props.navigation.navigate("Replace")} />
       </View>   
        </ScreenContainer>   
    )
}

export default Home