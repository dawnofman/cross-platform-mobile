import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StackNavigator} from "./src/components/StackNavigator";
import {TabNavigator} from "./src/components/TabNavigator";
import {navigationRef} from "./RootNavigation";

export default class App extends React.Component{
    if (__DEV__) {
        import('./reactotronConfig').then(() => console.log('Reactotron Configured'))   //Rectotron import
    }

    constructor(props) {
        super(props);

        this.state = {
            isLoggedIn: false,
            userData: [],
        };
        console.disableYellowBox = true;
    }

    onLoginStateChange = (state) => {
        this.setState({isLoggedIn: state});
    };

    getUserData = (data) => {
        this.setState({userData: data});
    };


    render() {
        const {isLoggedIn, userData} = this.state;
        return (
            <NavigationContainer ref={navigationRef}>
                {isLoggedIn ? <TabNavigator userData={userData}/> : <StackNavigator getUserData={() => this.getUserData}
                                                                                    onLoginStateChange={() => this.onLoginStateChange}/>}
            </NavigationContainer>
        );
    }
}
