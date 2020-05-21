import * as React from 'react';
import { Platform, Button, StyleSheet, Text, View, TextInput, TouchableOpacity, CheckBox, Alert } from 'react-native';
import * as Constants from '../constants';
import * as RootNavigation from "../../RootNavigation";

export default class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: "",
            lastname: "",
            mobileno: "",
            emailId: "",
            address: "",
            password: '',
            id: "",
        };
    }

    componentDidMount() {
        const { userData } = this.props;
        //console.log(getUserData);
        if (userData) {
            const { userData } = this.props;
            this.setState({
                firstname: userData.first_name ? userData.first_name : '',
                lastname: userData.last_name ? userData.last_name : '',
                mobileno: userData.mobile_no ? userData.mobile_no : '',
                emailId: userData.email_id ? userData.email_id : '',
                address: userData.address ? userData.address : '',
                id: userData.users_id ? userData.users_id : '',
            });
        }
    }
    submit() {
        fetch(Constants.POST_URL + 'account_setup/register_form', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.state)
        }).then(function (response) {
            return response.json();
        }).then((result) => {
            if (result.response_code === 200 && result.response_msg === 'success') {
                Alert.alert(
                    'Registration Success',
                    'Would you like to login?',
                    [
                        { text: 'Cancel', onPress: () => console.log('Cancel Pressed!') },
                        { text: 'Yes', onPress: () => RootNavigation.navigate('Login') },
                    ],
                    { cancelable: false }
                )
            } else {
                alert('Registration failed');
            }
        }).catch(function (error) {
            console.log("-------- error ------- " + error);
            alert("result:" + error)
        });
    }

    updateData() {
        var nav = this.props.navigation;
        fetch(Constants.POST_URL + 'account_setup/update_profile', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.state)
        }).then(function (response) {
            return response.json();
        }).then((result) => {
            console.log(result);
            if (result.response_code === 200 && result.response_msg == 'success') {
                alert('Updated Successfully');
            } else {
                alert('Updation failed');
            }
        }).catch(function (error) {
            console.log("-------- error ------- " + error);
            alert("result:" + error)
        });
    }
    render() {
       // const {buttonText } = this.state;
        const { isShow } = this.props;
        return (
            <View style={styles.container}>
                <View style={styles.nameContainer}>
                    <TextInput style={styles.inputBoxName}
                        placeholder='First Name'
                        onChangeText={(firstname) => this.setState({ firstname })}
                        defaultValue={this.state.firstname}
                    />
                    <TextInput style={styles.inputBoxName}
                        placeholder='Last Name'
                        onChangeText={(lastname) => this.setState({ lastname })}
                        defaultValue={this.state.lastname}
                    />
                </View>
                <TextInput style={styles.inputBox}
                    placeholder='Mobile no'
                    onChangeText={(mobileno) => this.setState({ mobileno })}
                    defaultValue={this.state.mobileno}
                />
                <TextInput style={styles.inputBox}
                    placeholder='Email Id'
                    onChangeText={(emailId) => this.setState({ emailId })}
                    defaultValue={this.state.emailId}
                />
                <TextInput style={styles.textArea}
                    placeholder='Address'
                    onChangeText={(address) => this.setState({ address })}
                    defaultValue={this.state.address}
                />
                {isShow ? (
                    <TextInput style={styles.inputBox}
                        placeholder='Password'
                        secureTextEntry={true}
                        onChangeText={(password) => this.setState({ password })}
                    />
                ) : (false)}
                {isShow ? (
                    <View style={styles.nameContainer}>
                        <CheckBox style={styles.constentCheckBox} title='I agree with the Terms & Conditions' />
                        <Text style={styles.constentText}> I agree with the Terms & Conditions</Text>
                    </View>) : (false)}

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => { isShow ? (this.submit()) : (this.updateData()) }}
                >
                    <Text style={styles.buttonText}>{isShow ? ('Signup'):('Update Profile')}</Text>
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
    inputBoxName: {
        width: 140,
        paddingHorizontal: 16,
        paddingVertical: 7,
        fontSize: 16,
        borderRadius: 5,
        borderColor: '#1ba5d8',
        borderWidth: 1,
        backgroundColor: '#fff',
        color: '#000000',
        marginVertical: 16,
        marginHorizontal: 10,
    },
    inputBox: {
        width: 300,
        paddingHorizontal: 16,
        paddingVertical: 7,
        fontSize: 16,
        borderRadius: 5,
        borderColor: '#1ba5d8',
        borderWidth: 1,
        backgroundColor: '#fff',
        color: '#000000',
        marginVertical: 12,
    },
    button: {
        alignItems: "center",
        backgroundColor: "#1ba5d8",
        borderRadius: 5,
        paddingHorizontal: 16,
        paddingVertical: 10,
        marginVertical: 16,
        width: 300,
    },
    buttonText: {
        fontSize: 16,
        color: '#ffffff',
    },
    nameContainer: {
        flexDirection: 'row'
    },
    constentCheckBox: {
        marginTop: 5,
    },
    constentText: {
        fontSize: 16,
        color: '#1ba5d8',
        marginLeft: 5,
        marginTop: 10
    },
    textArea: {
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
        justifyContent: "flex-start"
    }

});