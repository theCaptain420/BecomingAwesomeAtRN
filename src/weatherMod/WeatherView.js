import { View, Text } from "react-native"
import React from 'react';
import styles from './WeatherViewStyle'

export default ({navigation}) => {

    

    return (
          <View style={styles.navBackground}>
            <Text>
                The weather today
            </Text>
          </View>
    )
}