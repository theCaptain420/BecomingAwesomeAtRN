import { View, Text, StyleSheet } from "react-native"
import React from 'react';


export default (props) => {
    return(
        <View >
            <Text style={styles.mainHeader}>
                {props.title}
            </Text>
            <View style={styles.seperatorLine}></View>
        </View>
    )
}
const styles = StyleSheet.create({
    mainHeader: {
        alignSelf:"center",
        color:"#595959",
        fontWeight:"bold",
        fontSize:26,
        margin:10
    },
    seperatorLine: {
        backgroundColor:"lightgrey",
        height:1,
        width: "90%",
        alignSelf:"center"
    }
})