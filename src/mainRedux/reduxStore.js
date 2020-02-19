import {welcomeReducer} from './../frontpage/frontRedux/frontReducers';
import {createStore} from 'redux'

export default function configureStore(){
    let store = createStore(
        welcomeReducer
    )
    return store;
}
