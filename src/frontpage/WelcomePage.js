import { View, Text } from "react-native"
import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import styles from './frontPageStyle';


export default () => {
    const dispatch = useDispatch()
    const articleList = useSelector(state => state.data)

    return(
        <View style={styles.background}>
            <Text style={styles.mainHeader}>
                Awesome APP  
                TSM {articleList[0].by}
            </Text>
            <View style={[styles.seperatorLine,{width: "95%",}]}></View>
        </View>
    )
}