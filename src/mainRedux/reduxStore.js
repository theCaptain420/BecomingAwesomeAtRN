import {welcomeReducer} from './../frontpage/frontRedux/frontReducers';
import {weatherReducer} from './../weatherMod/wRedux/wReducer'
import {createStore, combineReducers} from 'redux'

export default function configureStore(){
    rootReducer = combineReducers({
        welcome: welcomeReducer,
        weather: weatherReducer
    })

    let store = createStore(
        rootReducer
    )
    return store;
}
