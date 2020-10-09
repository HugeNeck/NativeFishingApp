import React, { useContext } from 'react';
import {Text, TouchableOpacity, View} from 'react-native';


import {CurrentFisherContext} from '../assets/CurrentFisher'


export default function Header(props) {

    const [currentFisher, setCurrentFisher] = useContext(CurrentFisherContext);

    return(

       

        <View>
            <TouchableOpacity onPress={props.path}>
            <Text>
                Current Fisher: {currentFisher}
            </Text> 
            </TouchableOpacity>     
        </View>
    )
}
