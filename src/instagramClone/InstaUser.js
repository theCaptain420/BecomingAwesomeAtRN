import { View, Text } from "react-native"
import React from 'react';
import InstaPFP from './InstaPFP'

export default (props) => {

    return (
        <View style={{ flexDirection: "row", margin:10, justifyContent:"space-between" }}>
            <InstaPFP shortName={props.shortName} color={props.pfpColor} size={props.pfpSize} />
            <View style={{ paddingHorizontal:10, padding:5, justifyContent:"center", alignItems:"center",
            height:35}}>
                <Text style={{ fontSize: 20, textAlign:"center" }}>{props.fullName}</Text>
            </View>
        </View>
    )
}