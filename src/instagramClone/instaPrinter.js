import { ScrollView } from "react-native"
import React from 'react';
import InstaElement from './InstaElement'
import AppFooter from '../themeComponents/AppFooter'

export default (props) => {
    return(
        <ScrollView style={{height:"100%"}}>
            {props.items.map(item => {
                return(
                    <InstaElement key={item.postID} fullName={item.fullName} shortName={item.shortName} pfpColor={item.pfpColor} imageURI={item.imageURI}/>
                )
            })}
            <AppFooter/>
        </ScrollView>
    )
}
