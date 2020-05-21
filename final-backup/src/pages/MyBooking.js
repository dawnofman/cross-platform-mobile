import * as React from 'react';
import { StyleSheet, View, Text, Image, Alert } from 'react-native';
import { ListItem, Overlay, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Entypo';
import Moment from 'moment';
import * as Constants from '../constants';
export default class MyBooking extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            isDataAvailable: false,
            bookingData: [],
            itemExecutiveName: '',
            itemWorkLocation: '',
            itemServiceId: '',
            itemServiceName: '',
            itemCancelId: '',
            itemBookingDate: '',
            popUpState: false,
            refresh: false,
            // bookingItemData:''
        }
        this.fetchData = this.fetchData.bind(this);
    }

    componentWillMount() {
        this.fetchData();
    }
    componentDidUpdate() {
        if (this.state.refresh) {
            this.fetchData()
        }
    }
    fetchData() {
        const { userData } = this.props;
        fetch(Constants.POST_URL + 'account_setup/booking_list', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 'id': userData.users_id })
        }).then(function (response) {
            return response.json();
        }).then((result) => {
            if (result.response_code === 200) {
                this.setState({ bookingData: result.booking_list, isDataAvailable: true });
            } else {
                this.setState({ isDataAvailable: false })
            }
        }).catch(function (error) {
            console.log("-------- error ------- " + error);
            alert("result:" + error)
        });
    }

    cancel_booking() {
        const { userData } = this.props;
        fetch(Constants.POST_URL + 'account_setup/cancel_booking', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 'booking_id': this.state.itemCancelId, 'client_id': userData.users_id })
        }).then(function (response) {
            return response.json();
        }).then((result) => {
            if (result.response_code === 200 && result.response_msg == 'success') {
                alert('Booking successfully cancelled..');
                this.setState({ refresh: true });
                this.toggleOverlay();
            } else {
                alert('Cancellation failed');
            }
        }).catch(function (error) {
            console.log("-------- error ------- " + error);
            alert("result:" + error)
        });
    }
    confirm_cancel_booking() {

        Alert.alert(
            'Confirmation',
            'Confirm Booking cancellation',
            [
                { text: 'Cancel', onPress: () => console.log('Cancel Pressed!') },
                { text: 'Yes', onPress: () => this.cancel_booking() },
            ],
            { cancelable: false }
        )
    }

    booking_item_detail = (data) => {
        console.log(data);
        this.setState({ 'itemExecutiveName': data.first_name + ' ' + data.last_name });
        this.setState({ 'itemWorkLocation': data.service_address });
        this.setState({ 'itemServiceId': data.service_id });
        this.setState({ 'itemServiceName': data.service_name });
        this.setState({ 'itemCancelId': data.booking_id });
        this.setState({ 'itemBookingDate': data.booking_date });
        this.setState({ popUpState: true });
    }
    toggleOverlay = () => {
        this.setState({ popUpState: false });
    }

    overlayContent = () => {
        const { itemExecutiveName, itemWorkLocation, itemServiceId, itemServiceName, popUpState, itemBookingDate } = this.state
        let dateNew = Moment(itemBookingDate.toString()).format('DD/MM/YYYY');
        return (popUpState ? (<Overlay onBackdropPress={this.toggleOverlay} isVisible={popUpState}>
            <View style={styles.overLaySize}>

                <View>
                    <Image style={styles.profilePic}
                        source={require('../../assets/img/profile-sample.jpg')}
                    />
                </View>
                <View>
                    <Text>{itemExecutiveName}</Text>
                </View>
                <View>
                    <Text>{itemServiceName}</Text>
                </View>
                <View style={styles.workLocation}>
                    <Text style={styles.workLocationText}><Icon name="location" size={20} /> {itemWorkLocation}</Text>
                </View>
                <View style={styles.workLocation}>
                    <Text>
                        <Icon name="calendar" size={15} /> {dateNew}
                    </Text>
                </View>
                <View style={styles.cancelButtton}>
                    <Button
                        title=" Cancel Booking"
                        type="solid"
                        onPress={() => this.confirm_cancel_booking()}
                    />
                </View>
            </View>
        </Overlay>) : (false));
    }


    render() {
        const { bookingData, isDataAvailable } = this.state;
        return (
            <View style={styles.container}>
                {isDataAvailable ?
                    (<View>
                        {
                            bookingData.map((data, index) => (
                                <ListItem
                                    key={index}
                                    leftAvatar={{ source: (data.image_path ? "" : Constants.DEFAULT_PROFILE_PICTURE) }}
                                    title={data.first_name + ' ' + data.last_name}
                                    subtitle={
                                        <View style={styles.subtitleView}>
                                            <Text style={styles.subText}>
                                                <Text style={styles.serviceText}>{data.service_name}</Text>
                                                <Text> service on </Text>
                                                <Text style={styles.DateText}>{Moment(data.booking_date.toString()).format('DD/MM/YYYY')}</Text>
                                            </Text>
                                        </View>
                                    }
                                    chevron={true}
                                    topDivider={true}
                                    bottomDivider={true}
                                    booking_item_detail
                                    onPress={() => this.booking_item_detail(data)}
                                />
                            ))
                        }
                    </View>) : (
                        <View style={styles.noDataAvails}><Text style={{ color: "#708090", fontSize: 15 }} >No Bookings found..</Text></View>
                    )}
                <View>
                    {this.overlayContent()}
                </View>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    profilePic: {
        height: 60,
        width: 60,
        borderRadius: 45,
        marginVertical: 16,
    },
    overLaySize: {
        height: 300,
        width: 250,
        alignItems: "center",
        justifyContent: "center"
    },
    cancelButtton: {
        marginVertical: 5,
    },
    workLocation: {
        flexDirection: "row",
        marginVertical: 5,
    },
    workLocationText: {
        fontSize: 15
    },
    noDataAvails: {
        width: '100%',
        height: '100%',
        alignItems: "center",
        justifyContent: "center",
        color: "#778899",
    },
    subText: {
        flexDirection: "row"
    },
    serviceText: {
        color: "green"
    },
    dateText: {
        color: "orange"
    }
});
