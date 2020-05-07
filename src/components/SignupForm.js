import * as React from 'react';
import { Platform, Button, StyleSheet, Text, View, TextInput, TouchableOpacity, CheckBox} from 'react-native';
export default class SignupForm extends React.Component{
    render(){
        return (
            <View style={styles.container}>
                <View style={styles.nameContainer}>
                    <TextInput style ={styles.inputBoxName}
                        placeholder='First Name'
                    />
                      <TextInput style ={styles.inputBoxName}
                        placeholder='Last Name'
                    />
                </View>
                <TextInput style ={styles.inputBox}
                    placeholder='Mobile no'
                />
                <TextInput style ={styles.inputBox}
                    placeholder='Email Id'
                />
                <TextInput style ={styles.textArea}
                    placeholder='Address'
                    numberOfLines={10}
                    multiline={true} />
                {this.props.state.isShow ? (<TextInput style ={styles.inputBox}
                    placeholder= 'Password'
                    secureTextEntry = {true} />):null}
                 {this.props.state.isShow ? (
                  <View style={styles.nameContainer}>
                    <CheckBox style={styles.constentCheckBox} title='I agree with the Terms & Conditions'/>
                    <Text style={styles.constentText}> I agree with the Terms & Conditions</Text>
                   </View>):null}
                 
                <TouchableOpacity
                    style={styles.button}
                     onPress={() =>this.props.navigation.navigate('Home')}
                >
                    <Text style={styles.buttonText}>{this.props.state.buttonText}</Text>
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
        width :140,
        paddingHorizontal :16,
        paddingVertical :10,
        fontSize:16,
        borderRadius:5,
        borderColor:'#1ba5d8',
        borderWidth:1,
        backgroundColor:'#fff',
        color: '#000000',
        marginVertical: 16,
        marginHorizontal: 10,
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
        marginVertical:16,
        width :300,
      },
      buttonText:{
        fontSize:16,
        color: '#ffffff',
      },
      nameContainer:{
        flexDirection : 'row'
      },
      constentCheckBox:{
        marginTop:5,
      },
      constentText:{
        fontSize: 16,
        color:'#1ba5d8',
        marginLeft:5,
        marginTop:10
      },
      textArea: {
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
        height: 100,
        justifyContent: "flex-start"
      }
      
});