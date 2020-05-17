import * as React from 'react';
import { Platform, Button, StyleSheet, Text, View, StatusBar, TextInput, ScrollView } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Logo from '../components/Logo.js';
import SignupForm from '../components/SignupForm.js';
export default class Signup extends React.Component{
   state = {
            isShow: true,
            buttonText:'Signup'
          };
    render(){
        
        return (
            <ScrollView>
            <View style={styles.container}>
                <Logo/>
                <SignupForm navigation={this.props.navigation} isShow={this.state}  />
                <View style={styles.signupTextCont}>
                    <Text style={styles.signupText}>Already have an account? </Text>
                    <Text style={styles.signupLink}  title="Login"
                        onPress={() => this.props.navigation.navigate('Login')}>Sign in</Text>
                </View>
            </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
	container: {
        flex:1,
		justifyContent: 'center',
		alignItems: 'center',
        backgroundColor: '#ffffff',
	},
    signupTextCont: {
        flex:1,
		justifyContent: 'center',
		alignItems: 'center',
        marginVertical:16,
        flexDirection: 'row',
    },
    signupText: {
        color:'#1ba5d8',
        fontSize:16
    },
    signupLink:{
        color:'#0096ce',
        fontSize:16,
        fontWeight:'500'
    }
});
