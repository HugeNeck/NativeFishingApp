import React from 'react';
import { StyleSheet, Text, FlatList, Button } from 'react-native';
import Header from '../Global/Header';

// import { DataTable} from 'react-native-paper';
import LiveWellData from '../assets/LiveWellData'

export default function LiveWell({navigation}){

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: () => (
                <Header path={ () => navigation.navigate("ChooseFisher")} />
            ) 
        })
    })
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

