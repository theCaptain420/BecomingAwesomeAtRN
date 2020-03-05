import { View, Text, ScrollView } from "react-native"
import React from 'react';
import styles from './newsStyle'


export default (props) => {
    return(
        <ScrollView style={{height:"100%"}}>
            {props.items.map(item => {
                return(
                    <View key={item.id} style={styles.newsBackground}>
                        <Text style={styles.newsElementTitle}>
                            {item.title}
                        </Text>
                        <View style={styles.newsSeperatorLine}/>
                    </View>
                )
            })}
        </ScrollView>
    )
}