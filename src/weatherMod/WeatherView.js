import { View, Text } from "react-native"
import React,{useEffect} from 'react';
import styles from './WeatherViewStyle'
import { useDispatch, useSelector } from 'react-redux'
import getAppWeather from './getWeather'

export default ({navigation}) => {

    useEffect(()=>{
        setAppWeather();
    })

    const setAppWeather=()=>{
        getAppWeather()
    }


    return (
          <View style={styles.navBackground}>
            <Text>
                The weather today
            </Text>
          </View>
    )
}