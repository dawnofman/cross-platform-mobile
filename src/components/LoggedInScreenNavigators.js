import Icon from 'react-native-vector-icons/FontAwesome';
import Home from "../pages/Home";
import SearchLayout from "./SearchLayout";
import LocationDetector from "./LocationDetector";
import ExecutiveProfile from "../pages/ExecutiveProfile";
import ExecutivesList from "../pages/ExecutivesList";
import * as React from "react";
const HomeStack = createStackNavigator();
import {createStackNavigator} from '@react-navigation/stack';
import SearchCategories from "../pages/SearchCategories";
import Profile from "../pages/Profile";
import MyBooking from "../pages/MyBooking";
import HelpDesk from "../pages/HelpDesk";
const SearchCategoriesStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const MyBookingStack = createStackNavigator();
const HelpDeskStack = createStackNavigator();
  
export const HomeStackScreen =(props) =>(
    <HomeStack.Navigator  initialRouteName="Home" >
        <HomeStack.Screen name="Home" component={() => <Home userData={props.userData} userAddress={props.userAddress} />}
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
        <HomeStack.Screen  name="SearchLayout" component={SearchLayout}
                           options={{
                               title: 'Search',
                               headerTitleAlign: 'center',
                               headerStyle: {
                                   backgroundColor: '#1ba5d8',
                               },

                           }}
        />
        <HomeStack.Screen name="LocationDetector" component={() => <LocationDetector updateUserData={props.updateUserData()} /> }
                                  options={{
                               title: 'Location',
                               headerTitleAlign: 'center',
                               headerStyle: {
                                   backgroundColor: '#1ba5d8',
                               },

                           }}
        />

        <HomeStack.Screen  name="ExecutiveProfile" component={ExecutiveProfile}
                           options={{
                               title: 'Executive Profile',
                               headerTitleAlign: 'center',
                               headerStyle: {
                                   backgroundColor: '#1ba5d8',
                               },
                           }}
        />
        <HomeStack.Screen  name="ExecutivesList" component={ExecutivesList}
                           options={{
                               title: 'Executives List',
                               headerTitleAlign: 'center',
                               headerStyle: {
                                   backgroundColor: '#1ba5d8',
                               },
                           }}
        />
    </HomeStack.Navigator>
);


export const SearchCategoriesStackScreen =(props) =>(
    <SearchCategoriesStack.Navigator initialRouteName="SearchCategories">
        <SearchCategoriesStack.Screen name="SearchCategories" component={() => <SearchCategories userData={props.userData} userAddress={props.userAddress} />}
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

export const ProfileStackScreen =(props) =>(
    <ProfileStack.Navigator>
        <ProfileStack.Screen name="Setting" component={() => <Profile userData={props.userData}  onLoginStateChange={props.onLoginStateChange()} />}
                              options={{
                                  title: 'Setting',
                                  headerTitleAlign: 'center',
                                  headerStyle: {
                                      backgroundColor: '#1ba5d8',
                                  },
                                 /* headerRight: () => (
                                      <Icon name="power-off" style={{marginHorizontal:15}} size={20} color="#ffffff"  
                                          onPress={() => this.logOut()}
                                      />
                                  ),*/
                              }}
        />
    </ProfileStack.Navigator>
);

export const MyBookingStackScreen =(props) =>(
    <MyBookingStack.Navigator>
        <MyBookingStack.Screen  name="MyBooking" component={() =><MyBooking  userData={props.userData}/>}
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

export const HelpDeskStackScreen =(props) =>(
    <HelpDeskStack.Navigator>
        <HelpDeskStack.Screen  name="HelpDesk" component={() =><HelpDesk  userData={props.userData}/>}
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