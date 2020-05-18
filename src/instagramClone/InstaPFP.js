import { View, Text, StyleSheet } from "react-native"
import React from 'react';

export default (props) => {

    const styles = StyleSheet.create({
        circleBackground:{
            padding:5,
            borderRadius:props.size/2,
            width:props.size,
            height:props.size,
            justifyContent: 'center',
            alignItems:"center",
            justifyContent:"center"
        },
        pfpText:{
            fontWeight:"bold",
            color:"white",
            fontSize:props.size/3
        }
    })

    return(
        <View style={[styles.circleBackground,{backgroundColor:props.color}]}>
            <Text style={styles.pfpText} >
                {props.shortName}
            </Text>
        </View>
    )
}

