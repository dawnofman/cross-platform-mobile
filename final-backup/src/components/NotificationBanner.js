import * as React from 'react';
import { Platform,StyleSheet,View,Text } from 'react-native';

export default class Notification extends React.Component{
    render(){
        return (
            <View style={styles.container}>
                <View style={styles.banner} >
                    <Text style={styles.bannerTitle}>COVID-19</Text>
                    <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</Text>
                </View>           
            </View>
        );
    }
}
const styles = StyleSheet.create({
	container: {
		flexGrow: 1,
        justifyContent: 'center',
		alignItems: 'center',
	},
    banner:{
        padding:10,
        borderWidth: 1,
        borderColor: '#ddd',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#f7f7f7',
    },
    bannerTitle:{
        fontSize:20,
    },
    bannerText:{
    }
});