import React, { Component } from 'react';

import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Header from '../Header';

export default class OnlineConsultation extends Component {

  static navigationOptions =
    {
      header: null
    };

  render() {

    return (

      <View style={styles.MainContainer}>
  <Header title={'Online Consultation'}
          backTitle={'Home'}
          onPress={() => { this.props.navigation.goBack() }}
        />
        <Text style={{ marginTop: 40, fontSize: 20 }}>Online Consultation Screen</Text>

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
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#f5fcff',
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