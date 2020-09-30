import 'react-native-gesture-handler'
import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native';
import React, {useState} from 'react'
import { StyleSheet, Text, Image } from 'react-native'


import Home from './Pages/Home'
import LiveWell from './Pages/LiveWell'
import ChooseFisher from'./Pages/ChooseFisher'

  const App = () => {

    const Stack = createStackNavigator();

    return(
    <NavigationContainer style={styles.container}>
     <Stack.Navigator initialRouteName="Home">
       {/* <Stack.Screen name="Header" component={Header} /> */}
       <Stack.Screen name="Home" component={Home} />
       <Stack.Screen name="LiveWell" component={LiveWell} />
       <Stack.Screen name="ChooseFisher" component={ChooseFisher} />
      </Stack.Navigator>  
    </NavigationContainer>
    )}
   
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#416e33',
        alignItems: 'center',
        justifyContent: 'center',
      },
      image:{
        height: 100,
        width: 100
      }
    });

export default App