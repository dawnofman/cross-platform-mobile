import * as React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import ExecutiveListItem from '../components/ExecutiveListItem.js';
import LoadingScreen from '../components/LoadingScreen.js';

export default class ExecutivesList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            searchText: 'Search for a person',
            serviceId: null,
            userId: null,
            address: null,
            isLoading: true,
        }
    }

    componentWillMount() {
        const { serviceId, userId, address } = this.props.route.params;
        this.setState({ serviceId: serviceId, userId: userId, address: address });
        setTimeout(() => {
            this.setState({
                isLoading: false,
            });
        }, 2500);
    }

    render() {
        console.log("lis---" + this.state.serviceId + "---" + this.state.userId + "---" + this.state.address);
        const { isLoading } = this.state;
        return (
            <View style={styles.container}>
                {isLoading ? (
                    <LoadingScreen />
                ) : (false)}
                <View style={styles.scrollContainer}>
                    <ScrollView styles={styles.scrollView}>
                        <ExecutiveListItem styles={styles.executiveListItem} navigation={this.props.navigation} state={this.state} />
                    </ScrollView>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    scrollContainer: {
        width: '100%',
    },
    executiveListItem: {
        flex: 1,
        width: '100%'
    }
});
