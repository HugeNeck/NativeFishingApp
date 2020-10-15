import React, { useEffect, useState } from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import { Card, Title, Paragraph, Button } from 'react-native-paper';

import firebase from 'firebase/app'
import 'firebase/storage'

const CatchItem = ({value}) => {

    const [ref, setRef] = useState()

    useEffect( () => {
           firebase.storage().refFromURL("gs://fishingapp-36472.appspot.com/images/" + value.photoUri).getDownloadURL().then(
                (url) => setRef(url)
            )
    }, [])
    return(
        <Card  style={{marginHorizontal: 10}}>
            <Card.Title title={value.fishType} subtitle= {value.fisher} /> 
            <Card.Cover source = {{uri : ref}} />
            <Card.Content>
                <Title> Length: {value.fishLength}</Title>
                <Paragraph> Weather was: {value.weatherData}</Paragraph>
            </Card.Content>
            <Card.Actions>
                <Button>Delete Your Fish</Button>
            </Card.Actions>
        </Card>
    )
}

export default CatchItem

// https://firebasestorage.googleapis.com/v0/b/fishingapp-36472.appspot.com/o/images%2F-MJYtPFaCu-e7OBAKjHS?alt=media&token=96f002dc-7ec1-42e5-8369-f7db57039001

// gs://fishingapp-36472.appspot.com/images/-MJYtPFaCu-e7OBAKjHS