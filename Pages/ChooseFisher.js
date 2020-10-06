import React, { useContext } from 'react';
import { StyleSheet, TextInput, View} from 'react-native';

import {CurrentFisherContext} from '../assets/CurrentFisher'

const ChooseFisher = () => {

    const [currentFisher, setFisher] = useContext(CurrentFisherContext);

    return (
        <View>
            <TextInput style = {styles.textStyle}
            defaultValue={currentFisher}
            onChangeText={setFisher}/>
        </View>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        color:"red"
    }
})

export default ChooseFisher