import * as React from 'react';
import { Platform, Button, StyleSheet, Text, View, StatusBar, TextInput,ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FooterTab from '../components/FooterTab.js';
import BannerSlider from '../components/BannerSlider.js';
import SearchForm from '../components/SearchForm.js';
import CategoriesList from '../components/CategoriesList.js';
import NotificationBanner from '../components/NotificationBanner.js';
import FooterTab1 from '../components/FooterTab1.js';
export default class Home extends React.Component{
   state = {
            searchText: 'Search for a service',
          };
    render(){
        return (
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.locationContainer}>
                        <Icon style={styles.locationIcon} name="location-on" size={25} />
                        <Text style={styles.locationText}>
                           Hagenberg, Upper Austria
                        </Text>
                     </View>
                    <SearchForm state={this.state} />
                </View>
                <View style={styles.sliderContainer}>
                    <BannerSlider />
                </View>
                <View>
                    <CategoriesList />
                </View>
                <View>
                    <NotificationBanner />
                </View>
                  <FooterTab1 />
            </ScrollView>
         
        );
    }
}

const styles = StyleSheet.create({
	container: {
      flex:1,
      alignItems: 'flex-start',
      backgroundColor: '#1ba5d8',
      paddingHorizontal:20,
   },
    locationContainer:{
      color:'#ffffff',
      marginTop:10,
      flexDirection: 'row',
      width:'100%'
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
    }
});
