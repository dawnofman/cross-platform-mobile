import * as React from 'react';
import { Platform, Button, StyleSheet, Text, View,ScrollView, StatusBar, TextInput} from 'react-native';
import SearchForm from '../components/SearchForm.js';
import ExecutiveListItem from '../components/ExecutiveListItem.js';
import FooterTab1 from '../components/FooterTab1.js';
export default class ExecutivesList extends React.Component{
    state = {
            searchText: 'Search for a person',
          };
    render(){
        return (
            <ScrollView>
                <View style={styles.container}>
                    <SearchForm state={this.state} />
                </View>
                <ExecutiveListItem/>
                <FooterTab1 />
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
	container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1ba5d8',
        margin:0
	},
});
