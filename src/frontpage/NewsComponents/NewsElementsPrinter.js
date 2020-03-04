import { View, Text } from "react-native"
import React from 'react';
import styles from './newsStyle'


export default (props) => {
    return(
        <View >
            {props.items.map(item => {
                return(
                    <View key={item.id}>
                        <Text style={styles.newsElementTitle}>
                            {item.title}
                        </Text>
                        <View style={styles.seperatorLine}/>
                    </View>
                )
            })}
        </View>
    )
}