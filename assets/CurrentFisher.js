import React, {useState, createContext, useEffect} from 'react';

import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'


export const CurrentFisherContext = createContext();

export const CurrentFisherProvider = props => {
    
    const [currentFisher, setCurrentFisher] = useState( 'none picked')

    useEffect( () => {
        let unsubscribe= firebase.auth().onAuthStateChanged( (user) => {
            if(user){
                if(user.uid === "u7FOtTJGasMlqIclUFNHuT0uCF72"){
                    // firebase.auth().currentUser.updateProfile({displayName: 'Joel'})
                    setCurrentFisher('Joel')
                }
                else if(user.uid === "euaOW4QZR1V5LsvRqXgF2A51Cam1"){
                    // firebase.auth().currentUser.updateProfile({displayName: 'Justin'})
                    setCurrentFisher('Justin')
                }
                else if(user.uid === "nH32Rcx6CugwwtcI5V5ggrszQOH3"){
                    // firebase.auth().currentUser.updateProfile({displayName: 'Fez'})
                    setCurrentFisher('Fez')
                }
                else if(user.uid === "Hv3Ql8pSaBfV27hZzCfRnlbRfKx2"){
                    // firebase.auth().currentUser.updateProfile({displayName: 'Dan'})
                    setCurrentFisher('Dan')
                }
                else("nickname not found")
            }
            else {
        console.log("SOMETHING WENT WRONG")
            } 
        }) 
        return () => unsubscribe()
    },[])

    return(
        <CurrentFisherContext.Provider value = {[currentFisher, setCurrentFisher]}>
            {props.children}
        </CurrentFisherContext.Provider>
    )
}