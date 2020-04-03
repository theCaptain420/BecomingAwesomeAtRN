import { View, Text } from "react-native"
import React from 'react';
import InstaUser from './InstaUser'

export default (props) => {

    return(
        <View style={{flex:1}}>
            <InstaUser fullName="Johnny Hansen" shortName="JH" pfpColor="red" pfpSize={35}/>
           
        </View>
    )
}