import React, {useContext, useLayoutEffect} from 'react';
import {View, StyleSheet, Text, Button, Image} from 'react-native';
// import { ScreenContainer } from 'react-native-screens';
import Header from '../Global/Header';
import fishIcon from '../assets/fishIcon.jpg'
import styles from '../assets/styles'

// import {CurrentFisherContext} from '../assets/CurrentFisher'

const Home = ({navigation}) => {
    
    // const [currentFisher, setCurrentFisher] = useContext(CurrentFisherContext)

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: () => (
                <Header path={ () => navigation.navigate("ChooseFisher")} />
            ) 
        })
    })

    return (
        <View style={styles.screenContainer}>
        <Text style={styles.text}>Welcome To the LiveWell App!</Text>  
        <View >
        <Image style={styles.image} source = {fishIcon} title="That's a Beauty"/>
        <View style={styles.space} />
        <Button
            title="Go to LiveWell"
            onPress={()=> navigation.navigate("LiveWell")} />
        <View style={styles.space} />
        <Button
            title="Replace Fish in Well"
            onPress={()=> navigation.navigate("Replace")} />
       </View>   
        </View>   
    )
}

export default Home