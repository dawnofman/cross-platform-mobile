import * as React from 'react';
import { Platform, Button, StyleSheet, Text, View, StatusBar, TextInput } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Login from './src/pages/Login.js';
import Signup from './src/pages/Signup.js';
import Home from './src/pages/Home.js';
import SearchCategories from './src/pages/SearchCategories.js';
import Profile from './src/pages/Profile.js';
import ExecutivesList from './src/pages/ExecutivesList.js';
import ExecutiveProfile from './src/pages/ExecutiveProfile.js';
import HelpDesk from './src/pages/HelpDesk.js';
const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen options={{headerShown: false}} name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup}
        options={{
          title: 'Signup',
          headerStyle: {
            backgroundColor: '#1ba5d8',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        />
        <Stack.Screen  name="Home" component={Home}
        options={{
          title: '',
          headerLeft: null,
          headerStyle: {
            backgroundColor: '#1ba5d8',
            elevation:0,
            shadowOpacity: 0,
            height:40,
          },
          
        }}
        />
       </Stack.Navigator>
    </NavigationContainer>
 
  
  );
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#ffffff',
	}
});
