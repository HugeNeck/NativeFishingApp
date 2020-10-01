import React from 'react';
import { StyleSheet, Text, FlatList } from 'react-native';

import LiveWellData from '../assets/LiveWellData'

export default function LiveWell(){
    return(
    <FlatList
        keyExtractor= {fish => fish.id.toString()}
        data= {LiveWellData}
        renderItem = { ({item}) => {
        return <Text>{item.fishType}</Text>
        }}
    />
    )
}

