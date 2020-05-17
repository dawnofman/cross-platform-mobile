import * as React from 'react';
import { Platform,StyleSheet,View,Image } from 'react-native';

export default class ProfilePicture extends React.Component{
    render(){
        return (
            <Image style={styles.profilePic}
                 source={require('../../assets/img/profile-sample.jpg')}
             />
        );
    }
}
const styles = StyleSheet.create({
   profilePic:{
        height:90,
        width:90,
        borderRadius:45,
        marginVertical:16,
    },
});