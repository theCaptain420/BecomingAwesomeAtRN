import { LOADING_WEATHER_DATA,SUCCESS_WEATHER_LOADING_DATA,FAILED_WEATHER_LOADING_DATA } from './wTypes'

export const gotTheWeatherData = (data) => {
    return {
        data: data,
        type: SUCCESS_WEATHER_LOADING_DATA
    }
}

export const loadingTheWeatherData = () => {
    return {
        type: LOADING_WEATHER_DATA
    }
}

export const failedLoadingTheWeatherData = (error) => {
    return {
        errorMessage: error,
        type: FAILED_WEATHER_LOADING_DATA
    }
}
