import * as React from 'react';
import { Platform,StyleSheet,View,Image } from 'react-native';

export default class Logo extends React.Component{
    render(){
        return (
            <View style={styles.container}>
            <Image style={styles.logoImage}
                source={require('../img/logo.png')}
            />
            </View>
        );
    }
}
const styles = StyleSheet.create({
	container: {
		flexGrow: 1,
        justifyContent: 'flex-end',
		alignItems: 'center',
	},
    logoImage:{
        height:150,
        width:150
    }
});