import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text, FlatList, View, BackHandler, Platform} from 'react-native';
import Header from '../Global/Header';
import styles from '../assets/styles'
import CatchItem from '../Global/CatchItem'

// import { DataTable} from 'react-native-paper';

import firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/database'
import 'firebase/auth'

export default function LiveWell({navigation, route}){
 

    const [isLoading, setisLoading] = useState(true)

    const combinedArray = []
    const [detailsArray, setdetailsArray] = useState()

    useEffect( () => {
      let userId = firebase.auth().currentUser.uid; 
      firebase.database().ref('/users/' + userId).once("value")
        .then(function(snapshot){
            let fishObject  = snapshot.val()       
                for (let fish in fishObject){
                     combinedArray.push(fishObject[fish])
                }
            setdetailsArray(combinedArray)
            setisLoading(false)
            }, function (error) {
                console.log('error:' + error)
            }
        )
    },[])

    // var ref = firebase.database().ref("users");
    // var query = ref.orderByChild("database/username").equalTo("some_data");
    // query.once("value", function(snapshot) {
    // snapshot.forEach(function(child) {
    //     console.log(child.key, child.val().bio);
    // });
    // });
 
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
    {isLoading === true ? <Text style={{flex: 1, fontSize: 20, fontWeight: 'bold', color: 'white'}}>Loading</Text>:
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

