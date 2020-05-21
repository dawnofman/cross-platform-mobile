import Home from "../pages/Home";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import * as React from "react";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
import {
    HelpDeskStackScreen,
    HomeStackScreen,
    MyBookingStackScreen,
    ProfileStackScreen, SearchCategoriesStackScreen
} from "./LoggedInScreenNavigators";

export const TabNavigator = (props) => {
    return (
        <Tab.Navigator initialRouteName={Home}
                       tabBarOptions={{
                           keyboardHidesTabBar: true,
                           activeTintColor: '#d7dadc',
                           activeBackgroundColor: '#097ea9',
                           inactiveTintColor: '#fff',
                           style: {
                               backgroundColor: '#1ba5d8',
                               height: 50,
                           },
                       }}>
            <Tab.Screen name="Home" component={() => <HomeStackScreen userData={props.userData}/>}
                        options={{
                            tabBarLabel: 'Home',
                            tabBarIcon: ({color, size}) => (
                                <AntDesign name="home" color={color} size={size}/>
                            ),
                        }}
            />
            <Tab.Screen name="Search" component={() => <SearchCategoriesStackScreen userData={props.userData}/> }
                        options={{
                            tabBarLabel: 'Search',
                            tabBarIcon: ({color, size}) => (
                                <AntDesign name="search1" color={color} size={size}/>
                            ),
                        }}
            />
            <Tab.Screen name="MyBooking" component={() => <MyBookingStackScreen userData={props.userData}/>}
                        options={{
                            tabBarLabel: 'Booking',
                            tabBarIcon: ({color, size}) => (
                                <MaterialCommunityIcons name="ticket-confirmation" color={color} size={size}/>
                            ),
                        }}
            />
            <Tab.Screen name="HelpDesk" component={() => <HelpDeskStackScreen userData={props.userData}/>}
                        options={{
                            tabBarLabel: 'Help',
                            tabBarIcon: ({color, size}) => (
                                <MaterialCommunityIcons name="help-rhombus-outline" color={color} size={size}/>
                            ),
                        }}
            />
            <Tab.Screen name="Setting" component={() => <ProfileStackScreen userData={props.userData}/>}
                        options={{
                            tabBarLabel: 'Settings',
                            tabBarIcon: ({color, size}) => (
                                <MaterialCommunityIcons name="settings" color={color} size={size}/>
                            ),
                        }}
            />
        </Tab.Navigator>
    )
};