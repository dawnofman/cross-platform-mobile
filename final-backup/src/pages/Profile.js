import * as React from 'react';
import { Platform, Button, StyleSheet, Text, View, TextInput, ScrollView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import SignupForm from '../components/SignupForm.js';
import ProfilePicture from '../components/ProfilePicture.js';
export default class Profile extends React.Component {
   constructor(props) {
      super(props);
      const state = {
         isShow: false,
         buttonText: 'Update Profile'
      };
   }
   componentDidMount() {
      const{userData} = this.props;
      console.log(userData);
   }

   render() {
      const {userData} = this.props;

      return (
         <View style={styles.container}>
            <View style={styles.scrollContainer}>
               <ScrollView style={styles.scrollView}>
                  <View style={styles.profilePictureContainer}>
                     <ProfilePicture />
                     <Icon name='edit' style={styles.icon} size={15} />
                     <Text style={styles.memberId}>#{userData.member_id}</Text>
                  </View>
                  <SignupForm navigation={this.props.navigation} state={this.state} userData={userData} />
               </ScrollView>
            </View>
         </View>
      )
   }
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#fff',
   },
   scrollContainer: {
      paddingBottom: 30,
      //height:'95%',
      alignItems: 'center',
   },
   content: {
      justifyContent: 'center',
      alignItems: 'center',
   },
   profilePic: {
      height: 90,
      width: 90,
      borderRadius: 45,
      marginVertical: 16,
   },
   icon: {
      color: '#1ba5d8',
   },
   memberId: {
      fontSize: 18,
      marginVertical: 16,
   },
   scrollView: {
      width: '100%',
      flex: 1
   },
   profilePictureContainer: {
      justifyContent: 'center',
      alignItems: 'center',
   }
});
