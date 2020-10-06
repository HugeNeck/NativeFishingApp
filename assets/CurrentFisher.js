import React, {useState, createContext} from 'react';

export const CurrentFisherContext = createContext();

export const CurrentFisherProvider = props => {
    const [currentFisher, setCurrentFisher] = useState( 'None Picked')

    return(
        <CurrentFisherContext.Provider value = {[currentFisher, setCurrentFisher]}>
            {props.children}
        </CurrentFisherContext.Provider>
    )
}