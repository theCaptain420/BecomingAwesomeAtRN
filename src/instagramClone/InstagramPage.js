import { View, Text } from "react-native"
import React from 'react';
import InstaElement from './InstaElement'
import AppHeader from '../themeComponents/AppHeader'

export default ({navigation}) => {

    return (
        <View>
            <AppHeader title="Instagram"/>
            <InstaElement/>
        </View>
    )
}