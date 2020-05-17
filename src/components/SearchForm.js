import * as React from 'react';
import { Platform,StyleSheet,View,TextInput,FlatList,Text ,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Constants from '../constants';

export default class SearchForm extends React.Component{
    

    render(){
        return (
            <TouchableOpacity style={styles.touchSearch} onPress={() => this.props.navigation.navigate('SearchLayout')}>
            <View style={styles.searchSection}>
                
                    <Icon name="search" style={styles.searchIcon} size={15} color="#c1c1c1"/>
                    <Text style ={styles.inputBox} >                  
                        Search for service
                    </Text>
                
            </View>
            </TouchableOpacity>
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
        marginVertical: 8,
        padding:0,
        borderRadius:2,
    },
    searchIcon: {
        paddingLeft: 15,
        width :'15%',
    },
    inputBox: {
        width :'85%',
        fontSize:14,
        borderColor:'#fff',
        borderWidth:0,
        color: 'grey',
        padding:0
    },
    touchSearch:{
        height:65
    }
});