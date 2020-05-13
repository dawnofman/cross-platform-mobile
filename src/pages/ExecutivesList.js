import * as React from 'react';
import { Platform, Button, StyleSheet, Text, View,ScrollView, StatusBar, TextInput} from 'react-native';
import SearchForm from '../components/SearchForm.js';
import ExecutiveListItem from '../components/ExecutiveListItem.js';
export default class ExecutivesList extends React.Component{
    state = {
            searchText: 'Search for a person',
          };
    render(){
        return (
            <View style={styles.container}>
                <View style={styles.searchContainer}>
                   <SearchForm state={this.state} />
                </View>
                <View style={styles.scrollContainer}>
                   <ScrollView styles={styles.scrollView}>
                        <ExecutiveListItem />
                   </ScrollView>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
	container: {
      flex:1,
      alignItems: 'center',
    },
    footerContainer:{
      flex:1,
      width:'100%',
      alignItems: 'center',
    },
    searchContainer:{
      height:120,
      backgroundColor: '#1ba5d8',
      paddingHorizontal:10,
      alignItems: 'flex-start',
      height:90
    },
    scrollContainer:{
      paddingBottom:30,
      height:'75%'
    },
    scrollView:{
        width:'100%'
    }
});
