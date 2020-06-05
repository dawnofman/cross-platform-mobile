import * as React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import { ListItem } from 'react-native-elements';
//import { Rating, AirbnbRating } from 'react-native-ratings';
import * as RootNavigation from "../../RootNavigation";
import * as Constants from '../constants';

export default class ExecutiveListItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isDataAvailable: false,
            userId: null,
            serviceId: null,
            userData: [],
            address: null
        }
    }

    componentDidMount() {
        const { serviceId, userId, address } = this.props.state;
        this.setState({ serviceId: serviceId, userId: userId, address: address });
        //console.log("ListParam" + serviceId + '==' + userId + "=" + address);
        this.fetchData(serviceId);
    }
    fetchData = (serviceId) => {
        const { isDataAvailable } = this.state;
        console.log("listSer--" + serviceId)
        fetch(Constants.POST_URL + 'account_setup/service_user_list', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 'service_id': serviceId })
        }).then(function (response) {
            return response.json();
        }).then((result) => {
            //console.log(result);
            if (result.response_code === 200) {
                this.setState({ userData: result.service_user_list });
                this.setState({ isDataAvailable: true });
            } else {
                this.setState({ isDataAvailable: false });
            }
        }).catch((error) => {
            console.log("-------- error ------- " + error);
            alert("result:" + error)
        });
    }


    render() {
        const { isDataAvailable, userId, serviceId, address, userData } = this.state;
        const { navigation } = this.props;
        return (
            <View style={styles.container}>
                {isDataAvailable ?
                    (<View>
                        {
                            userData.map((data, index) => (
                                <ListItem
                                    key={index}
                                    leftAvatar={{ source: (data.image_path ? "" : Constants.DEFAULT_PROFILE_PICTURE) }}
                                    title={data.first_name + ' ' + data.last_name}
                                    chevron={true}
                                    topDivider={true}
                                    bottomDivider={true}
                                    booking_item_detail
                                    onPress={() => RootNavigation.navigate('ExecutiveProfile', { clientId: userId, executiveId: data.users_id, serviceId: serviceId, address: address, navigation: navigation })}
                                />
                            ))
                        }
                    </View>) : (
                        <View style={styles.noDataAvails}><Text style={{ color: "#708090", fontSize: 15 }} >No Users found..</Text></View>
                    )}
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    noDataAvails: {
        flexGrow: 1,
        padding: 20,
        width: '100%',

    }

});