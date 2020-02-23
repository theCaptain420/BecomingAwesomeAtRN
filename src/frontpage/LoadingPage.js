import { useDispatch, useSelector } from 'react-redux'
import React from 'react';
import { View, Text } from 'react-native';
import { LOADING_DATA, SUCCESS_LOADING_DATA, FAILED_LOADING_DATA } from './frontRedux/frontTypes'
import WhatToShow from './WhatToShow'

export default () => {
    const dispatch = useDispatch();
    const appState = useSelector(state => state.loadingState);

    

    return (
        <View>
            <WhatToShow />
        </View>
    )
}

