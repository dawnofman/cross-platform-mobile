import * as React from 'react';
import { Platform, Button, StyleSheet, Text, View, StatusBar, TextInput } from 'react-native';

export default class MyBooking extends React.Component{
    render(){
        return (
            <View style={styles.container}>
                
            </View>
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
