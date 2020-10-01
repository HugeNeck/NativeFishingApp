import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default function Header(props) {

    return(
        <View>    
        <TouchableOpacity onPress={
            () => props.navigation.navigate("ChooseFisher",{
                currentFisher : props.currentFisher,
                setFisher: props.setFisher
            })}>
            <Text>
                Current Fisher: {props.currentFisher}
            </Text>
        </TouchableOpacity>       
        </View>
    )
}
