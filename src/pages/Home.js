import * as React from 'react';
import { Platform, Button, StyleSheet, Text, View, StatusBar, TextInput,ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import BannerSlider from '../components/BannerSlider.js';
import SearchForm from '../components/SearchForm.js';
import CategoriesList from '../components/CategoriesList.js';
import NotificationBanner from '../components/NotificationBanner.js';
export default class Home extends React.Component{
   state = {
            searchText: 'Search for a service',
            address :'Hagenberg, Upper Austria'
          };
    address ='Hagenberg, Upper Austria';
    render(){
        return (
         <View style={styles.container}>
            <View style={styles.searchContainer}>
               <View style={styles.locationContainer}>
                   <Icon style={styles.locationIcon} name="location-on" size={25} 
                       onPress={() => this.props.navigation.navigate('LocationDetector')}
                   />
                   <Text style={styles.locationText}>
                      {this.address}
                   </Text>
                </View>
               <SearchForm state={this.state} />
            </View>
            <View style={styles.scrollContainer}>
               <ScrollView>
                   <View style={styles.sliderContainer}>
                       <BannerSlider />
                   </View>
                       <CategoriesList />
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
      marginTop:10,
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
      fontSize:18,
    },
    locationIcon:{
      width:'10%',
      marginLeft:10,
    },
    sliderContainer:{
        height:300,
        backgroundColor:'#f2f2f2',
        marginVertical:16,
    },
    searchContainer:{
      height:130,
      backgroundColor: '#1ba5d8',
      paddingHorizontal:10,
      alignItems: 'flex-start'
    },
    scrollContainer:{
      marginBottom:'10%',
      height:'75%'
    }
});
