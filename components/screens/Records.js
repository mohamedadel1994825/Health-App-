import React, { Component } from 'react';

import { View, Text } from 'react-native';

export default class Records extends Component {

  static navigationOptions =
    {
      header: null
    };

  render() {

    return (

      <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}>

        <Header title={'Records'}
        />
      </View>

    );
  }
}