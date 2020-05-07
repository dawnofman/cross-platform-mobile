import * as React from 'react';
import { Platform,StyleSheet,View,TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
export default class SearchForm extends React.Component{
    render(){
        return (
            <View style={styles.searchSection}>
                <Icon name="search" style={styles.searchIcon} size={20} color="#000"/>
                <TextInput
                    style ={styles.inputBox}
                    placeholder={this.props.state.searchText}
                />
            </View>
        );
    }
}
const styles = StyleSheet.create({
	 searchSection: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        marginVertical: 16,
        padding:0,
        borderRadius:5,
    },
    searchIcon: {
        paddingHorizontal: 20,
        width :'17%',
    },
    inputBox: {
        width :'83%',
        fontSize:16,
        borderColor:'#fff',
        borderWidth:0,
        color: '#000000',
        marginVertical: 16,
        padding:0
    },
});