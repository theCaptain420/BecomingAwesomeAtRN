import { View, Text, ScrollView } from "react-native"
import React from 'react';
import styles from './newsStyle'
import getNewSiteUrlToShow from './getNewsSiteUrlToShow'

export default (props) => {
    return(
        <ScrollView style={{height:"100%"}}>
            {props.items.map(item => {
                return(
                    <View key={item.id} style={styles.newsBackground}>
                        <Text style={styles.newsElementTitle}>
                            {item.title}
                        </Text>

                        <Text>
                            Article on: {getNewSiteUrlToShow("tsm")}
                        </Text>

                        <View style={styles.newsSeperatorLine}/>
                    </View>
                )
            })}
        </ScrollView>
    )
}