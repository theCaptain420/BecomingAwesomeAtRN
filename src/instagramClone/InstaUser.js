import { View, Text } from "react-native"
import React from 'react';
import InstaPFP from './InstaPFP'

export default (props) => {
    return (
        <View style={{ flexDirection: "row", margin:10 }}>
            <InstaPFP shortName={props.shortName} color={props.pfpColor} size={props.pfpSize} />
            <View style={{ paddingHorizontal:5, padding:5, justifyContent:"center", alignItems:"center",
            height:props.pfpSize}}>
                <Text style={{ fontSize: props.pfpSize/2, textAlign:"center", fontWeight:"bold" }}>{props.fullName}</Text>
            </View>
        </View>
    )
}