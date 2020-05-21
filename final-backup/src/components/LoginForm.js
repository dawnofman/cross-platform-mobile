import * as React from 'react';
import {Platform, Button, StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import * as Constants from '../constants';

export default class LoginForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        };
    }
    submit() {
        const {onLoginStateChange, getUserData} = this.props;
        fetch(Constants.POST_URL + 'account_setup/validate_login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.state)
        }).then(function (response) {
            return response.json();
        }).then((result) => {
            if (result.response_msg !== 'success') {
                alert(result.response_msg);
            } else {
                onLoginStateChange(true);
                getUserData(result.user_data);
            }
        }).catch(function (error) {
            console.log("-------- error ------- " + error);
            alert("result:" + error)
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput style={styles.inputBox}
                           value={this.state.username}
                           placeholder='Email Id or User Name'
                           autoCorrect={false}
                           onChangeText={(username) => this.setState({username})}
                />
                <TextInput style={styles.inputBox}
                           placeholder='Password'
                           autoCorrect={false}
                           secureTextEntry={true}
                           value={this.state.password}
                           onChangeText={(password) => this.setState({password})}
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => this.submit()}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputBox: {
        width: 300,
        paddingHorizontal: 16,
        paddingVertical: 10,
        fontSize: 16,
        borderRadius: 5,
        borderColor: '#1ba5d8',
        borderWidth: 1,
        backgroundColor: '#fff',
        color: '#000000',
        marginVertical: 16,
    },
    button: {
        alignItems: "center",
        backgroundColor: "#1ba5d8",
        borderRadius: 5,
        paddingHorizontal: 16,
        paddingVertical: 10,
        width: 300,
    },
    buttonText: {
        fontSize: 16,
        color: '#ffffff',
    }
});