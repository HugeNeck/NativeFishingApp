import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

export default function Header(props) {

    return(
        <View>
        <Text>Current Fisher: {props.fisher}</Text>
        <Text onChange={props.handleFisherChange}>Input Here</Text>
        </View>
    )

}