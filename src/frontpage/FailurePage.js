import { View, Text } from "react-native"
import React from 'react';
import { useDispatch, useSelector } from 'react-redux'


export default () => {
    const errorMessage = useSelector(state => state.welcome.errorMessage)

    return(
        <View>
            <Text>
                Sadly the application failed getting the data due to: - {errorMessage.toString()} -
            </Text>
        </View>
    )
}