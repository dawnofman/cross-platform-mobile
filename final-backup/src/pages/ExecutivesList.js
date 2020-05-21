import * as React from 'react';
import {StyleSheet,View, ScrollView} from 'react-native';
import ExecutiveListItem from '../components/ExecutiveListItem.js';


export default class ExecutivesList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            searchText: 'Search for a person',
            serviceId: null,
            userId:null,
            address:null
        }
    }

    componentWillMount() {
        const { serviceId, userId, address} = this.props.route.params;
        this.setState({ serviceId: serviceId, userId: userId, address: address});
       
    }
    
    render() {
        console.log("lis---" + this.state.serviceId + "---" + this.state.userId + "---" + this.state.address);
        return (
            <View style={styles.container}>
                <View style={styles.scrollContainer}>
                    <ScrollView styles={styles.scrollView}>
                        <ExecutiveListItem styles={styles.executiveListItem} state={this.state}/>
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
    scrollContainer:{
        width:'100%',
    },
    executiveListItem:{
        flex:1,
        width:'100%'
    }
});
