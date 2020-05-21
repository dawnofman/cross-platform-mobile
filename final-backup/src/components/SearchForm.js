import * as React from 'react';
import { Platform, StyleSheet, View, TextInput, FlatList, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as RootNavigation from '../../RootNavigation';

export default class SearchForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: null,
            address:null
        }
    }
    componentWillMount() {
        const { userId,address } = this.props.state;
        this.setState({ userId: userId, address: address });
    }
    render() {
        const { userId, address } = this.state;
        console.log("Form---"+userId+"---"+address);
        return (
            <TouchableOpacity style={styles.touchSearch} onPress={() => RootNavigation.navigate('SearchLayout', { userId: userId, address: address })}>
                <View style={styles.searchSection}>
                    <Icon name="search" style={styles.searchIcon} size={15} color="#c1c1c1" />
                    <Text style={styles.inputBox}>
                        Search for service
                    </Text>
                </View>
            </TouchableOpacity>
        );
    }
}
const styles = StyleSheet.create({
    searchSection: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        marginVertical: 8,
        padding: 0,
        borderRadius: 2,
    },
    searchIcon: {
        paddingLeft: 15,
        width: '15%',
    },
    inputBox: {
        width: '85%',
        fontSize: 14,
        borderColor: '#fff',
        borderWidth: 0,
        color: 'grey',
        padding: 0
    },
    touchSearch: {
        height: 65
    }
});