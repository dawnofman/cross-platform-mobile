import * as React from 'react';
import { Platform, Button, StyleSheet, Text, View, TextInput, ScrollView,Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import FooterTab from '../components/FooterTab.js';
import SignupForm from '../components/SignupForm.js';
import ProfilePicture from '../components/ProfilePicture.js';
import FooterTab1 from '../components/FooterTab1.js';
export default class Profile extends React.Component{
   state = {
            isShow: false,
            buttonText:'Update Profile'
        };
    render(){
        return (
            <ScrollView style={styles.container}>
               <View  style={styles.content}>
                   <ProfilePicture />
                   <Icon name='edit' style={styles.icon}  size={15} />
                   <Text style={styles.memberId}>#Member Id</Text>
                   <SignupForm navigation={this.props.navigation} state={this.state} />
               </View>
               <FooterTab1 />
           </ScrollView>
         )
    }
}

const styles = StyleSheet.create({
	container: {
      flex:1,
		backgroundColor: '#ffffff',
	},
   content:{
      justifyContent: 'center',
      alignItems: 'center',
   },
    signupTextCont: {
      flex:1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop:16,
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
    },
    profilePic:{
        height:90,
        width:90,
        borderRadius:45,
        marginVertical:16,
    },
    icon: {
        color:'#1ba5d8',
    },
    memberId:{
        fontSize:18,
        marginVertical:16,
    }
});
