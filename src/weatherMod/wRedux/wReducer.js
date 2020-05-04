import { LOADING_WEATHER_DATA,SUCCESS_WEATHER_LOADING_DATA,FAILED_WEATHER_LOADING_DATA } from './wTypes'

const initialState = {
    temperature: [],
    errorMessage: "no errors",
    loadingState: LOADING_WEATHER_DATA
}

export const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOADING_WEATHER_DATA:
            return {
                ...state,
                loadingState: LOADING_WEATHER_DATA
            }
        case SUCCESS_WEATHER_LOADING_DATA:
            return {
                ...state,
                loadingState: SUCCESS_WEATHER_LOADING_DATA,
                data: action.temperature
            }
        case FAILED_WEATHER_LOADING_DATA:
            return {
                ...state,
                loadingState: FAILED_WEATHER_LOADING_DATA,
                errorMessage: action.errorMessage
            }
        default:
            return state
    }

}