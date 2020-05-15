import { View, Text } from "react-native"
import React,{useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import getAppWeather from './getWeather'

import { Icon } from 'react-native-elements'


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
          <View >
            <Text style={{color:"darkgray",padding:10}}>
                The weather today is {temperature} degrees
            </Text>
            <Icon name="cloud" color="darkgray"></Icon>
          </View>
    )
}