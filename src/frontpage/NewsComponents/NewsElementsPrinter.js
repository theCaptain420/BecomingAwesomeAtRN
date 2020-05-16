import { View, Text, ScrollView,TouchableOpacity, Linking } from "react-native"
import React from 'react';
import styles from './newsStyle'
import getNewSiteUrlToShow from './getNewsSiteUrlToShow'
import AppFooter from '../../themeComponents/AppFooter'
import { Icon } from 'react-native-elements'


export default (props) => {
    return(
        <ScrollView style={{height:"100%"}}>
            {props.items.map(item => {
                return(
                    <TouchableOpacity key={item.id} style={styles.newsBackground} onPress={()=>{Linking.openURL(item.url)}}>
                        <Text style={styles.newsElementTitle}>
                            {item.title}
                        </Text>

                        <Icon name="arrow-forward" style={{alignSelf:"flex-end",marginHorizontal:20}}/>

                        <Text style={styles.newsDescText}>
                            Article on: {getNewSiteUrlToShow(item.url)}
                        </Text>
                        
                        <View style={styles.newsSeperatorLine}/>
                    </TouchableOpacity>
                )
            })}
            <AppFooter/>
        </ScrollView>
    )
}