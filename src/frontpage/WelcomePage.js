import { View, Text } from "react-native"
import React from 'react';
import { useDispatch } from 'react-redux'

import { LOADING_DATA, SUCCESS_LOADING_DATA, FAILED_LOADING_DATA }  from './frontRedux/frontTypes'

export default () => {
    const dispatch = useDispatch()
    return(
        <View>
            <Text onPress={()=>dispatch({type:LOADING_DATA})}>
                TSM
            </Text>
        </View>
    )
}