import { View, Text } from "react-native"
import React from 'react';
import { useDispatch, useSelector } from 'react-redux'

import { LOADING_DATA, SUCCESS_LOADING_DATA, FAILED_LOADING_DATA }  from './frontRedux/frontTypes'

import getAppData from './logic/getAppData'

export default () => {
    const dispatch = useDispatch()
    const datamessage = useSelector(state => state.data)

    return(
        <View>
            <Text onPress={()=>getAppData()}>
                TSM {datamessage}
            </Text>
        </View>
    )
}