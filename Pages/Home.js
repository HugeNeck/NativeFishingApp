import React, {useState} from 'react';
import {View, StyleSheet, Text, Button, Image} from 'react-native';
import { ScreenContainer } from 'react-native-screens';
import Header from '../Global/Header';
import fishIcon from '../assets/fishIcon.jpg'

const Home = (props) => {
    
    const [currentFisher, setCurrentFisher] = useState('None Picked')

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
        <View style={styles.screenContainer}>
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

const styles = StyleSheet.create({
    screenContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: 'center',
      padding: 16
    },
    space: {
        height: 10, 
        width: 10
    },
    image: {
        height: 100,
        width: 160,
    }
})

export default Home