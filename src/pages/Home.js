import * as React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import BannerSlider from '../components/BannerSlider.js';
import SearchForm from '../components/SearchForm.js';
import CategoriesList from '../components/CategoriesList.js';
import NotificationBanner from '../components/NotificationBanner.js';
import LoadingScreen from '../components/LoadingScreen.js';
import * as RootNavigation from "../../RootNavigation";
export default class Home extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      searchText: 'Search for a service',
      address: null,
      userId: null,
      updateAddress: null,
      isLoading: true,
      userAddress:null
    };
   // this.changeAddress = this.changeAddress.bind(this);
  }
  componentWillMount() {
    const { userData, userAddress } = this.props;
    this.setState({ address: userAddress, userId: userData.users_id });
    setTimeout(() => {
      this.setState({
        isLoading: false,
      });
    }, 2500);
  }
  
  /*
  changeAddress = (updateAddress) => {
    console.log("gg--" + updateAddress);
    this.setState({ address: updateAddress }, ()=> {alert (address)});
  }
*/

  render() {
    const { address, updateAddress, isLoading } = this.state;
    const { userAddress}= this.props
    //alert("render--"+updateAddress);
    //console.log("state---" + this.state.address + "-" + this.state.updateAddress);
    return (
      <View style={styles.container}>
        {isLoading ? (
          <LoadingScreen />
        ) : (false)}
        <View style={styles.searchContainer}>
          <View style={styles.locationContainer} >
            <Icon style={styles.locationIcon} name="location-on" size={20} onPress={() => RootNavigation.navigate('LocationDetector')} />
            <Text style={styles.locationText} numberOfLines={1}>
              {address}
            </Text>
          </View>
          <SearchForm state={this.state} userAddress={userAddress} />
        </View>
        <View style={styles.scrollContainer}>
          <ScrollView>
            <View style={styles.sliderContainer}>
              <BannerSlider />
            </View>
            <CategoriesList state={this.state} userAddress={userAddress}/>
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
