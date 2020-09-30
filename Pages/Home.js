import React, {useState} from 'react';
import {View, Text} from 'react-native';
import Header from '../Global/Header'

const Home = (props) => {
    
  const [currentFisher, setCurrentFisher] = useState('None Picked')

  function handleFisherChange(e){
      setCurrentFisher(e)
  }

    return (
        <View>
        <Header currentFisher={currentFisher} setFisher={handleFisherChange}/>
        <Text>Welcome To the LiveWell App!</Text>  
        </View>   
    )
}


export default Home