import * as React from 'react';
import { Platform, Button, StyleSheet, Text, View, ScrollView } from 'react-native';
import CommentList from '../components/CommentList.js';
import ProfilePicture from '../components/ProfilePicture.js';
import FooterTab1 from '../components/FooterTab1.js';

export default class ExecutiveProfile extends React.Component{
    render(){
        return (
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.profilePictureContainer}>
                        <ProfilePicture />
                    </View>
                     <Text>
                        Stephen johnson, 23 yrs
                    </Text>
                </View>
                <CommentList/>
                <FooterTab1 />
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
	container: {
        flex:1,
		justifyContent: 'center',
		alignItems: 'center',
    },
    profilePictureContainer: {
        marginTop:50
    }
});
