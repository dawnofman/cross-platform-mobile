import * as React from 'react';
import { Platform, StyleSheet,View,ScrollView} from 'react-native';
import SearchForm from '../components/SearchForm.js';
import CategoriesList from '../components/CategoriesList.js';
export default class SearchCategories extends React.Component{
    state = {
            searchText: 'Search for a service',
          };
    render(){
        return (
            <View style={styles.container}>
                <View style={styles.searchContainer}>
                   <SearchForm state={this.state} />
                </View>
                <View style={styles.scrollContainer}>
                   <ScrollView>
                        <CategoriesList />
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
    }
});

