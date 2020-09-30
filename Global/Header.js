import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import fishIcon from '../assets/fishIcon.jpg'

export default function Header(props) {

    return(
        <View>    
        <TouchableOpacity onPress={()=>props.setFisher("JOEL")}>
            <Text>
                Current Fisher: {props.currentFisher}
            </Text>
        </TouchableOpacity>       
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        height:100,
        width: 100
    }
})