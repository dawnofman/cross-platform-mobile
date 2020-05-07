import * as React from 'react';
import { Platform, StyleSheet,View,ScrollView} from 'react-native';
import HelpDeskItemList from '../components/HelpDeskItemList.js';
import FooterTab1 from '../components/FooterTab1.js';
export default class HelpDesk extends React.Component{
    render(){
        return (
            <ScrollView>
                <View style={styles.container}>
                    <HelpDeskItemList />
                </View>
               <FooterTab1 />
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
	container: {
        justifyContent: 'center',
		alignItems: 'center',
    },
});
