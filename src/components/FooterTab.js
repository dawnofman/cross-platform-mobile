import * as React from 'react';
import {Platform, StyleSheet,View,TouchableOpacity,Text} from 'react-native';
    export default class FooterTab extends React.Component{
       render(){
            return (
                <View style= {styles.container}>
                    <TouchableOpacity
                        style={styles.button}
                         onPress={() =>this.props.navigation.navigate('Home')}
                    >
                        <Text style={styles.buttonText}>Home</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                         onPress={() =>this.props.navigation.navigate('Search')}
                    >
                        <Text style={styles.buttonText}>Search</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                         onPress={() =>this.props.navigation.navigate('Profile')}
                    >
                        <Text style={styles.buttonText}>Profile</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                         onPress={() =>this.props.navigation.navigate('HelpDesk')}
                    >
                        <Text style={styles.buttonText}>Help</Text>
                    </TouchableOpacity>
                </View>
            );
        }
    }
    
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection :'row'
        },
        button: {
            alignItems: "center",
            backgroundColor: "#1ba5d8",
            paddingHorizontal :16,
            paddingVertical: 10,
          },
          buttonText:{
            fontSize:16,
            color: '#ffffff',
          }
    });