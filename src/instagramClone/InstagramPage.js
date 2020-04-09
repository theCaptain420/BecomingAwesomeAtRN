import { View, StyleSheet } from "react-native"
import React from 'react';
import InstaPrinter from './instaPrinter'
import AppHeader from '../themeComponents/AppHeader'

export default ({navigation}) => {
    const instaPosts=[
        {fullName:"John Johnson", shortName:"JJ", pfpColor:"red", imageURI:"https://unsplash.it/id/641/600/600", postID:"1234"},
        {fullName:"Lenny Denny", shortName:"LD", pfpColor:"green", imageURI:"https://unsplash.it/600/600", postID:"456"},
        {fullName:"Diana Svendson", shortName:"DS", pfpColor:"blue", imageURI:"https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg", postID:"852"}
    ]

    return (
        <View style={styles.background}>
            <AppHeader title="InstaPage"/>
            <InstaPrinter items={instaPosts}/>
        </View>
    )
}

const styles = StyleSheet.create({
    background: {
        backgroundColor:"#F7F7F7",
        justifyContent: "space-evenly"
    }
})