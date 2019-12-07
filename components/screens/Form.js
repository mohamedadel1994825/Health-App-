import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, AsyncStorage, Keyboard } from 'react-native';
import { KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux';
import { setSignUpValidation } from '../actions/usersActions';
import { MyColors, Width, Height } from '../..';
import { ScrollView } from 'react-native-gesture-handler';

 class Form extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            phone: '',
            name: '',
            sinupValid: false
        }
    }
    // componentWillReceiveProps(nextProps) {
    //     if (nextProps.signupIsValid) {
    //       this.props.navigation.navigate('Home');
    //     }
    //   }
    saveData = async () => {
        const { email, password, phone, name } = this.state;

        //save data with asyncstorage
        let loginDetails = {
            email: email,
            password: password,
            phone: phone,
            name: name
        }

        checkLogin = async () => {
            try {
                let loginDetails = await AsyncStorage.getItem('loginDetails');
                let ld = JSON.parse(loginDetails);
                emailIsvalid = isEmailValid(ld.email)
                if (emailIsvalid && ld.password != null) {
                    if (ld.email == email && ld.password == password) {
                        alert('you sign in');
                    }
                }
                else {
                    alert('Email and Password does not exist!');
                }
            } catch (error) {
                alert(error);
            }
        }
        checkSignUp = async () => {
            try {
                let loginDetails = await AsyncStorage.getItem('loginDetails');
                let ld = JSON.parse(loginDetails);
                emailIsvalid = isEmailValid(ld.email)
                if (emailIsvalid && ld.password != null) {
                    alert('you Sined Up');
                    this.setState({sinupValid:true})

                }
                else {
                    return alert('fields not completed ');
                }
                ;
            } catch (error) {
                alert(error);
            }
        }
        isEmailValid = (signupEmail) => {
            let email = signupEmail
            let pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return pattern.test(String(email).toLowerCase())
        }
        login = () => {
            checkSignUp();
        }
        if (this.props.type !== 'Login') {
            AsyncStorage.setItem('loginDetails', JSON.stringify(loginDetails));

            Keyboard.dismiss();
            login();
        }
        else if (this.props.type == 'Login') {
            // try {
            //     let loginDetails = await AsyncStorage.getItem('loginDetails');
            //     let ld = JSON.parse(loginDetails);

            //     if (ld.email != null && ld.password != null) {
            //         if (ld.email == email && ld.password == password) {
            //             alert('Go in!');
            //         }
            //         else {
            //             alert('Email and Password does not exist!');
            //         }
            //     }

            // } catch (error) {
            //     alert(error);
            // }
            checkLogin()
        }
    }

    showData = async () => {
        let loginDetails = await AsyncStorage.getItem('loginDetails');
        let ld = JSON.parse(loginDetails);
        alert('email: ' + ld.email + ' ' + 'password: ' + ld.password);
    }

    render() {
        // onpress=()=>{
        //     if (this.state.sinupValid) {  this.props.navigation.navigate('Login')
        //     }
        // }
        return (

            <KeyboardAvoidingView enabled>
                <View>
                <ScrollView  style={{height:'40%',marginVertical:Width*.1}}>
                <View style={styles.container}>
                    <TextInput style={styles.inputBox}
                        onChangeText={(email) => this.setState({ email })}
                        underlineColorAndroid='rgba(0,0,0,0)'
                        placeholder="Email"
                        placeholderTextColor="#002f6c"
                        selectionColor="#fff"
                        keyboardType="email-address"
                        onSubmitEditing={() => this.password.focus()} />

                    <TextInput style={styles.inputBox}
                        onChangeText={(password) => this.setState({ password })}
                        underlineColorAndroid='rgba(0,0,0,0)'
                        placeholder="Password"
                        secureTextEntry={true}
                        placeholderTextColor="#002f6c"
                        ref={(input) => this.password = input}
                    />
                    {this.props.type == 'Signup' ? <TextInput style={styles.inputBox}
                        onChangeText={(phone) => this.setState({ phone })}
                        underlineColorAndroid='rgba(0,0,0,0)'
                        placeholder="phone"
                        keyboardType='phone-pad'
                        secureTextEntry={false}
                        placeholderTextColor="#002f6c"
                        ref={(input) => this.phone = input}
                    /> : null}
                    {this.props.type == 'Signup' ? <TextInput style={styles.inputBox}
                        onChangeText={(name) => this.setState({ name })}
                        underlineColorAndroid='rgba(0,0,0,0)'
                        placeholder="name"
                        secureTextEntry={true}
                        placeholderTextColor="#002f6c"
                        ref={(input) => this.name = input}
                    /> : null}
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText} onPress={
                            this.saveData
                            // this.props.setSignUpValidation(this.state.sinupValid)
                        }
                        >{this.props.type}</Text>
                    </TouchableOpacity>
                </View>
                </ScrollView>
                </View>
               
             
            </KeyboardAvoidingView>


        )
    }
}
const mapStateToProps = state => ({
    signupIsValid: state.users.signupIsValid
});
export default connect(
    mapStateToProps,
    { setSignUpValidation}
)(Form);
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputBox: {
        width: 300,
        backgroundColor: '#eeeeee',
        borderRadius: 25,
        paddingHorizontal: 16,
        fontSize: 16,
        color: '#002f6c',
        marginVertical: 10
    },
    button: {
        width: 300,
        backgroundColor: '#4f83cc',
        borderRadius: 25,
        marginVertical: 10,
        paddingVertical: 12
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#ffffff',
        textAlign: 'center'
    }
});