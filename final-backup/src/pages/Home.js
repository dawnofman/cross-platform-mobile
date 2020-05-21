import * as React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import BannerSlider from '../components/BannerSlider.js';
import SearchForm from '../components/SearchForm.js';
import CategoriesList from '../components/CategoriesList.js';
import NotificationBanner from '../components/NotificationBanner.js';
import * as RootNavigation from "../../RootNavigation";
export default class Home extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      searchText: 'Search for a service',
      address: null,
      userId: null
    };
  }
  componentWillMount() {
    const { userData } = this.props;
    this.setState({ address: userData.address, userId: userData.users_id });
    
    //    console.log(userData);
  }
  changeAddress = (updateAddress) => {
    this.setState({ address: updateAddress });
  }


  render() {
    const { address } = this.state;
    console.log("state---" + this.state.address + "-" + this.state.userId);
    return (
      <View style={styles.container}>
        <View style={styles.searchContainer}>
          <View style={styles.locationContainer} >
            <Icon style={styles.locationIcon} name="location-on" size={20} onPress={() => RootNavigation.navigate('LocationDetector', { changeAddress: this.changeAddress })} />
            <Text style={styles.locationText} numberOfLines={1}>
              {address}
            </Text>
          </View>
          <SearchForm state={this.state} />
        </View>
        <View style={styles.scrollContainer}>
          <ScrollView>
            <View style={styles.sliderContainer}>
              <BannerSlider />
            </View>
            <CategoriesList state={this.state} />
            <NotificationBanner />
          </ScrollView>
        </View>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  locationContainer: {
    color: '#ffffff',
    flexDirection: 'row',
    width: '100%'
  },
  footerContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },
  locationText: {
    width: '85%',
    fontSize: 15,
  },
  locationIcon: {
    width: '10%',
    paddingLeft: 10,
  },
  sliderContainer: {
    height: 300,
    backgroundColor: '#f2f2f2',
  },
  searchContainer: {
    height: 85,
    backgroundColor: '#1ba5d8',
    paddingHorizontal: 10,
    alignItems: 'flex-start'
  },
  scrollContainer: {
    height: '85%'
  }
});
