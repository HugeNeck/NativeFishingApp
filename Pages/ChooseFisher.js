import React, { useContext } from 'react';
import {Text, View} from 'react-native';
import { RadioButton } from 'react-native-paper';

import {CurrentFisherContext} from '../assets/CurrentFisher'


const ChooseFisher = () => {

    const [checked, setChecked] = useContext(CurrentFisherContext);

    return (
       <View>
        <Text>Change Fisher: </Text>
        <Text> Joel: </Text>
       <RadioButton
       value="Joel"
       status={ checked === 'Joel' ? 'checked' : 'unchecked' }
       onPress={() => setChecked('Joel')}
       />
        <Text> Dan: </Text>
       <RadioButton
        value="Dan"
        status={ checked === 'Dan' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('Justin')}
       />
       </View>
    )
}

export default ChooseFisher