import * as React from 'react';
import { Platform, Button, StyleSheet, Text, View, StatusBar, TextInput,ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import BannerSlider from '../components/BannerSlider.js';
import SearchForm from '../components/SearchForm.js';
import CategoriesList from '../components/CategoriesList.js';
import NotificationBanner from '../components/NotificationBanner.js';
import RefreshControl from '../components/RefreshControl.js';
export default class Home extends React.Component{
   state = {
            searchText: 'Search for a service',
          };
  
  
    render(){
       const { locationAddress } = this.props.route.params;
        return (
         <View style={styles.container}>
            <View style={styles.searchContainer}>
               <View style={styles.locationContainer} >
                   <Icon style={styles.locationIcon} name="location-on" size={20} onPress={() => this.props.navigation.navigate('LocationDetector')} />
                   <Text style={styles.locationText} numberOfLines={1}>
                      {locationAddress}
                   </Text>
                </View>
               <SearchForm state={this.state}  navigation={this.props.navigation} />
            </View>
            <View style={styles.scrollContainer}>
               <ScrollView>
                   <View style={styles.sliderContainer}>
                       <BannerSlider  />
                   </View>
                       <CategoriesList  navigation={this.props.navigation} />
                       <NotificationBanner />
               </ScrollView>
            </View>
         </View>
         
        );
    }
}

const styles = StyleSheet.create({
	container: {
      flex:1,
      alignItems: 'center',
   },
   locationContainer:{
      color:'#ffffff',
      flexDirection: 'row',
      width:'100%'
    },
    footerContainer:{
      flex:1,
      width:'100%',
      alignItems: 'center',
    },
    locationText:{
      width:'85%',
      fontSize:15,
    },
    locationIcon:{
      width:'10%',
      paddingLeft:10,
    },
    sliderContainer:{
        height:300,
        backgroundColor:'#f2f2f2',
    },
    searchContainer:{
      height:85,
      backgroundColor: '#1ba5d8',
      paddingHorizontal:10,
      alignItems: 'flex-start'
    },
    scrollContainer:{
      height:'85%'
    }
});
