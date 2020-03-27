import { View, Text } from "react-native"
import React from 'react';
import { useSelector } from 'react-redux'
import styles from './frontPageStyle';
import NewsElementsPrinter from './NewsComponents/NewsElementsPrinter'


export default () => {
    const articleList = useSelector(state => state.data)

    return (
        <View style={styles.background}>
            <Text style={styles.mainHeader}>
                Hacker News
            </Text>
            <View style={[styles.seperatorLine, { width: "95%", }]}></View>
            <NewsElementsPrinter items={articleList} />
        </View>
    )
}