import React, {useState, useEffect, useLayoutEffect} from 'react';
import {View, Text, Button, Image, Dimensions} from 'react-native';
// import { ScreenContainer } from 'react-native-screens';
import Header from '../Global/Header';
import fishIcon from '../assets/fishIcon.jpg'
import styles from '../assets/styles'


// import {CurrentFisherContext} from '../assets/CurrentFisher'

const Home = ({navigation}) => {
    
    // const [currentFisher, setCurrentFisher] = useContext(CurrentFisherContext)

    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: () => (
                <Header path={ () => navigation.navigate("ChooseFisher")} />
            ) 
        })
    })

    const [weatherData, setWeatherData] = useState('Loading')

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
    // const {height, width} = Dimensions.get('window')

    return (
        <View style={styles.screenContainer}>
        <Text style={styles.title}>Welcome To the LiveWell App!</Text> 
            <View style={styles.centerContainer} >
            <Image style={styles.image} source = {fishIcon} title="That's a Beauty"/>
            </View>
            <View style={styles.screenContainer} >
            <Button
                title="Go to LiveWell"
                onPress={()=> navigation.navigate("LiveWell")} />
            <View style={styles.space} />
            <Button
                title="Replace Fish in Well"
                onPress={()=> navigation.navigate("Replace")} />  
            </View>   
            <View style={styles.weatherContainer} >  
        <Text style={styles.weather}>Current Weather: {weatherData}</Text>     
        </View>
        </View>
    )
}

export default Home