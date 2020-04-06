import { View, Text } from "react-native"
import React from 'react';
import InstaUser from './InstaUser'
import InstaPicture from './InstaPicture'

export default (props) => {
    return(
        <View style={{flex:1, flexDirection:"column"}}>
            <InstaUser fullName={props.fullName} shortName={props.shortName} pfpColor={props.pfpColor} pfpSize={35}/>
            <InstaPicture imageURI={props.imageURI}/>
        </View>
    )
}