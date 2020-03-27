import { View, Text } from "react-native"
import React from 'react';


export default ({navigation}) => {

    return (
        <View>
            <Text onPress={() => navigation.navigate('HackerNews')}>
                Instagram
            </Text>
        </View>
    )
}