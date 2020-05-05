import { View, Text } from "react-native"
import React,{useEffect} from 'react';
import styles from './WeatherViewStyle'
import { useDispatch, useSelector } from 'react-redux'
import getAppWeather from './getWeather'

export default ({navigation}) => {
    const dispatch = useDispatch();
    const temperature = useSelector(state => state.weather.temperature);


    useEffect(()=>{
        setAppWeather();
    })

    const setAppWeather=()=>{
        getAppWeather().then((data)=>{
            dispatch({type:data[0],temperature:data[1]})
        })
    }


    return (
          <View style={styles.navBackground}>
            <Text>
                The weather today is {temperature} degrees
            </Text>
          </View>
    )
}