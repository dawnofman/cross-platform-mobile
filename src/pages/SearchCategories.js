import * as React from 'react';
import { Platform, StyleSheet, View, ScrollView } from 'react-native';
import SearchForm from '../components/SearchForm.js';
import CategoriesList from '../components/CategoriesList.js';

export default class SearchCategories extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchText: 'Search for a service',
      address:null,
      userId:null
    };
  }
  componentWillMount() {
    const { userData } = this.props;
    this.setState({ address: userData.address, userId: userData.users_id });
    //    console.log(userData);
  }
  render() {
    const { userAddress } = this.props;
    console.log("secg"+userAddress);
    return (
      <View style={styles.container}>
        <View style={styles.searchContainer}>
          <SearchForm state={this.state} userAddress={userAddress}  />
        </View>
        <View style={styles.scrollContainer}>
          <ScrollView>
            <CategoriesList state={this.state} userAddress={userAddress}  />
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
  footerContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },
  searchContainer: {
    backgroundColor: '#1ba5d8',
    paddingHorizontal: 10,
    alignItems: 'flex-start',
    //height: 90
  },
  scrollContainer: {
    paddingBottom: 30,
    height: '75%'
  }
});

