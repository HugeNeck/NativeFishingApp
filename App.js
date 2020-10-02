import 'react-native-gesture-handler'
import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer, DarkTheme as NavigationDarkTheme,DefaultTheme as NavigationDefaultTheme,} from '@react-navigation/native';
import {DarkTheme as PaperDarkTheme, DefaultTheme as PaperDefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import React, {useState} from 'react'
import { StyleSheet, View, Image } from 'react-native'
import Header from './Global/Header'
import Home from './Pages/Home'
import LiveWell from './Pages/LiveWell'
import ChooseFisher from'./Pages/ChooseFisher'
import Replace from './Pages/Replace'


const combinedDarkTheme = {
  ...PaperDarkTheme,
  ...NavigationDarkTheme,
  colors: {
    ...PaperDarkTheme.colors,
    ...NavigationDarkTheme.colors,
  },
};

const combinedDefaultTheme = {
  ...PaperDefaultTheme,
  ...NavigationDefaultTheme,
  colors: {
    ...PaperDefaultTheme.colors,
    ...NavigationDefaultTheme.colors,
    background: '#416e33'
  },
};

  const Stack = createStackNavigator();


  const App = () => {

   
    return(
    <PaperProvider theme={combinedDefaultTheme}>
      <NavigationContainer theme = {combinedDefaultTheme}>
        <Stack.Navigator initialRouteName = "Home">
          <Stack.Screen 
              name="Home"
              component={Home} 
              options={{ title: 
                  'test'}
              } 
              />
          <Stack.Screen 
              name="LiveWell"
              component={LiveWell} 
              />
          <Stack.Screen
              name="ChooseFisher"
              component={ChooseFisher}
              />
          <Stack.Screen
              name="Replace"
              component={Replace}
              />
          {/* <Stack.Screen
              name="Header"
              component={Header} 
              />    */}
        </Stack.Navigator>  
      </NavigationContainer>
     </PaperProvider>
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

