import * as React from 'react';
import { Platform, Button, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
export default class LoginForm extends React.Component{
    render(){
        return (
             <View style={styles.container}>
                <TextInput style ={styles.inputBox}
                    placeholder='Email Id or User Name'
                    autoCorrect ={false}
                />
                <TextInput style ={styles.inputBox}
                    placeholder= 'Password'
                    autoCorrect ={false}
                    secureTextEntry = {true}
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={() =>this.props.navigation.navigate('Home')} >
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
        width :300,
        paddingHorizontal :16,
        paddingVertical :10,
        fontSize:16,
        borderRadius:5,
        borderColor:'#1ba5d8',
        borderWidth:1,
        backgroundColor:'#fff',
        color: '#000000',
        marginVertical: 16,
    },
     button: {
        alignItems: "center",
        backgroundColor: "#1ba5d8",
        borderRadius:5,
        paddingHorizontal :16,
        paddingVertical: 10,
        width :300,
      },
      buttonText:{
        fontSize:16,
        color: '#ffffff',
      }
});