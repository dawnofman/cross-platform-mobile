import Login from "../pages/Login";
import Signup from "../pages/Signup";
import * as React from "react";
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();

export const StackNavigator = (props) => {
    return (
        <Stack.Navigator>
            <Stack.Screen options={{headerShown: false}} name="Login"
                          component={() => <Login getUserData={() => props.getUserData()}
                                                  onLoginStateChange={() => props.onLoginStateChange()}/>}/>
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
    )
};