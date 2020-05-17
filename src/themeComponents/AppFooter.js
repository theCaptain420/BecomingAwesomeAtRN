import { View, Text, StyleSheet } from "react-native"
import React from 'react';


export default (props) => {
    return(
        <View >
            <Text style={styles.mainFooter}>
                Made by @theCaptain420
            </Text>
        </View>
    )
}
const styles = StyleSheet.create({
    mainFooter: {
        alignSelf:"center",
        color:"#595959",
        fontWeight:"bold",
        fontSize:10,
        margin:10,
        color:"darkgray"
    },
    backgroundFooter:{
        backgroundColor:"lightgrey",
        borderTopLeftRadius:5,
        borderTopRightRadius:5
    }
})