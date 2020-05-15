import { View, Text,TouchableOpacity } from "react-native"
import React from 'react';
import styles from './NavigationPageStyle'
import AppStatusBar from '../themeComponents/AppStatusBar'
import WeatherView from './../weatherMod/WeatherView'
import { Icon } from 'react-native-elements'

export default ({ navigation }) => {
  return (
    <View style={styles.navBackground}>
      <AppStatusBar />

      <TouchableOpacity onPress={() => navigation.navigate('Instagram')} style={styles.navElement}>
        <Text  style={styles.navText} >
          Instagram
        </Text>
        <Icon name="photo" color="white"/>    
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('HackerNews')} style={styles.navElement}>
        <Text  style={styles.navText}>
          HackerNews
        </Text>
        <Icon name="business" color="white"/>    
      </TouchableOpacity>
      <WeatherView />


    </View>
  )
}