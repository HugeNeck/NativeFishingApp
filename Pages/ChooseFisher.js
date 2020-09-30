import React from 'react';
import { StyleSheet, Button, TextInput, View} from 'react-native';


const ChooseFisher = (props) => {
    return (
        <View>
            <TextInput style = {styles.textStyle}
            defaultValue = "ADD FISHER"
            value=  {props.fisher}/>    
        </View>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        color:"red"
    }
})

export default ChooseFisher