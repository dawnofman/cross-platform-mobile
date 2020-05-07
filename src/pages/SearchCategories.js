import * as React from 'react';
import { Platform, StyleSheet,View,ScrollView} from 'react-native';
import SearchForm from '../components/SearchForm.js';
import CategoriesList from '../components/CategoriesList.js';
import FooterTab1 from '../components/FooterTab1.js';
export default class SearchCategories extends React.Component{
    state = {
            searchText: 'Search for a service',
          };
    render(){
        return (
            <ScrollView>
                <View style={styles.container}>
                    <SearchForm state={this.state} />
                </View>
                <View>
                    <CategoriesList />
                </View>
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

