import { View, Text } from "react-native"
import React from 'react';
import InstaPFP from './InstaPFP'

export default (props) => {
    const styles={
        instaUserElement: {
            flexDirection: "row", 
            margin:10
        },
        instaUserName:{
            paddingHorizontal:5, padding:5, justifyContent:"center", alignItems:"center",
            height:props.pfpSize
        },
        instaUserText:{ fontSize: props.pfpSize/2, textAlign:"center", fontWeight:"bold" }
    }


    return (
        <View style={styles.instaUserElement}>
            <InstaPFP shortName={props.shortName} color={props.pfpColor} size={props.pfpSize} />
            <View style={styles.instaUserName}>
                <Text style={styles.instaUserText}>{props.fullName}</Text>
            </View>
        </View>
    )
}