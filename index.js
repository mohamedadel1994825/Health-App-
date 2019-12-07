import React, { Component } from 'react'
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import { Width, Height, MyColors } from './components/consts';
import App from './App'
import store from './store'
import { Provider } from 'react-redux'
import Navigator from './components/Navigator';
const RNRedux = () => (
    <Provider store={store}>
        <Navigator />
    </Provider>)
AppRegistry.registerComponent(appName, () => RNRedux);
export {
    Width,
    Height,
    MyColors
}