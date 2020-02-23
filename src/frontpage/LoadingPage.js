import { useDispatch, useSelector } from 'react-redux'
import React, {useEffect} from 'react';
import { View, Text } from 'react-native';
import { LOADING_DATA, SUCCESS_LOADING_DATA, FAILED_LOADING_DATA } from './frontRedux/frontTypes'
import WhatToShow from './WhatToShow'
import getAppData from './logic/getAppData'

export default () => {
    const dispatch = useDispatch();
    const appState = useSelector(state => state.loadingState);

    useEffect(()=>{
    })

    const randomFunc=()=>{
        const tsm = getAppData();
        useDispatch({type:tsm[0],data:tsm[1]})
    }


    return (
        <View>
            <Text onPress={()=> randomFunc()}>Load me data</Text>
            <WhatToShow />
        </View>
    )
}

