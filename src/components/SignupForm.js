import * as React from 'react';
import { Platform, Button, StyleSheet, Text, View, TextInput, TouchableOpacity, CheckBox, Alert} from 'react-native';
import * as Constants from '../constants';
export default class SignupForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          firstname: '',
          lastname: '',
          mobileno: '',
          emailId: '',
          address: '',
          password: '',
          id:''  
        };
    }
    submit(){
        var nav = this.props.navigation;
        fetch(Constants.POST_URL+'account_setup/register_form',{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.state)
        }).then(function (response) {
            //console.log(response);
            return response.json();
        }).then(function (result) { 
            if(result.response_code == '200' && result.response_msg =='success'){
                  Alert.alert(
                    'Registration Success',
                    'Would you like to login?',
                    [
                      {text: 'Cancel', onPress: () => console.log('Cancel Pressed!')},
                      {text: 'Yes', onPress: ()=>nav.navigate('Login')},
                    ],
                    { cancelable: false }
                  )

            }else{
                alert(
                    'Registration failed',
                    result.response_msg
                )
            }
        }).catch(function (error) {
            console.log("-------- error ------- "+error);
            alert("result:"+error)
        });
    }
    updateData(){
        var nav = this.props.navigation;
        this.setState({'id':'1'});
        console.log(this.state);
        fetch(Constants.POST_URL+'account_setup/update_profile',{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.state)
        }).then(function (response) {
            return response.json();
        }).then(function (result) { 
            if(result.response_code == '200' && result.response_msg =='success'){
                alert('Updated Successfully');
            }else{
                alert('Updation failed');
            }
        }).catch(function (error) {
            console.log("-------- error ------- "+error);
            alert("result:"+error)
        });
    }
    render(){
        return (
            <View style={styles.container}>
                <View style={styles.nameContainer}>
                    <TextInput style ={styles.inputBoxName}
                        placeholder='First Name'
                        onChangeText={(firstname) => this.setState({ firstname })}
                    />
                      <TextInput style ={styles.inputBoxName}
                        placeholder='Last Name'
                        onChangeText={(lastname) => this.setState({ lastname })}
                    />
                </View>
                <TextInput style ={styles.inputBox}
                    placeholder='Mobile no'
                    onChangeText={(mobileno) => this.setState({ mobileno })}
                />
                <TextInput style ={styles.inputBox}
                    placeholder='Email Id'
                    onChangeText={(emailId) => this.setState({ emailId })}
                />
                <TextInput style ={styles.textArea}
                    placeholder='Address'
                    numberOfLines={10}
                    multiline={true} 
                    onChangeText={(address) => this.setState({ address })}    
                />
                {this.props.state.isShow ? (
                    <TextInput style ={styles.inputBox}
                    placeholder= 'Password'
                    secureTextEntry = {true}  
                    onChangeText={(password) => this.setState({ password })}  
                    />
                    ):null}
                 {this.props.state.isShow ? (
                  <View style={styles.nameContainer}>
                    <CheckBox style={styles.constentCheckBox} title='I agree with the Terms & Conditions'/>
                    <Text style={styles.constentText}> I agree with the Terms & Conditions</Text>
                   </View>):null}
                 
                <TouchableOpacity
                    style={styles.button}
                     onPress={() =>{this.props.state.isShow ? (this.submit()):(this.updateData())}}
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
        paddingVertical :7,
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
        paddingVertical :7,
        fontSize:16,
        borderRadius:5,
        borderColor:'#1ba5d8',
        borderWidth:1,
        backgroundColor:'#fff',
        color: '#000000',
        marginVertical: 12,
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