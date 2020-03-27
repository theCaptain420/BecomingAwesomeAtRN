import { View, Text } from "react-native"
import React from 'react';
import styles from './frontPageStyle';


export default () => {

    return (
        <View style={styles.background}>
            <Text style={styles.mainHeader}>
                Instagram
            </Text>
            <View style={[styles.seperatorLine, { width: "95%", }]}></View>
        </View>
    )
}