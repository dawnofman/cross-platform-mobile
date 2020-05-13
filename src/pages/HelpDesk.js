import * as React from 'react';
import { Platform, StyleSheet,View,ScrollView} from 'react-native';
import HelpDeskItemList from '../components/HelpDeskItemList.js';
export default class HelpDesk extends React.Component{
    render(){
        return (
            <View style={styles.container}>
                <View style={styles.scrollContainer}>
                   <ScrollView>
                            <HelpDeskItemList />
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
    scrollContainer:{
      paddingBottom:30,
      height:'95%'
    }
});
