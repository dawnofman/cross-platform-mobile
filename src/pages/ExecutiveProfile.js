import * as React from 'react';
import { Platform, Button, StyleSheet, Text, View, ScrollView,TouchableOpacity,Alert } from 'react-native';
import CommentList from '../components/CommentList.js';
import ProfilePicture from '../components/ProfilePicture.js';
import * as Constants from '../constants';

export default class ExecutiveProfile extends React.Component{


   componentWillMount(){
           fetch(Constants.POST_URL+'account_setup/profile_details',{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({'id':this.props.route.params.user_id})
        }).then(function (response) {
            return response.json();
        }).then(function (result) {
            console.log(result) ;
            if(result.response_code == '200' && result.response_msg =='success'){
               // login();
            }else{
                alert(
                    'Login failed',
                    result.response_msg,
                )

            }
        }).catch(function (error) {
            console.log("-------- error ------- "+error);
            alert("result:"+error)
        });
    }

    booking(){
      Alert.alert(
          'Confirmation',
          'Confirm Booking',
          [
            {text: 'Cancel', onPress: () => console.log('Cancel Pressed!')},
            {text: 'Yes', onPress: ()=> this.confirm_booking()},
          ],
          { cancelable: false }
        )
    }
    
    confirm_booking(){
      console.log({'client_id':'1','service_id':'3','executive_id':this.props.route.params.user_id});
      var nav = this.props.navigation;
       fetch(Constants.POST_URL+'account_setup/book_executive',{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({'client_id':'1','service_id':'3','executive_id':this.props.route.params.user_id})
        }).then(function (response) {
            return response.json();
        }).then(function (result) {
            console.log(result) ;
            if(result.response_code == '200' && result.response_msg =='success'){
               Alert.alert(
                  'Confirmation',
                  'Successfully Booked',
                  [
                    {text: 'ok', onPress: ()=>nav.navigate('MyBooking')},
                  ],
                  { cancelable: false }
                )
            }else{
                alert(
                    'Login failed',
                    result.response_msg,
                )

            }
        }).catch(function (error) {
            console.log("-------- error ------- "+error);
            alert("result:"+error)
        });
    }
    render(){
        return (
            
            <View style={styles.container}>
                <View style={styles.scrollContainer}>
                   <ScrollView styles={styles.scrollView}>
                        <View style={styles.container}>
                            <View style={styles.profilePictureContainer}>
                                <ProfilePicture />
                            </View>
                            <View>
                               <Text>
                                  Stephen johnson, 23 yrs
                              </Text>
                            </View>
                        </View>
                        <View>
                          <TouchableOpacity
                              style={styles.button}
                               onPress={() =>this.booking()}
                          >
                              <Text style={styles.buttonText}>Book Executive</Text>
                          </TouchableOpacity>

                        </View>
                        <View styles={styles.CommentContainer}>
                          <CommentList/>
                        </View>
                   </ScrollView>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
	profilePictureContainer: {
        marginTop:50
    },
    container: {
      flex:1,
      alignItems: 'center',
    },
    footerContainer:{
      flex:1,
      width:'100%',
      alignItems: 'center',
    },
    searchContainer:{
      height:120,
      backgroundColor: '#1ba5d8',
      paddingHorizontal:10,
      alignItems: 'flex-start',
      height:90
    },
    scrollContainer:{
      paddingBottom:30,
        width:'100%'
    },
    scrollView:{
        width:'100%'
    },
    CommentContainer:{
        width:'100%'
    },
    button: {
      alignItems: "center",
      backgroundColor: "green",
      borderRadius:5,
      justifyContent: 'center',
      paddingVertical: 10,
      width :300,
    },
    buttonText:{
      fontSize:16,
      color: '#ffffff',
    },
});
