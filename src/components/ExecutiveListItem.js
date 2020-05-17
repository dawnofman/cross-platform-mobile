import * as React from 'react';
import { Platform,StyleSheet,View,Image,Text,ScrollView,TouchableOpacity} from 'react-native';
import { Rating, AirbnbRating } from 'react-native-ratings';
import * as Constants from '../constants';

export default class ExecutiveListItem extends React.Component{
    constructor(props) {
        super(props);
        
         
    }
       componentWillMount(){
           fetch(Constants.POST_URL+'account_setup/service_user_list',{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({'service_id':this.props.state.service})
        }).then(function (response) {
            return response.json();
        }).then(function (result) {
            console.log(result) ;
            if(result.response_code == '200' && result.response_msg =='success'){
               // login();
            }else{
                alert(
                    'Login failed',
                    result.response_msg,
                )

            }
        }).catch(function (error) {
            console.log("-------- error ------- "+error);
            alert("result:"+error)
        });
    }

    render(){
        return (
            
                <View style={styles.container}>
                   <TouchableOpacity onPress={() => this.props.navigation.navigate('ExecutiveProfile',{'user_id':'1'})} > 
                        <View style={styles.itemContainer}>
                            <View style={styles.imageContainer}>
                                <Image style={styles.listImage}
                                source={require('../../assets/img/profile-sample.jpg')}
                                />
                            </View>
                            <View style={styles.textContainer}>
                                <Text style={styles.executiveName}>Dummy Name{this.props.state.service}</Text>
                                <Rating
                                    imageSize={20}
                                    readonly
                                    startingValue={3}
                                    style={styles.rating}
                                    />    
                            </View>
                         </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('ExecutiveProfile')} > 
                        <View style={styles.itemContainer}>
                            <View style={styles.imageContainer}>
                                <Image style={styles.listImage}
                                source={require('../../assets/img/profile-sample.jpg')}
                                />
                            </View>
                            <View style={styles.textContainer}>
                                <Text style={styles.executiveName}>Dummy Name</Text>
                                <Rating
                                    imageSize={20}
                                    readonly
                                    startingValue={3}
                                    style={styles.rating}
                                    />    
                            </View>
                         </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('ExecutiveProfile')} > 
                        <View style={styles.itemContainer}>
                            <View style={styles.imageContainer}>
                                <Image style={styles.listImage}
                                source={require('../../assets/img/profile-sample.jpg')}
                                />
                            </View>
                            <View style={styles.textContainer}>
                                <Text style={styles.executiveName}>Dummy Name</Text>
                                <Rating
                                    imageSize={20}
                                    readonly
                                    startingValue={3}
                                    style={styles.rating}
                                    />    
                            </View>
                         </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('ExecutiveProfile')} > 
                        <View style={styles.itemContainer}>
                            <View style={styles.imageContainer}>
                                <Image style={styles.listImage}
                                source={require('../../assets/img/profile-sample.jpg')}
                                />
                            </View>
                            <View style={styles.textContainer}>
                                <Text style={styles.executiveName}>Dummy Name</Text>
                                <Rating
                                    imageSize={20}
                                    readonly
                                    startingValue={3}
                                    style={styles.rating}
                                    />    
                            </View>
                         </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('ExecutiveProfile')} > 
                        <View style={styles.itemContainer}>
                            <View style={styles.imageContainer}>
                                <Image style={styles.listImage}
                                source={require('../../assets/img/profile-sample.jpg')}
                                />
                            </View>
                            <View style={styles.textContainer}>
                                <Text style={styles.executiveName}>Dummy Name</Text>
                                <Rating
                                    imageSize={20}
                                    readonly
                                    startingValue={3}
                                    style={styles.rating}
                                    />    
                            </View>
                         </View>
                    </TouchableOpacity>
            </View>
                
        );
    }
}
const styles = StyleSheet.create({
	container: {
		flexGrow: 1,
        justifyContent: 'center',
		alignItems: 'center',
    },
    itemContainer:{
        flexDirection:'row',
        width:'100%',
        alignItems:'flex-start',
        height:80,
        marginVertical:2,
        backgroundColor:'#ffffff',
        borderWidth: 1,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
    },
    listImage:{
        height:75,
        width:75,
        margin:2
    },
    imageContainer:{
       width:'20%' 
    },
    textContainer:{
        width:'80%',
        justifyContent: 'flex-start',
		alignItems: 'flex-start',
    },
    executiveName:{
        fontSize:20,
        fontWeight: '500',
        padding:10
    },
    executiveRating:{
        paddingHorizontal :10
    },
    rating:{
        paddingHorizontal:10
    }
    
});