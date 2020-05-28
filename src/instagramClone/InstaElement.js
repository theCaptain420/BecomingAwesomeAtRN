import { View, Text } from "react-native"
import React from 'react';
import InstaUser from './InstaUser'
import InstaPicture from './InstaPicture'
import InstaActionBar from './ActionBar/InstaActionBar'

export default (props) => {    
    return(
        <View style={{flex:1, flexDirection:"column"}}>
            <InstaUser fullName={props.fullName} shortName={props.shortName} pfpColor={props.pfpColor} pfpSize={20}/>
            <InstaPicture imageURI={props.imageURI}/>
            <InstaActionBar comments={props.comments}/>
            <View></View>
        </View>
    )
}
