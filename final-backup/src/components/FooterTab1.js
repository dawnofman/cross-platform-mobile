import * as React from 'react';
import { Platform, Button, StyleSheet,  View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
const Tab = createBottomTabNavigator();
    export default function  FooterTab1(){
        return (
            <View style={{flex: 1,
  justifyContent: 'flex-end',
  marginBottom: 0}}>
                <Tab.Navigator
                    initialRouteName="Home"
                    activeColor="#ffffff"
                    inactiveColor="#3e2465"
                >
                    <Tab.Screen name="Home" component={HomeScreen} />
                    <Tab.Screen name="Search" component={SearchScreen} />
                    <Tab.Screen name="Profile" component={ProfileScreen} />
                    <Tab.Screen name="HelpDesk" component={HelpDeskScreen} />
                </Tab.Navigator>
            </View>
        )
    }
    
    function HomeScreen() {
        return (
          <View>
            <Button title="navigate" onPress={() => this.props.navigator.navigate('Home')} />
          </View>
        );
    }
     function SearchScreen() {
        return (
          <View>
            <Button title="navigate" onPress={() => this.props.navigator.navigate('Search')} />
          </View>
        );
    }
    function ProfileScreen() {
       return (
          <View>
            <Button title="navigate" onPress={() => navigation.navigate('Profile')} />
          </View>
        );
    }
    function HelpDeskScreen() {
       return (
          <View>
            <Button title="navigate" onPress={() => navigation.navigate('HelpDesk')} />
          </View>
        );
    }
 