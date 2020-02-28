import { LOADING_DATA, SUCCESS_LOADING_DATA, FAILED_LOADING_DATA } from './frontTypes'

const initialState = {
    data: [],
    errorMessage: "no errors",
    loadingState: LOADING_DATA
}

export const welcomeReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOADING_DATA:
            return {
                ...state,
                loadingState: LOADING_DATA
            }
        case SUCCESS_LOADING_DATA:
            return {
                ...state,
                loadingState: SUCCESS_LOADING_DATA,
                data: action.data
            }
        case FAILED_LOADING_DATA:
            return {
                ...state,
                loadingState: FAILED_LOADING_DATA,
                errorMessage: action.data
            }
        default:
            return state
    }

}