import { LOADING_DATA, SUCCESS_LOADING_DATA, FAILED_LOADING_DATA } from './frontRedux/frontTypes'
import WelcomePage from './WelcomePage';
import FailurePage from './FailurePage';
import { Text, ActivityIndicator,View } from "react-native"
import React from 'react';
import { useSelector } from 'react-redux'

export default () => {
    const appState = useSelector(state => state.welcome.loadingState);


    if (appState == LOADING_DATA) {
        return (
            <View style={{flexDirection:"row", justifyContent:"center"}}>
                <Text>
                    Loading....
            </Text>
                <ActivityIndicator size={"small"} />
            </View>
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