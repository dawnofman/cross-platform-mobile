import * as React from 'react';
import { Platform, Button, StyleSheet, Text, View, StatusBar, TextInput } from 'react-native';
import * as Constants from '../constants';
export default class MyBooking extends React.Component{


   componentWillMount(){
        fetch(Constants.POST_URL+'account_setup/booking_list',{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({'id':'3'})
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
    confirm_cancel_booking(){
        fetch(Constants.POST_URL+'account_setup/cancel_booking',{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({'booking_id':'1','client_id':'3'})
        }).then(function (response) {
            return response.json();
        }).then(function (result) {
            console.log(result) ;
            if(result.response_code == '200' && result.response_msg =='success'){
                alert('Booking successfully cancelled..');
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
    cancel_booking(){
        Alert.alert(
          'Confirmation',
          'Confirm Booking cancel',
          [
            {text: 'Cancel', onPress: () => console.log('Cancel Pressed!')},
            {text: 'Yes', onPress: ()=> this.confirm_cancel_booking()},
          ],
          { cancelable: false }
        )
    }

    render(){
        return (
            <View style={styles.container}>
                <View style={styles.textContainer}>
                    <View>
                        <Text style={styles.commentText}>Service Booked for pumbler</Text>
                    </View>
                   
                    <View>
                        <Text style={styles.author}>by Stephen johnson</Text>
                    </View>
                </View>
                <View style={styles.textContainer}>
                    <View>
                        <Text style={styles.commentText}>Service Booked for pumbler</Text>
                    </View>
                   
                    <View>
                        <Text style={styles.author}>by Stephen johnson</Text>
                    </View>
                </View>
                <View style={styles.textContainer}>
                    <View>
                        <Text style={styles.commentText}>Service Booked for pumbler</Text>
                    </View>
                   
                    <View>
                        <Text style={styles.author}>by Stephen johnson</Text>
                    </View>
                </View>

                <View style={styles.textContainer}>
                    <View>
                        <Text style={styles.commentText}>Service Booked for pumbler</Text>
                    </View>
                   
                    <View>
                        <Text style={styles.author}>by Stephen johnson</Text>
                    </View>
                </View>

                <View style={styles.textContainer}>
                    <View>
                        <Text style={styles.commentText}>Service Booked for pumbler</Text>
                    </View>
                   
                    <View>
                        <Text style={styles.author}>by Stephen johnson</Text>
                    </View>
                </View>

                <View style={styles.textContainer}>
                    <View>
                        <Text style={styles.commentText}>Service Booked for pumbler</Text>
                    </View>
                   
                    <View>
                        <Text style={styles.author}>by Stephen johnson</Text>
                    </View>
                </View>

                <View style={styles.textContainer}>
                    <View>
                        <Text style={styles.commentText}>Service Booked for pumbler</Text>
                    </View>
                   
                    <View>
                        <Text style={styles.author}>by Stephen johnson</Text>
                    </View>
                </View>

                <View style={styles.textContainer}>
                    <View>
                        <Text style={styles.commentText}>Service Booked for pumbler</Text>
                    </View>
                   
                    <View>
                        <Text style={styles.author}>by Stephen johnson</Text>
                    </View>
                </View>

                <View style={styles.textContainer}>
                    <View>
                        <Text style={styles.commentText}>Service Booked for pumbler</Text>
                    </View>
                   
                    <View>
                        <Text style={styles.author}>by Stephen johnson</Text>
                    </View>
                </View>

                <View style={styles.textContainer}>
                    <View>
                        <Text style={styles.commentText}>Service Booked for pumbler</Text>
                    </View>
                   
                    <View>
                        <Text style={styles.author}>by Stephen johnson</Text>
                    </View>
                </View>

                <View style={styles.textContainer}>
                    <View>
                        <Text style={styles.commentText}>Service Booked for pumbler</Text>
                    </View>
                   
                    <View>
                        <Text style={styles.author}>by Stephen johnson</Text>
                    </View>
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
	container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        width:'100%'
    },
    itemContainer:{
        width:'100%',
        alignItems:'flex-start',
        backgroundColor:'#ffffff',
        borderWidth: 1,
        borderColor: '#ddd',
    },
    textContainer:{
        padding:10
    },
    executiveRating:{
    },
    rating:{
        marginTop :10,
    },
    commentTextTileContainer:{
        paddingVertical: 10,
        justifyContent: 'flex-start',
        alignItems: 'center',
        width:'100%',
    },
    commentTextTile: {
        fontSize:20,
        fontWeight: '500',
        padding:10
    },
    commentText:{
        fontSize:16,
    },
   author:{
    fontSize:12,
    paddingLeft:10
   }
});
