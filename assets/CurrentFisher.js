import React, {useState, createContext} from 'react';

import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'


export const CurrentFisherContext = createContext();

   
export const CurrentFisherProvider = props => {

    const [currentFisher, setCurrentFisher] = useState( 'none picked')

    firebase.auth().onAuthStateChanged(function(user) {
        if(user){
            if(user.uid === "nH32Rcx6CugwwtcI5V5ggrszQOH3"){
                firebase.auth().currentUser.updateProfile({displayName: "Joel"})
                setCurrentFisher(user.displayName)
            }
            else if(user.uid === "euaOW4QZR1V5LsvRqXgF2A51Cam1"){
            firebase.auth().currentUser.updateProfile({displayName: "Justin"})
            setCurrentFisher(user.displayName)
            }
        }
        else {
       console.log("SOMETHING WENT WRONG")
    }
    });
    

    return(
        <CurrentFisherContext.Provider value = {[currentFisher, setCurrentFisher]}>
            {props.children}
        </CurrentFisherContext.Provider>
    )
}