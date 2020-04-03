import { View, Text } from "react-native"
import React from 'react';
import InstaElement from './InstaElement'

export default ({navigation}) => {

    return (
        <View>
            <Text>
                Instagrams
            </Text>
            <InstaElement/>
        </View>
    )
}