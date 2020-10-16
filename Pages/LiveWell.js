import React, {useEffect, useState, useContext} from 'react';
import {SafeAreaView, Text, FlatList, View, BackHandler, Platform} from 'react-native';
import Header from '../Global/Header';
import styles from '../assets/styles'
import CatchItem from '../Global/CatchItem'
import { Button } from 'react-native-paper';

import {CurrentFisherContext} from '../Global/CurrentFisher'

import firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/database'
import 'firebase/auth'

export default function LiveWell({navigation, route}){
 
    const [state, setState] = useState('Please Choose')

    const [isLoading, setisLoading] = useState(true)
    const [currentFisher, setCurrentFisher] = useContext(CurrentFisherContext);
    const combinedArray = []
    const [detailsArray, setdetailsArray] = useState()

    
    useEffect( ()=> {
        setisLoading(true)
        setState('Please Choose')
    }, [currentFisher])

    async function myCatches() {
        setisLoading(true)
        setState('Loading')
      let userId = firebase.auth().currentUser.uid; 
      firebase.database().ref('/users/' + userId).orderByChild('fishType').once("value")
        .then(function(snapshot){
                snapshot.forEach( (child) => {
                    combinedArray.push({
                        key: child.key,
                        ...child.val()
                    })
                })   
                // for (let fish in fishObject){
                //      combinedArray.push(fishObject[fish])
                // }
            setdetailsArray(combinedArray)
            setisLoading(false)
            console.log(detailsArray)
            }, function (error) {
                console.log('error:' + error)
            }
        )
    }

        async function byFisher(){
            setisLoading(true)
            setState('Loading')
            let userId;
            if(currentFisher === 'Joel'){
                userId = "u7FOtTJGasMlqIclUFNHuT0uCF72"
            }else if(currentFisher === 'Justin'){
                userId = "euaOW4QZR1V5LsvRqXgF2A51Cam1"
            }else if(currentFisher === 'Fez'){
                userId = "nH32Rcx6CugwwtcI5V5ggrszQOH3"
            }else  if(currentFisher === 'Dan'){
                userId = "Hv3Ql8pSaBfV27hZzCfRnlbRfKx2"
            }
            // let userId = firebase.auth().currentUser.uid; 
            await firebase.database().ref('/users/' + userId).orderByChild('fishType').once("value")
            .then(function(snapshot){
                    snapshot.forEach( (child) => {
                        combinedArray.push({
                            key: child.key,
                            ...child.val()
                        })
                    })   
                    // for (let fish in fishObject){
                    //      combinedArray.push(fishObject[fish])
                    // }
                setdetailsArray(combinedArray)
                setisLoading(false)
                }, function (error) {
                    console.log('error:' + error)
                }
            )
        }

      async function byFish(){
        setisLoading(true)
        setState('Loading')
        // let userId = firebase.auth().currentUser.uid; 
        await firebase.database().ref('users').orderByChild('fishLength').once("value")
        .then(function(snapshot){
                snapshot.forEach( person => {
                    person.forEach( fish => {
                        combinedArray.push({
                            key: fish.key,
                            ...fish.val()})
                    })
                })
                // let fishObject = snapshot.val()
                // for (let fish in fishObject){
                //      combinedArray.push(fishObject[fish])
                // }
            setdetailsArray(combinedArray)
            console.log(detailsArray)
            setisLoading(false)
            }, function (error) {
                console.log('error:' + error)
            }
        )
  }
 
    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: () => (
                <Header path={ () => navigation.navigate("ChooseFisher")} />
            ) 
        })
    })

    if(Platform.OS === 'android'){
    useEffect(() => {
        const backAction = () => { 
            if(route.name === 'LiveWell'){
                   navigation.pop()
                    return true;
            } else{return false}
        }

        const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);

        return () => backHandler.remove();
      }, []);
    }

    // const populateList = ({item}) =>  (
    //     <Text> {item} </Text>
    //     )

    return(
    <SafeAreaView style={styles.screenContainer}> 
    <Text style={styles.title}>5 Biggest Fish Each!</Text>
    <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}> 
    <Button onPress={myCatches}> Mine </Button>
    <Button onPress={byFisher}> Current </Button>
    <Button onPress={byFish}> LeaderBoard! </Button>
    </View>
    {isLoading === true ? <Text style={{flex: 1, fontSize: 20, fontWeight: 'bold', color: 'white'}}>{state}</Text>:
    <View style={styles.LiveWellContainer}> 
    {/* {detailsArray.map( (item) => 
                <CatchItem value={item} key= {item.photoUri}/>
               )
    } */}
    <FlatList data = {detailsArray} renderItem={(item) => <CatchItem value={item.item} />}
    keyExtractor={(item, index) => index.toString()} horizontal/>

    {/* <View style={styles.centerContainer}> 
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
      </View> */}
  
    </View>
    }
    <View style={{flex:1}} />
     </SafeAreaView>
    )
}

