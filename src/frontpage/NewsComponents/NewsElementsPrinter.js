import { View, Text, ScrollView } from "react-native"
import React from 'react';
import styles from './newsStyle'
import getNewSiteUrlToShow from './getNewsSiteUrlToShow'
import AppFooter from '../../themeComponents/AppFooter'

export default (props) => {
    return(
        <ScrollView style={{height:"100%"}}>
            {props.items.map(item => {
                return(
                    <View key={item.id} style={styles.newsBackground}>
                        <Text style={styles.newsElementTitle}>
                            {item.title}
                        </Text>

                        <Text style={styles.newsDescText}>
                            Article on: {getNewSiteUrlToShow(item.url)}
                        </Text>

                        <View style={styles.newsSeperatorLine}/>
                    </View>
                )
            })}
            <AppFooter/>
        </ScrollView>
    )
}