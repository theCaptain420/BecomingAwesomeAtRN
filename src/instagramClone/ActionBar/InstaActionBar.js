import { View, Text, StyleSheet } from "react-native"
import React from 'react';


export default () => {
    return(
        <View >
            <Text style={styles.mainFooter}>
                Comments
            </Text>
        </View>
    )
}
const styles = StyleSheet.create({
    mainFooter: {
        alignSelf:"flex-end",
        color:"#595959",
        fontWeight:"bold",
        fontSize:10,
        margin:10
    }
})