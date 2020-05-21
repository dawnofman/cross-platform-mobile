import * as React from 'react';
import { Platform, Button, StyleSheet, Text, View, StatusBar, TextInput } from 'react-native';
//import AuthContext from '../context.js';
import Logo from '../components/Logo.js';
import LoginForm from '../components/LoginForm.js';
import * as RootNavigation from "../../RootNavigation";

export default class Login extends React.Component {

    constructor(props) {
        super(props);
        console.log(props);
    }

    render() {
        const {onLoginStateChange, getUserData} = this.props;

        const AuthContext = React.createContext();
        return (
            <View style={styles.container}>
                <Logo/>
                <LoginForm onLoginStateChange={onLoginStateChange()} getUserData={getUserData()}/>
                <View style={styles.signupTextCont}>
                    <Text style={styles.signupText}>Don't have an account yet? </Text>
                    <Text style={styles.signupLink}
                          title="Signup"
                        onPress={() => RootNavigation.navigate('Signup')}>
                        Signup
                    </Text>
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
        backgroundColor: '#ffffff',
    },
    signupTextCont: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 16,
        flexDirection: 'row',
    },
    signupText: {
        color: '#1ba5d8',
        fontSize: 16
    },
    signupLink: {
        color: '#0096ce',
        fontSize: 16,
        fontWeight: '500'
    }
});
