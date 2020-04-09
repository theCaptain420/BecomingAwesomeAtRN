import { useDispatch, useSelector } from 'react-redux'
import React, {useEffect} from 'react';
import { View } from 'react-native';
import WhatToShow from './WhatToShow'
import getAppData from './logic/getAppData'

export default () => {
    const dispatch = useDispatch();

    //useEffect = runs on state change
    useEffect(()=>{
        setAppData()
    })

    const setAppData=()=>{        
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

