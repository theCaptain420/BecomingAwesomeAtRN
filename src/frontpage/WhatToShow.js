import { LOADING_DATA, SUCCESS_LOADING_DATA, FAILED_LOADING_DATA } from './frontRedux/frontTypes'
import WelcomePage from './WelcomePage';
import FailurePage from './FailurePage';
import { View, Text } from "react-native"
import React from 'react';
import { useDispatch, useSelector } from 'react-redux'


export default () => {
    const appState = useSelector(state => state.loadingState);


    if (appState == LOADING_DATA) {
        return (
            <Text>
                Loading....
            </Text>
        )
    } else if (appState == SUCCESS_LOADING_DATA) {
        return (
            <WelcomePage />
        )
    } else {
        return (
            <FailurePage />
        )
    }

}