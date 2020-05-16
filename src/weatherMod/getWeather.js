import { LOADING_WEATHER_DATA,SUCCESS_WEATHER_LOADING_DATA,FAILED_WEATHER_LOADING_DATA } from './wRedux/wTypes'

export default async function getAppWeather(){

    try{
        let responseTemp = await fetch("https://www.metaweather.com/api/location/554890/")
            .then(resp => resp.json())
            .then(respJson => roundTemperature(respJson.consolidated_weather[0].the_temp))
        return [SUCCESS_WEATHER_LOADING_DATA, responseTemp]
    }catch(err){
        console.log(err)
        return [FAILED_WEATHER_LOADING_DATA,err]
    }

}

function roundTemperature(temperature){
    let roundedTemperature = Math.round(temperature);
    return roundedTemperature;
}