import * as React from 'react';
import { Platform,StyleSheet,View,Image,Text,ScrollView} from 'react-native';
import { Rating, AirbnbRating } from 'react-native-ratings';

export default class ExecutiveListItem extends React.Component{
    render(){
        return (
                <View style={styles.container}>
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