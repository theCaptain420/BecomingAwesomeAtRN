import { View, Text } from "react-native"
import React from 'react';
import { useDispatch, useSelector } from 'react-redux'

import { LOADING_DATA, SUCCESS_LOADING_DATA, FAILED_LOADING_DATA }  from './frontRedux/frontTypes'


export default () => {
    const dispatch = useDispatch()
    const datamessage = useSelector(state => state.data)

    return(
        <View>
            <Text>
                Success page  
                TSM {datamessage[1]}
            </Text>
        </View>
    )
}