import { View, Text, StyleSheet, StatusBar } from "react-native"
import React from 'react';


export default (props) => {
    return (
        <View style={styles.headerBackground}>
            <StatusBar
                barStyle="dark-content"
                // dark-content, light-content and default
                hidden={false}
                //To hide statusBar
                backgroundColor="#44E5BA"
                //Background color of statusBar
                translucent={false}
                //allowing light, but not detailed shapes
                networkActivityIndicatorVisible={true}
            />

            <Text style={styles.mainHeader}>
                {props.title}
            </Text>
        </View>
    )
}
const styles = StyleSheet.create({
    mainHeader: {
        alignSelf: "center",
        color: "#595959",
        fontWeight: "bold",
        fontSize: 20,
        margin: 10,
    },
    headerBackground: {
        backgroundColor: "#66ECAD",
       
    },
    seperatorLine: {
        backgroundColor: "lightgrey",
        height: 1,
        width: "90%",
        alignSelf: "center"
    }
})