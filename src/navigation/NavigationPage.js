import { View, Text } from "react-native"
import React from 'react';
import styles from './NavigationPageStyle'
import AppStatusBar from '../themeComponents/AppStatusBar'

export default ({navigation}) => {
    return (
          <View style={styles.navBackground}>
            <AppStatusBar/>
            <Text onPress={() => navigation.navigate('Instagram')} style={styles.navHeader} >
            Instagram
            </Text>
            <Text onPress={() => navigation.navigate('HackerNews')} style={styles.navHeader}>
            HackerNews
            </Text>
          </View>
    )
}