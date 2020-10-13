import React, {useEffect, useState} from 'react';
import { Text, FlatList, View, BackHandler} from 'react-native';
import Header from '../Global/Header';
import styles from '../assets/styles'

// import { DataTable} from 'react-native-paper';

import firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/database'
import 'firebase/auth'

export default function LiveWell({navigation, route}){
 
    // const [fishArray, setFishArray] = useState([])
    const [isLoading, setisLoading] = useState(true)
    const [fishLengthDetails, setFishLengthDetails] = useState([])
    const fishLengthArray= []
    const [fishWeightDetails, setFishWeighthDetails] = useState([])
    const fishWeightArray=[]
    const [fishTypeDetails, setFishTypeDetails] = useState([])
    const fishTypeArray=[]
    const [fisherDetails, setFisherDetails] = useState([])
    const fisherArray=[]
    const photoUriArray = []

    useEffect( () => {
      let userId = firebase.auth().currentUser.uid; 
      firebase.database().ref('/users/' + userId).once("value")
        .then(function(snapshot){
            let fishObject = snapshot.val()
                for (let fish in fishObject){
                    fishLengthArray.push(fishObject[fish].fishLength)
                    fishTypeArray.push(fishObject[fish].fishType)
                    fishWeightArray.push(fishObject[fish].fishWeight)
                    fisherArray.push(fishObject[fish].fisher)
                    photoUriArray.push(fishObject[fish].photoUri)
                }
            setFishLengthDetails(fishLengthArray)
            setFishTypeDetails(fishTypeArray)
            setFishWeighthDetails(fishWeightArray)
            setFisherDetails(fisherArray)
            setisLoading(false)
            }, function (error) {
                console.log('error:' + error)
            }
        )
    },[])
 
    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: () => (
                <Header path={ () => navigation.navigate("ChooseFisher")} />
            ) 
        })
    })

  
    useEffect(() => {
        const backAction = () => { 
            console.log(route.name)
            if(route.name === 'LiveWell'){
                   navigation.pop()
                    return true;
            } else{return false}
        }

        const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);

        return () => backHandler.remove();
      }, []);

    return(
    <View style={styles.screenContainer}> 
    <Text style={styles.title}>5 Biggest Fish Each!</Text>
    {isLoading === true ? <Text style={{flex: 1, fontSize: 20, fontWeight: 'bold', color: 'white'}}>Loading</Text>:
    <View style={styles.pickerContainer}> 
    {/* <FlatList data = {fishLengthDetails} renderItem={item => <Text>{item.item}</Text>}
    keyExtractor={(item, index) => index.toString()}/> */}
    <View style={styles.centerContainer}> 
    {fishLengthDetails.map( item => 
        <View><Text>{item}</Text></View>  
    )}
    </View>
    <View style={{flex: 2}}> 
    {fishTypeDetails.map( item => 
        <View><Text>{item}</Text></View>  
    )}
       </View>
       <View style={styles.centerContainer}> 
    {fishWeightDetails.map( item => 
        <View><Text>{item}</Text></View>  
    )}
      </View>
      <View style={styles.centerContainer}> 
    {fisherDetails.map( item => 
        <View><Text>{item}</Text></View>     
    )}
      </View>
    </View>
    }
     </View>
    )
}

