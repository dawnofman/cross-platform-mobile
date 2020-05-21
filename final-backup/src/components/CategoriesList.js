import * as React from 'react';
import { Platform,StyleSheet,View,Image,Text,Dimensions,TouchableOpacity } from 'react-native';
import * as Constants from '../constants';
import * as RootNavigation from "../../RootNavigation";

const rows = 4;
const cols = 4;
const marginH = 2;
const marginV = 2;
const width = (Dimensions.get('window').width / cols) - (marginH * (cols + 1));
const height = (Dimensions.get('window').height / rows) - (marginV * (rows + 1));

export default class CategoriesList extends React.Component{
    constructor(props){
        super(props);
        this.state={
            address:null,
            userId:null
        }
    }
    componentWillMount() {
        const { address, userId} = this.props.state;
        this.setState({ address: address, userId: userId });
        //    console.log(userData);
    }
    render(){
        const { address, userId} = this.state;
        return (
            <View style={styles.container}>
                <View style={styles.categoriesTextContainer}>
                    <Text style ={styles.categoriesText}>
                        Services available in your area
                    </Text>
                </View>
                <View style={styles.imageContainer}>
                    <TouchableOpacity onPress={() => RootNavigation.navigate('ExecutivesList', { serviceId: 1, userId: userId, address: address})} >
                    <Image style={styles.serviceImage}
                        source={require('../../assets/img/1.png')}
                     />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => RootNavigation.navigate('ExecutivesList', { serviceId: 2, userId: userId, address: address})} >
                     <Image style={styles.serviceImage}
                        source={require('../../assets/img/2.png')}
                     />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => RootNavigation.navigate('ExecutivesList', { serviceId: 3, userId: userId, address: address})} >
                     <Image style={styles.serviceImage}
                        source={require('../../assets/img/3.png')}
                     />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => RootNavigation.navigate('ExecutivesList', { serviceId: 4, userId: userId, address: address})} >
                     <Image style={styles.serviceImage}
                        source={require('../../assets/img/4.png')}
                    />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => RootNavigation.navigate('ExecutivesList', { serviceId: 5, userId: userId, address: address})} >
                     <Image style={styles.serviceImage}
                        source={require('../../assets/img/5.png')}
                    />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => RootNavigation.navigate('ExecutivesList', { serviceId: 6, userId: userId, address: address})} >
                     <Image style={styles.serviceImage}
                        source={require('../../assets/img/6.png')}
                    />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => RootNavigation.navigate('ExecutivesList',{serviceId:7, userId: userId, address: address})} >
                    <Image style={styles.serviceImage}
                        source={require('../../assets/img/7.png')}
                    />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => RootNavigation.navigate('ExecutivesList', { serviceId: 8, userId: userId, address: address})} >
                    <Image style={styles.serviceImage}
                        source={require('../../assets/img/8.png')}
                    />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#f7f7f7'
   },
   imageContainer:{
        flex : 1,
        flexDirection:'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginVertical :16,
        paddingHorizontal:12
   },
   serviceImage:{
        marginTop: marginV,
        marginBottom: marginV,
        marginLeft: marginH,
        marginRight: marginH,
        width: 80,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#ffffff'
   },
   categoriesTextContainer:{
        padding: 10,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        width:'100%',
   },
   categoriesText: {
         fontSize:20,
         fontWeight:'400'
   }
});