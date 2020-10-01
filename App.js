import 'react-native-gesture-handler'
import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native';
import { Provider} from 'react-native-paper';
import React, {useState} from 'react'
import { StyleSheet, View, Image } from 'react-native'
import Header from './Global/Header'
import Home from './Pages/Home'
import LiveWell from './Pages/LiveWell'
import ChooseFisher from'./Pages/ChooseFisher'

  const App = () => {

    const Stack = createStackNavigator();

    return(
    <Provider>
    <NavigationContainer>
      <Stack.Navigator initialRouteName = "Home">
        {/* <Stack.Screen name="Header" component={Header} /> */}
        <Stack.Screen 
            name="Home"
            component={Home} 
            // options={{ title: 
            //     <Header currentFisher={currentFisher} setFisher={handleFisherChange}/>}}  
            />
        <Stack.Screen 
            name="LiveWell"
            component={LiveWell} 
            // options={{ title: 
            //     <Header currentFisher={currentFisher} setFisher={handleFisherChange}/>}} 
            />
        <Stack.Screen
            name="ChooseFisher"
            component={ChooseFisher} 
            // options={{ title: 
            //    <Header currentFisher={currentFisher} setFisher={handleFisherChange}/>}}
             />
        <Stack.Screen
            name="Header"
            component={Header} 
             />   
      </Stack.Navigator>  
    </NavigationContainer>
    </Provider>
    )}
   
    // const styles = StyleSheet.create({
    //   container: {
    //     flex: 1,
    //     backgroundColor: '#416e33',
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //   },
    //   image:{
    //     height: 100,
    //     width: 100
    //   }
    // })

  

export default App