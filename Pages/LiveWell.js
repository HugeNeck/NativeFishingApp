import React from 'react';
import { Text, FlatList, View } from 'react-native';
import Header from '../Global/Header';
import styles from '../assets/styles'

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
    <View style={styles.screenContainer}> 
    <Text style={styles.title}>5 Biggest Fish Each!</Text> 
        <FlatList
            keyExtractor= {fish => fish.id.toString()}
            data= {LiveWellData}
            renderItem = { ({item}) => {
            return <Text>{item.fishType}</Text>
            }}
        />
     </View>
    )
}

