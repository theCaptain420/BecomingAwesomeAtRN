import { View, Text,TouchableOpacity } from "react-native"
import React from 'react';
import styles from './NavigationPageStyle'
import AppStatusBar from '../themeComponents/AppStatusBar'
import WeatherView from './../weatherMod/WeatherView'

export default ({ navigation }) => {
  return (
    <View style={styles.navBackground}>
      <AppStatusBar />

      <TouchableOpacity onPress={() => navigation.navigate('Instagram')} style={styles.navElement}>
        <Text  style={styles.navText} >
          Instagram
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('HackerNews')} style={styles.navElement}>
        <Text  style={styles.navText}>
          HackerNews
        </Text>
      </TouchableOpacity>
      <WeatherView />


    </View>
  )
}