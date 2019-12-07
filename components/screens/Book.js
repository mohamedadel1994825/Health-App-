import React, { Component } from 'react';
import { Icon } from 'react-native-elements'
import { View, Text, StyleSheet, Image, TextInput, FlatList } from 'react-native';
import { Width, Height, MyColors } from '../../index';
import BookCard from '../BookCard';
export default class Book extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: '',
      data: [{
        name: 'Chatbot', details: 'Continue chating with me',
        image: require('../../assets/chatbot.png')
      },
      {
        name: 'Visit a clinic', details: 'Book an appointment',
        image: require('../../assets/nurse.png')
      },
      {
        name: 'Online Conultation', details: 'Chat with our doctors online',
        image: require('../../assets/chat.png')
      },
      {
        name: 'House calls', details: 'Book House Visits',
        image: require('../../assets/call.png')
      },

      ]
    }
  }


  screenNavigate = (name) => {
    switch (name) {
      case 'Chatbot':
        this.props.navigation.navigate('Chatbot')
        break;
      case 'Visit a clinic':
        this.props.navigation.navigate('appointmentBook')
        break;
      case 'Online Conultation':
        this.props.navigation.navigate('OnlineConsultation')
        break;
      case 'House calls':
        this.props.navigation.navigate('ClinicVisit')
        break;
      default:
        break;
    }
  }
  static navigationOptions =
    {
      // //  title: 'Book',
      // header: null
      header: null

    }
  onChangeText = (status) => {
    this.setState({ status })
  }
  render() {
    const notifiIcon = <Icon
      name='notifications'
      type='Ionicons'
      color={MyColors.tabActiveColor}
      size={33}
    />
    const sunnyIcon = <Icon
      name='sun'
      type='feather'
      color={MyColors.sunColor}
      size={40}
    />
    const smileIcon = <Image
      source={require('../../assets/smile.png')}
      style={{
        width: 20, height: 20, borderRadius: 16,
        backgroundColor: MyColors.notification
      }} />
    return (

      <View style={styles.container}>
        <View style={styles.notification}>
          <View style={styles.notificationIcon}>
            {notifiIcon}
          </View>
          <View style={styles.morningView}>
            <View style={styles.sunnyIcon}>
              {sunnyIcon}
            </View>
            <View style={styles.morningTextView}>
              <Text style={styles.morningText}>Good Morning Janvis,
      </Text>
              <Text style={styles.morningText}>Im Your Medical Arm and im always
      </Text>
              <View style={styles.morningSmileView}>
                {smileIcon}
                <Text style={styles.textSmile}>happy to help</Text>
              </View>

            </View>
          </View>
          <View style={styles.feelingAsk}>
            <TextInput style={styles.statusInput}
              underlineColorAndroid= 'rgba(0,0,0,0)'
              placeholder="What do you feel today, Jarvis?"
              placeholderTextColor={MyColors.gray1}
              // selectionColor="#fff"
              onChangeText={this.onChangeText} />
          </View>
        </View>
        <View style={styles.statusQuestion}>
          <Text style={styles.statusText} >WHAT CAN I DO FOR YOU?
      </Text>
        </View>
        <View style={styles.bookList}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={this.state.data}
            extraData={this.state.data}
            renderItem={({ item, index }) =>
              <BookCard
                name={item.name}
                details={item.details}
                iconPath={item.image}
                onPress={
                  //   () => {
                  //   item.name == 'House calls' ? 
                  //   this.props.navigation.navigate('ClinicVisit') : null
                  // }
                  () => {
                    this.screenNavigate(item.name)

                  }
                }
              />
            }
            keyExtractor={({ item, index }) => index + ''}
          />
        </View>

      </View>

    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  notificationIcon: {
    width: Width * .96, height: Width * .08,
    flexDirection: 'row',
    justifyContent: 'flex-start', alignItems: 'center'
  },
  sunnyIcon: {
    width: Width * .12, height: Width * .12,
    flexDirection: 'row',
    justifyContent: 'flex-start', alignItems: 'flex-start',
    marginBottom: Width * .1
  },
  morningView: {
    width: Width * .9, height: Width * .23,
    flexDirection: 'row',
    justifyContent: 'center', alignItems: 'center'
  },
  morningTextView: {
    justifyContent: 'center',
    alignItems: 'flex-end', width: '87%', height: '100%',

  },
  morningText: {
    color: MyColors.uperTextMorning,
    fontSize: 17,
    fontWeight: '500',
  },

  morningSmileView: {
    color: MyColors.whiteColor, width: '46%',
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
    fontSize: 17,
    fontWeight: '500',
    textAlign: 'right',
  },
  textSmile: {
    color: MyColors.uperTextMorning,
    fontSize: 17,
    fontWeight: '500',

  },
  feelingAsk: {
    width: Width * .9, height: Width * .14,
    flexDirection: 'row',
    justifyContent: 'flex-end', alignItems: 'flex-start'
  },
  notification: {
    width: Width, height: Width * .58,
    backgroundColor: MyColors.notification,
    justifyContent: 'space-around', alignItems: 'center'
  },
  statusQuestion: {
    width: Width * .9, height: Width * .1,
    backgroundColor: MyColors.whiteColor, flexDirection: 'row',
    justifyContent: 'flex-end', alignItems: 'center'
  },
  statusText: {
    color: MyColors.tabActiveColor,
    fontSize: 17,
    fontWeight: '500',
  },

  bookList: {
    width: Width, height: Width * .9,

    justifyContent: 'space-evenly', alignItems: 'center'
  },
  statusInput: {
    width: '100%', height: '100%',
    backgroundColor: MyColors.whiteColor,
    borderRadius: Width * .01,
    fontSize: 16,
    color: '#002f6c',
    borderColor: MyColors.gray1,
    borderWidth: Width * .002, padding: 10,
  },
});