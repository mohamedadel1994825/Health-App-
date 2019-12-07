import React, { Component } from 'react';

import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

export default class Home extends Component {

  static navigationOptions =
    {
      header: null
    };

  render() {
    return (
      <View style={styles.MainContainer}>
        <Header title={'Home'}
        />

      </View>

    );
  }
}

const styles = StyleSheet.create({

  MainContainer: {

    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#f5fcff',

  },

});