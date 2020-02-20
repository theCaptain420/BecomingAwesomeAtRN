/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import React,{ Component } from 'react';
import { Provider } from 'react-redux'

import configureStore from './src/mainRedux/reduxStore'

const store = configureStore()

class Index extends Component {
    render(){
        return (
            <Provider store={store}>
                <App/>
            </Provider>
        )
    }

}

AppRegistry.registerComponent(appName, () => Index);
