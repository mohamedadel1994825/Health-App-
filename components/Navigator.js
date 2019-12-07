import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import React, { Component } from 'react'
import Splash from './screens/Splash';
import App from '../App';

export default class Navigator extends Component {
    constructor(props){
        super(props);
        this.state = {
            timePassed: false,
        };
    }
    
    componentDidMount() {
        setTimeout( () => {
            this.setTimePassed();
        },1000);
    }
    
    setTimePassed() {
        this.setState({timePassed: true});
    }
    
    render() {
        if (!this.state.timePassed) {
            return <Splash/>;
        } else {
            return <App/>;
        }
    }
}

