import { View, Text } from "react-native"
import React from 'react';
import InstaUser from './InstaUser'
import InstaPicture from './InstaPicture'

export default (props) => {

    return(
        <View style={{flex:1, flexDirection:"column"}}>
            <InstaUser fullName="Johnny Hansen" shortName="JH" pfpColor="red" pfpSize={35}/>
            <InstaPicture imageURI="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"/>
        </View>
    )
}