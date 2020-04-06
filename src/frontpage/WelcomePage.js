import { View, Text } from "react-native"
import React from 'react';
import { useSelector } from 'react-redux'
import styles from './frontPageStyle';
import NewsElementsPrinter from './NewsComponents/NewsElementsPrinter'
import AppHeader from '../themeComponents/AppHeader'

export default () => {
    const articleList = useSelector(state => state.data)

    return (
        <View style={styles.background}>
            <AppHeader title="Hacker News"/>
            <NewsElementsPrinter items={articleList} />
        </View>
    )
}