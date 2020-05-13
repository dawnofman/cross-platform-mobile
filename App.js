import * as React from 'react';
import { Platform, Button, StyleSheet, Text, View, StatusBar, TextInput } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Login from './src/pages/Login.js';
import Signup from './src/pages/Signup.js';
import Home from './src/pages/Home.js';
import LocationDetector from './src/components/LocationDetector.js';
import SearchCategories from './src/pages/SearchCategories.js';
import Profile from './src/pages/Profile.js';
import ExecutivesList from './src/pages/ExecutivesList.js';
import ExecutiveProfile from './src/pages/ExecutiveProfile.js';
import HelpDesk from './src/pages/HelpDesk.js';
import MyBooking from './src/pages/MyBooking.js';
const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const SearchCategoriesStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const MyBookingStack = createStackNavigator();
const HelpDeskStack = createStackNavigator();



const HomeStackScreen =() =>(
  <HomeStack.Navigator>
    <HomeStack.Screen  name="Home" component={Home}
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
          <HomeStack.Screen  name="LocationDetector" component={LocationDetector}
          options={{
            title: 'Location',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#1ba5d8',
            },
            
          }}
          />
  </HomeStack.Navigator>
);
const SearchCategoriesStackScreen =() =>(
  <SearchCategoriesStack.Navigator>
    <SearchCategoriesStack.Screen  name="SearchCategories" component={SearchCategories}
        options={{
          title: 'Search Categories',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#1ba5d8',
          },
          
        }}
        />
        <SearchCategoriesStack.Screen  name="ExecutivesList" component={ExecutivesList}
        options={{
          title: 'Executives List',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#1ba5d8',
          },
        }}
        />
        <SearchCategoriesStack.Screen  name="ExecutiveProfile" component={ExecutiveProfile}
        options={{
          title: 'Executive Profile',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#1ba5d8',
          },
        }}
        />
  </SearchCategoriesStack.Navigator>
);
const ProfileStackScreen =() =>(
  <ProfileStack.Navigator>
    <ProfileStack.Screen  name="Profile" component={Profile}
        options={{
          title: 'Profile',
          headerStyle: {
            backgroundColor: '#1ba5d8',
          },
        }}
     />
  </ProfileStack.Navigator>
);

const MyBookingStackScreen =() =>(
  <MyBookingStack.Navigator>
    <MyBookingStack.Screen  name="MyBooking" component={MyBooking}
        options={{
          title: 'Booking',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#1ba5d8',
          },
        }}
     />
  </MyBookingStack.Navigator>
);

const HelpDeskStackScreen =() =>(
  <HelpDeskStack.Navigator>
    <HelpDeskStack.Screen  name="HelpDesk" component={HelpDesk}
        options={{
          title: 'HelpDesk',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#1ba5d8',
          },
        }}
     />
  </HelpDeskStack.Navigator>
);

export default function App() {
  const[userToken,setUserToken]= React.useState('dsfsd');
  return (
    <NavigationContainer>
      {userToken ? (
        <Tab.Navigator initialRouteName ={Home} 
        tabBarOptions={{
              keyboardHidesTabBar: true,
              activeTintColor :'#d7dadc',
              activeBackgroundColor :'#097ea9',
              inactiveTintColor :'#fff',
              style: {
                backgroundColor: '#1ba5d8',
              },
            }}>
          <Tab.Screen name="Home" component={HomeStackScreen}
              options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons name="home" color={color} size={size} />
                ),
              }}
          />
          <Tab.Screen name="Search" component={SearchCategoriesStackScreen} 
              options={{
                  tabBarLabel: 'Search',
                  tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="feature-search" color={color} size={size} />
                  ),
                }}
              />
          <Tab.Screen name="MyBooking" component={MyBookingStackScreen} 
            options={{
                tabBarLabel: 'Booking',
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons name="ticket-confirmation" color={color} size={size} />
                ),
             }}
          />
          <Tab.Screen name="HelpDesk" component={HelpDeskStackScreen} 
            options={{
                tabBarLabel: 'Help',
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons name="help-box" color={color} size={size} />
                ),
             }}
          />
        </Tab.Navigator>   

        ):(
          <Stack.Navigator>
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
          </Stack.Navigator>
        )}
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
