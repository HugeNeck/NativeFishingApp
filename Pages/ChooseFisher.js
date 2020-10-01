import React from 'react';
import { StyleSheet, TextInput, View} from 'react-native';

const ChooseFisher = ({route}) => {
    const {currentFisher} = route.params
    const {setFisher} = route.params

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