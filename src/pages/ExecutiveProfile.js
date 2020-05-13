import * as React from 'react';
import { Platform, Button, StyleSheet, Text, View, ScrollView } from 'react-native';
import CommentList from '../components/CommentList.js';
import ProfilePicture from '../components/ProfilePicture.js';

export default class ExecutiveProfile extends React.Component{
    render(){
        return (
            
            <View style={styles.container}>
                <View style={styles.scrollContainer}>
                   <ScrollView styles={styles.scrollView}>
                        <View style={styles.container}>
                            <View style={styles.profilePictureContainer}>
                                <ProfilePicture />
                            </View>
                             <Text>
                                Stephen johnson, 23 yrs
                            </Text>
                        </View>
                        <CommentList/>
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
      height:'75%'
    },
    scrollView:{
        width:'100%'
    }
});
