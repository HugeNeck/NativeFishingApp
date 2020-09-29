import React from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';

import LiveWellData from '../assets/LiveWellData'

export default function LiveWell(){
    return(
    <FlatList data= {LiveWellData}
        renderItem = { ({item}) => {
            return <Text>{item.fishType}</Text>
        }}
    />
)
}
