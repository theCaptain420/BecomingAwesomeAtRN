import { View, StyleSheet } from "react-native"
import React from 'react';
import InstaPrinter from './instaPrinter'
import AppHeader from '../themeComponents/AppHeader'

export default () => {
    const instaPosts=[
        {fullName:"John Johnson", shortName:"JJ", pfpColor:"red", imageURI:"https://unsplash.it/id/646/600/600", postID:"1234",comments:[{comment:"tsm"},{comment:"clg"}]},
        {fullName:"Lenny Denny", shortName:"LD", pfpColor:"green", imageURI:"https://unsplash.it/600/600", postID:"456",comments:[{comment:"skrrt"},{comment:"clg"}]},
        {fullName:"Diana Svendson", shortName:"DS", pfpColor:"blue", imageURI:"https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg", postID:"852",comments:[{comment:"lol"},{comment:"clg"}]}
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
        backgroundColor:"white",
        justifyContent: "space-evenly"
    }
})