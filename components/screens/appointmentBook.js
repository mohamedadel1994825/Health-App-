import React, { Component } from 'react';

import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

export default class appointmentBook extends Component {

  static navigationOptions =
    {
      title: 'Clinic Visit',
      header: null

    };

  render() {

    return (

      <View style={styles.MainContainer}>

        <Text style={{ marginTop: 40, fontSize: 20 }}>appointmen tBook Screen</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate('Book')}>

          <Text style={styles.text}>Go to Book Tab</Text>

        </TouchableOpacity>

        

       

      </View>

    );
  }
}
const styles = StyleSheet.create({

  MainContainer: {

    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5fcff',
    padding: 11

  },

  button: {
    alignItems: 'center',
    backgroundColor: '#43A047',
    padding: 12,
    width: 280,
    marginTop: 12,
  },

  text: {

    color: '#fff'
  }

});