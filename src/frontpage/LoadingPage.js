import { useDispatch, useSelector } from 'react-redux'
import React, {useEffect} from 'react';
import { View, Text } from 'react-native';
import { LOADING_DATA, SUCCESS_LOADING_DATA, FAILED_LOADING_DATA } from './frontRedux/frontTypes'
import WhatToShow from './WhatToShow'
import getAppData from './logic/getAppData'

export default () => {
    const dispatch = useDispatch();
    const appState = useSelector(state => state.loadingState);

    //on state change
    useEffect(()=>{
        randomFunc()
    })

    const randomFunc=()=>{        
        getAppData().then((state)=> {
            dispatch({type:state[0], data:state[1]})
        })
    }


    return (
        <View>
            <WhatToShow />
        </View>
    )
}

