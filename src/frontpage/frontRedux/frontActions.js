import {LOADING_DATA, SUCCESS_LOADING_DATA, FAILED_LOADING_DATA} from './frontTypes'
export const gotTheData = (data) => {
    return {
        data: data,
        type: SUCCESS_LOADING_DATA
    }
}

export const loadingTheData = () => {
    return {
        type: LOADING_DATA
    }
}

export const loadingTheData = (error) => {
    return {
        errorMessage: error,
        type: FAILED_LOADING_DATA
    }
}
