import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import fishIcon from './assets/fishIcon.jpg'
import Header from './Global/Header'
import LiveWell from './Pages/LiveWell'

export default function App() {

  const [currentFisher, setCurrentFisher] = useState('None Picked')

  function handleFisherChange(e){
    setCurrentFisher(e.target.value)
  }

  return (
    <View style={styles.container}>
      <Header fisher = {currentFisher} setFisher = {handleFisherChange}/>
      <Image style = {styles.image}  source= {fishIcon}></Image>
      <LiveWell/>
      <StatusBar style="auto" />
    </View>
  );
}

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
