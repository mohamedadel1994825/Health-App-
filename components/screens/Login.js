import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, AsyncStorage, Keyboard } from 'react-native';
import Form from '../screens/Form';
import { MyColors, Width, Height } from '../..';
export default class Login extends Component {
    static navigationOptions = ({ navigation }) => {
        let headerTitle = 'Sign In',
            headerStyle = [styles.headerStyle],
            headerTitleStyle = [styles.headerTitleStyle],
            headerTintColor = [MyColors.darkviolet],
            headerBackTitle = 'Back',
            headerBackTitleStyle = [styles.headerBackTitleStyle]
        return { headerTitle, headerStyle, headerTitleStyle, headerTintColor, headerBackTitle, headerBackTitleStyle }
    }
    signUp=()=> {
        this.props.navigation.navigate('Signup')
    }

    render() {
        return(
                <View style={styles.container}>
                <Text>{'\n'}</Text>
                <Text>{'\n'}</Text>
                <Form type="Login"/>
                <View style={styles.signupTextCont}> 
                    <Text style={styles.signupText}>Dont have an account yet? </Text>
                    <TouchableOpacity onPress={this.signUp}><Text style={styles.signupButton}>Sign up</Text></TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
    },
    signupTextCont: {
      flexGrow: 1,
      justifyContent: 'center',
      alignItems: 'flex-end',
      paddingVertical: 16,
      flexDirection: 'row',
      marginBottom:Width*.1

    },
    signupText: {
        color:MyColors.signIn,
        fontSize:16,
        fontWeight: '500'
    },
    signupButton: {
        color:'white',
        fontSize:16,
        fontWeight: '500'
    },
    headerStyle: {
        backgroundColor: MyColors.gray1, elevation: 0,
        shadowOpacity: 10, borderColor: MyColors.darkviolet,
    }, headerTitleStyle: { color:MyColors.darkviolet, marginLeft: Width * .13 },
    headerBackTitleStyle: { margin: 100 },
    container: {
        flex: 1, justifyContent: 'space-around',
        alignItems: 'center', backgroundColor: MyColors.blueWhite, width: Width
    },
    content: { height: Width * .9, justifyContent: 'center', alignItems: 'center' },
    btnNav: {
        width: Width * .6, height: Width * .1, marginTop: Width * .1,
        justifyContent: 'center', alignItems: 'center', borderColor: 'gray',
        borderRadius: Width * .01, backgroundColor: MyColors.darkviolet
    }
});