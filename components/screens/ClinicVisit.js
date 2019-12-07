import React, { Component } from 'react';
import { Width, Height, MyColors } from '../../index';
import { Icon } from 'react-native-elements'
import {
  View, StyleSheet, Text, TouchableOpacity,
  TextInput, KeyboardAvoidingView, Platform, ScrollView
} from 'react-native';
import Header from '../Header';
import SpecialityCard from '../SpecialityCard';
import { connect } from 'react-redux';
import { setSpecialityState } from '../actions/usersActions';
class ClinicVisit extends Component {

  static navigationOptions = {
    header: null,
    tabBarVisible: false,
  }
  constructor(props) {
    super(props);
    this.state = {
      pressed: false,
      status: '',
    }
  }
  onChangeText = (status) => {
    this.setState({ status })
  }
  render() {
    const { onPress, iconPath, btnWidth, btnHeight, MarginLeft, name, pressed } = this.props
    const sunnyIcon = <Icon
      name='search'
      type='feather'
      color={MyColors.specialityColor}
      size={25}
    />
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : null}
        keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}>
        <ScrollView>
          <View style={styles.MainContainer}>
            <Header title={'Clinic Visit'}
              backTitle={'Home'}
              onPress={() => { this.props.navigation.goBack() }}
            />

            <View style={styles.container}>
              <View style={styles.specialityParentContainer}>
                <View style={styles.SpecialityView}>
                  <Text style={styles.SpecialityText}>Speciality</Text>
                </View>
                <View style={styles.specialityCardParent}>
                  <SpecialityCard
                    name={'Dermantology'}
                    btnWidth={Width * .5}
                    btnHeight={Width * .11}
                    MarginLeft={Width * .02}
                    iconPath={require('../../assets/Dermantology.png')}
                    onPress={() => {
                      this.props.setSpecialityState(true)
                    }}
                  />
                  <SpecialityCard
                    name={'Dentistry'}
                    btnWidth={Width * .38}
                    btnHeight={Width * .11}
                    MarginLeft={Width * .02}
                    iconPath={require('../../assets/dentistry.png')}
                    onPress={() => {
                      this.props.setSpecialityState(true)
                    }}
                  />
                </View>
                <View style={styles.specialityCardParent}>
                  <SpecialityCard
                    name={'Heart Surgey'}
                    btnWidth={Width * .48}
                    btnHeight={Width * .11}
                    iconPath={require('../../assets/heart.png')}
                    onPress={() => {
                      this.props.setSpecialityState(true)
                    }}
                  />
                  <SpecialityCard
                    name={'phsychaitry'}
                    btnWidth={Width * .4}
                    btnHeight={Width * .11}
                    MarginLeft={Width * .02}
                    iconPath={require('../../assets/dentistry.png')}
                    onPress={() => {
                      this.props.setSpecialityState(true)
                    }}

                  />
                </View>
                <View style={styles.specialityCardParent}>
                  <SpecialityCard
                    name={'Chest and Respiratory'}
                    btnWidth={Width * .75}
                    btnHeight={Width * .11}
                    iconPath={require('../../assets/Dermantology.png')}
                    onPress={() => {
                      this.props.setSpecialityState(true)
                    }}
                  />
                </View>
                <View style={styles.specialityCardParent}>
                  <SpecialityCard
                    name={'Orthopedics'}
                    btnWidth={Width * .48}
                    btnHeight={Width * .11}
                    iconPath={require('../../assets/Orthopedics.png')}
                    onPress={() => {
                      this.props.setSpecialityState(true)
                    }}
                  />
                  <SpecialityCard
                    name={'Heptology'}
                    btnWidth={Width * .4}
                    btnHeight={Width * .11}
                    MarginLeft={Width * .02}
                    iconPath={require('../../assets/heart.png')}
                    onPress={() => {
                      this.props.setSpecialityState(true)
                    }}
                  />
                </View>
                <View style={styles.bookContainer}>
                  <TouchableOpacity activeOpacity={.9} style={styles.bookBtn}>
                    <Text style={styles.bookBtnText}>Book Now</Text>
                  </TouchableOpacity>
                  <View style={styles.txtView}>
                    <Text style={styles.textUp}>You dont know the spaciality yet?</Text>
                    <Text style={styles.textDown}>use online consulation now</Text>
                  </View>

                </View>
                <View style={styles.SpecialityView}>
                  <Text style={styles.SpecialityText}>Location</Text>
                </View>

              </View>

              <View style={styles.parentLocationView}>
                <View style={styles.locationView}>


                  <TextInput style={styles.statusInput}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder="Search by location"
                    placeholderTextColor={MyColors.gray1}
                    selectionColor={MyColors.blackColor}
                    onChangeText={this.onChangeText} />
                  <View style={styles.iconSearch}>
                    {sunnyIcon}
                  </View>
                </View>
               
              </View>
              <TouchableOpacity
              activeOpacity={.9}
              style={styles.btnResult}>
                  <Text style={styles.bookBtnText}>Show Results (32)</Text>
                </TouchableOpacity>
            </View>





          </View>
        </ScrollView>
      </KeyboardAvoidingView>



    );
  }
}
const mapStateToProps = state => ({
  SpecialityState: state.users.SpecialityState,
});
export default connect(
  mapStateToProps,
  { setSpecialityState }
)(ClinicVisit);
const styles = StyleSheet.create({

  MainContainer: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: MyColors.whiteColor,

  },
  container: {
    width: Width * .9,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: MyColors.whiteColor,
  },
  SpecialityView: {
    width: '100%', height: Width * .15,
    justifyContent: 'center', alignItems: 'flex-end',
  },
  SpecialityText: {
    color: MyColors.specialityColor,
    fontSize: 18,
  },
  specialityCardParent: {
    width: '100%', height: Width * .13,
    backgroundColor: MyColors.whiteColor, flexDirection: 'row',
    justifyContent: 'flex-end', alignItems: 'center'
  },
  specialityParentContainer: {
    width: '100%',
    backgroundColor: MyColors.whiteColor, height: Width,
    justifyContent: 'flex-start', alignItems: 'flex-start'
  },
  bookContainer: {
    width: Width * .9, height: Width * .2,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: MyColors.bookContainer, flexDirection: 'row'
  },
  txtView: {
    width: Width * .7, height: '100%',
    justifyContent: 'center', alignItems: 'center'
  },
  textUp: {
    color: MyColors.specialityColor,
    fontSize: 14,
    fontWeight: '500',

  },
  textDown: {
    color: MyColors.gray1,
    fontSize: 13,
    fontWeight: '500',
    marginLeft: Width * .13

  },
  bookBtn: {
    width: Width * .25, height: Width * .1,
    justifyContent: 'center', borderRadius: Width * .15,
    alignItems: 'center',
    backgroundColor: MyColors.tabActiveColor, flexDirection: 'row'
  }
  ,
  bookBtnText: {
    color: MyColors.whiteColor,
    fontSize: 14,
    fontWeight: '500',
  },

  searchInput: {
    width: '60%', height: '100%',
    fontSize: 15,
    color: '#002f6c'
  },
  parentLocationView: {
    width: Width * .9, height: Width * .15,
    flexDirection: 'row',
    justifyContent: 'center', alignItems: 'center',
  },
  locationView: {
    width: Width * .85, height: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between', alignItems: 'center',
    borderRadius: Width * .5,
    borderWidth: Width * .006, borderColor: MyColors.gray1
  },
  statusInput: {
    width: '70%', height: '85%',
    borderRadius: Width * .01,
    fontSize: 16,
    color: '#002f6c', marginHorizontal: 15,
  },
  iconSearch: {
    width: '20%', height: '85%', justifyContent: 'center', alignItems: 'center'
  },
  btnResult: {
    width: '100%', height: Width * .15,
    justifyContent: 'center', alignItems: 'center',
    backgroundColor: MyColors.btnResult, borderRadius: Width * .02,
     borderColor: MyColors.btnResult,marginTop:Width*.2,
  }
});