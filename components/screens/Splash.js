import { MyColors, Width, Height } from '../..';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import React, { Component } from 'react'

export default class Splash extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    static navigationOptions = {
        headerStyle: {
            backgroundColor: MyColors.blueWhite,
            elevation: 0,
            shadowOpacity: 0
        }
    };
    // componentDidMount() {
    //     setTimeout(() => {
    //         // this.props.navigation.navigate('MainScreen')
    //         this.props.navigation.navigate('Login')

    //     }, 1000);
    // }
    render() {
        return (
            <View style={
                styles.container
            } >
                <Text style={styles.splashText}>Health App </Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1, justifyContent: 'space-around',
        alignItems: 'center', backgroundColor: MyColors.tabActiveColor,
        width: Width, height: '100%'
    },
    splashText: {
        fontSize: Width * .09,
        textAlign: 'center', color: 'white', marginBottom: Width * .2
    }
});
