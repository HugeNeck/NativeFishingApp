import 'react-native-gesture-handler'
import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer, 
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme} from '@react-navigation/native';
import {DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperDefaultTheme,
  Provider as PaperProvider} from 'react-native-paper';

import React from 'react'
// import {enableScreens} from 'react-native-screens'

import Header from './Global/Header';
import Login from './Pages/Login';
import { CurrentFisherProvider } from './assets/CurrentFisher';
import Home from './Pages/Home'
import LiveWell from './Pages/LiveWell'
import ChooseFisher from'./Pages/ChooseFisher'
import Replace from './Pages/Replace'
import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/database'
import 'firebase/auth'

  // Set the configuration for your app
  // TODO: Replace with your project's config object
  var config = {
    apiKey: "AIzaSyAof-ZK4ea9TXcP_5zmVWD1ZMJSvrR8mHw",
    authDomain: "fishingapp-36472.firebaseapp.com",
    databaseURL: "https://fishingapp-36472.firebaseio.com",
    storageBucket: "gs://fishingapp-36472.appspot.com",
    projectId: "fishingapp-36472"
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

  const Stack = createStackNavigator();
  // enableScreens();

  const App = () => {

    return(
    <PaperProvider theme={combinedDefaultTheme}>
      <NavigationContainer theme = {combinedDefaultTheme}>
        <CurrentFisherProvider>
        <Stack.Navigator initialRouteName = "Login">
        <Stack.Screen 
              name="Login"
              component={Login} 
              // options={({ navigation, route }) => ({
              //   headerTitle: props => <Header {...props} />,
              // })}
              />
          <Stack.Screen 
              name="Home"
              component={Home} 
              // options={({ navigation, route }) => ({
              //   headerTitle: props => <Header {...props} />,
              // })}
              />
          <Stack.Screen 
              name="LiveWell"
              component={LiveWell} 
              // options={{
              //   headerTitle: props => <Header {...props} />
              //   }}
              />
          <Stack.Screen
              name="ChooseFisher"
              component={ChooseFisher}
              // options={{
              //   headerTitle: props => <Header {...props} />
              //   }}
              />
          <Stack.Screen
              name="Replace"
              component={Replace}
              // options={{
              //   headerTitle: props => <Header {...props} />
              //   }}
              />
          {/* <Stack.Screen
              name="Header"
              component={Header} 
              />    */}
        </Stack.Navigator>  
        </CurrentFisherProvider>
      </NavigationContainer>
     </PaperProvider>
    )}

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
}

export default App