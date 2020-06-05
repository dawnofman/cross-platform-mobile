import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StackNavigator} from "./src/components/StackNavigator";
import {TabNavigator} from "./src/components/TabNavigator";
import {navigationRef} from "./RootNavigation";

export default class App extends React.Component{
    /*if (__DEV__) {
        import('./reactotronConfig').then(() => console.log('Reactotron Configured'))   //Rectotron import
    }*/

    constructor(props) {
        super(props);

        this.state = {
            isLoggedIn: false,
            userData: [],
            userAddress:null
        };
        console.disableYellowBox = true;
    }

    onLoginStateChange = (state) => {
        this.setState({isLoggedIn: state});
        console.log("login status:"+state);
    };

    getUserData = (data) => {
        this.setState({userData: data});
        this.setState({ userAddress: data.address });
    };
    updateUserData=(data)=>{
        this.setState({ userAddress: data });
    }

    render() {
        const { isLoggedIn, userData, userAddress} = this.state;
        return (
            <NavigationContainer ref={navigationRef}>
                {isLoggedIn ? <TabNavigator initialRouteName ="Home" userData={userData} userAddress={userAddress}  onLoginStateChange={() => this.onLoginStateChange} updateUserData={() => this.updateUserData}  /> : <StackNavigator getUserData={() => this.getUserData}
                                                                                    onLoginStateChange={() => this.onLoginStateChange}/>}
            </NavigationContainer>
        );
    }
}
