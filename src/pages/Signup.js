import * as React from 'react';
import {  StyleSheet, Text, View, ScrollView } from 'react-native';

import Logo from '../components/Logo.js';
import SignupForm from '../components/SignupForm.js';
import * as RootNavigation from "../../RootNavigation";
export default class Signup extends React.Component {
    state = {
        isShow: true,
        buttonText: 'Signup'
    };
    render() {
        const { getUserData } = this.props;
        return (
            <ScrollView>
                <View style={styles.container}>
                    <Logo />
                    <SignupForm getUserData={getUserData} isShow={this.state} />
                    <View style={styles.signupTextCont}>
                        <Text style={styles.signupText}>Already have an account? </Text>
                        <Text style={styles.signupLink} title="Login"
                            onPress={() => RootNavigation.navigate('Login')}>Sign in</Text>
                    </View>
                </View>
            </ScrollView>
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
