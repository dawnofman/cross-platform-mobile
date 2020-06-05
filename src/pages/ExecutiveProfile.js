import * as React from 'react';
import { Platform, Button, StyleSheet, Text, View, ScrollView, TouchableOpacity, Alert } from 'react-native';
import CommentList from '../components/CommentList.js';
import ProfilePicture from '../components/ProfilePicture.js';
import Icon from 'react-native-vector-icons/Entypo';
import DatePicker from "react-native-datepicker";
//import { NavigationActions } from '@react-navigation';
import * as RootNavigation from "../../RootNavigation";
import LoadingScreen from '../components/LoadingScreen.js';
import Moment from 'moment';
import * as Constants from '../constants';

export default class ExecutiveProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            executiveId: null,//        RootNavigation.state.params.serviceId,
            clientId: null,
            serviceId: null,
            address: null,
            dataSource: [],
            dateVisibility: false,
            bookingDate: null,
            isLoading: true,
            comments: [],
            commentsAvailable: false
        }
    }

    componentWillMount() {
        setTimeout(() => {
            this.setState({
                isLoading: false,
            });
        }, 2500);
        const { clientId, executiveId, serviceId, address } = this.props.route.params;
        this.setState({ executiveId: executiveId, clientId: clientId, serviceId: serviceId, address: address });
        ;
        fetch(Constants.POST_URL + 'account_setup/profile_details', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 'id': executiveId })
        }).then(function (response) {
            return response.json();
        }).then((result) => {
            if (result.response_code === 200) {
                this.setState({ dataSource: result.profile_details });
                console.log("commt" + JSON.stringify(result.comments) + '--' + result.comments.length);
                if (result.comments.length > 0) {
                    this.setState({ comments: result.comments, commentsAvailable: true });
                } else {
                    if (this.commentsAvailable) {
                        this.setState({ commentsAvailable: false });
                    }
                }
            } else {
                alert(
                    'Login failed',
                    result.response_msg,
                )

            }
        }).catch(function (error) {
            console.log("-------- error ------- " + error);
            alert("result:" + error)
        });
    }

    booking() {
        Alert.alert(
            'Confirmation',
            'Confirm Booking',
            [
                { text: 'Cancel', onPress: () => console.log('Cancel Pressed!') },
                { text: 'Yes', onPress: () => this.confirm_booking() },
            ],
            { cancelable: false }
        )
    }

    confirm_booking() {
        const { clientId, executiveId, serviceId, address, bookingDate } = this.state;
        const { navigation } = this.props.route.params;
        console.log(this.props.route.params);
        console.log("Testin--" + JSON.stringify(this.state))
        //  console.log(JSON.stringify({ 'booking_date': bookingDate, 'booking_location': address, 'client_id': clientId, 'service_id': serviceId, 'executive_id': executiveId }));
        fetch(Constants.POST_URL + 'account_setup/book_executive', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 'booking_date': bookingDate, 'booking_location': address, 'client_id': clientId, 'service_id': serviceId, 'executive_id': executiveId })
        }).then(function (response) {
            return response.json();
        }).then((result) => {
            console.log(result);
            if (result.response_code === 200 && result.response_msg === 'success') {
                Alert.alert(
                    'Confirmation',
                    'Successfully Booked',
                    [
                        {
                            text: 'ok', onPress: () => navigation.navigate('Home')
                        },
                    ],
                    { cancelable: false }
                )
            } else {
                alert(
                    'Login failed',
                    result.response_msg,
                )
            }
        }).catch(function (error) {
            console.log("-------- error ------- " + error);
            alert("result:" + error)
        });
    }

    showDatePicker = () => {
        this.setState({ dateVisibility: true });
        //  setDatePickerVisibility(true);
    };

    hideDatePicker = () => {
        if (this.state.dateVisibility) {
            this.setState({ dateVisibility: false });
        }
        //  setDatePickerVisibility(false);
    };
    handleConfirm = (date) => {
        const newDate = Moment(date.toString()).format('DD/MM/YYYY');
        this.setState({ bookingDate: newDate, dateColor: { color: 'green' } });
    }
    render() {
        const { dataSource, address, dateVisibility, bookingDate, isLoading, commentsAvailable, comments } = this.state;
        let currentDate = new Date();
        return (
            <View style={styles.container}>
                {isLoading ? (
                    <LoadingScreen />
                ) : (false)}
                <View style={{ width: '100%' }}>
                    <ScrollView styles={styles.scrollView}>
                        <View style={styles.container}>
                            <View style={styles.profilePictureContainer}>
                                <ProfilePicture />
                            </View>
                            <View>
                                <Text>
                                    {dataSource.first_name + ' ' + dataSource.last_name}
                                </Text>
                            </View>
                            <View>
                                <Text>
                                    {dataSource.service_name}
                                </Text>
                            </View>
                            <View>
                                <Text>
                                    <Icon style={styles.locationIcon} name="location" size={15} /> {address}
                                </Text>
                            </View>
                            <View style={{ padding: 10 }}>
                                <DatePicker
                                    style={{ width: 200 }}
                                    date={bookingDate}
                                    placeholder="select date"
                                    format="DD/MM/YYYY"
                                    minDate={currentDate}
                                    isVisible={dateVisibility}
                                    confirmBtnText="Confirm"
                                    cancelBtnText="Cancel"
                                    mode="date"
                                    onDateChange={(date) => { this.setState({ bookingDate: date }) }}
                                />
                            </View>
                        </View>
                        <View style={{ width: '100%', alignItems: "center", justifyContent: "center" }}>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => this.booking()}
                            >
                                <Text style={styles.buttonText}>Book Executive</Text>
                            </TouchableOpacity>
                        </View>
                        <View styles={styles.CommentContainer}>

                            <View>
                                <View style={styles.commentTextTileContainer}>
                                    <Text style={styles.commentTextTile}>
                                        <Icon style={styles.locationIcon} name="message" size={20} /> Comments
                                    </Text>
                                </View>
                                <View style={styles.itemContainer}>
                                    {commentsAvailable ?
                                        (<View>
                                            {
                                                comments.map((data, index) => (
                                                    <View style={styles.textContainer}>
                                                        <View>
                                                            <Text style={styles.commentText}>{data.comment}</Text>
                                                        </View>

                                                        <View>
                                                            <Text style={styles.author}>by {data.first_name + ' ' + data.last_name}</Text>
                                                        </View>
                                                    </View>
                                                ))
                                            }
                                        </View>) : (
                                            <View><Text style={{ color: "#708090", fontSize: 15,padding:10 }} >No comments found.</Text></View>
                                        )}
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    profilePictureContainer: {
        marginTop: 50
    },
    container: {
        flex: 1,
        alignItems: 'center',
    },
    CommentContainer: {
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    button: {
        alignItems: "center",
        backgroundColor: "green",
        borderRadius: 5,
        justifyContent: 'center',
        paddingVertical: 10,
        width: 300,
    },
    buttonText: {
        fontSize: 16,
        color: '#ffffff',
    },
    commentTextTileContainer: {
        padding: 10,
        marginTop: 15,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        width: '100%',
        backgroundColor: "#dddddd"
    },
    commentTextTile: {
        fontSize: 18,
        fontWeight: '500',
    },
    commentText: {
        fontSize: 16,
    },
    author: {
        fontSize: 12,
        paddingLeft: 10
    },  
    itemContainer: {
        width: '100%',
        alignItems: 'flex-start',
        backgroundColor: '#ffffff',
        borderWidth: 1,
        borderColor: '#ddd',
        padding:10,
    },
});
