import * as React from 'react';
import { Platform,StyleSheet,View,Image,Text,ScrollView} from 'react-native';
import { Rating, AirbnbRating } from 'react-native-ratings';

export default class ExecutiveListItem extends React.Component{
    render(){
        return (
            <View style={styles.container}>
            <ScrollView>
                <View style={styles.itemContainer}>
                    <View style={styles.imageContainer}>
                        <Image style={styles.listImage}
                            source={require('../img/profile-sample.jpg')}
                        />
                    </View>
                    <View style={styles.textContainer}>
                       <Text style={styles.executiveName}>Dummy Name</Text>
                       <Text style={styles.executiveRating}>
                            <Rating
                                imageSize={20}
                                readonly
                                startingValue={3}
                                style={styles.rating}
                              />    
                        </Text>
                    </View>
                </View>
                <View style={styles.itemContainer}>
                    <View style={styles.imageContainer}>
                        <Image style={styles.listImage}
                            source={require('../img/profile-sample.jpg')}
                        />
                    </View>
                    <View style={styles.textContainer}>
                       <Text style={styles.executiveName}>Dummy Name</Text>
                       <Text style={styles.executiveRating}>
                            <Rating
                                imageSize={20}
                                readonly
                                startingValue={3}
                                style={styles.rating}
                              />    
                        </Text>
                    </View>
                </View>
                <View style={styles.itemContainer}>
                    <View style={styles.imageContainer}>
                        <Image style={styles.listImage}
                            source={require('../img/profile-sample.jpg')}
                        />
                    </View>
                    <View style={styles.textContainer}>
                       <Text style={styles.executiveName}>Dummy Name</Text>
                       <Text style={styles.executiveRating}>
                            <Rating
                                imageSize={20}
                                readonly
                                startingValue={3}
                                style={styles.rating}
                              />    
                        </Text>
                    </View>
                </View>
                <View style={styles.itemContainer}>
                    <View style={styles.imageContainer}>
                        <Image style={styles.listImage}
                            source={require('../img/profile-sample.jpg')}
                        />
                    </View>
                    <View style={styles.textContainer}>
                       <Text style={styles.executiveName}>Dummy Name</Text>
                       <Text style={styles.executiveRating}>
                            <Rating
                                imageSize={20}
                                readonly
                                startingValue={3}
                                style={styles.rating}
                              />    
                        </Text>
                    </View>
                </View>
                <View style={styles.itemContainer}>
                    <View style={styles.imageContainer}>
                        <Image style={styles.listImage}
                            source={require('../img/profile-sample.jpg')}
                        />
                    </View>
                    <View style={styles.textContainer}>
                       <Text style={styles.executiveName}>Dummy Name</Text>
                       <Text style={styles.executiveRating}>
                            <Rating
                                imageSize={20}
                                readonly
                                startingValue={3}
                                style={styles.rating}
                              />    
                        </Text>
                    </View>
                </View>
                <View style={styles.itemContainer}>
                    <View style={styles.imageContainer}>
                        <Image style={styles.listImage}
                            source={require('../img/profile-sample.jpg')}
                        />
                    </View>
                    <View style={styles.textContainer}>
                       <Text style={styles.executiveName}>Dummy Name</Text>
                       <Text style={styles.executiveRating}>
                            <Rating
                                imageSize={20}
                                readonly
                                startingValue={3}
                                style={styles.rating}
                              />    
                        </Text>
                    </View>
                </View>
                <View style={styles.itemContainer}>
                    <View style={styles.imageContainer}>
                        <Image style={styles.listImage}
                            source={require('../img/profile-sample.jpg')}
                        />
                    </View>
                    <View style={styles.textContainer}>
                       <Text style={styles.executiveName}>Dummy Name</Text>
                       <Text style={styles.executiveRating}>
                            <Rating
                                imageSize={20}
                                readonly
                                startingValue={3}
                                style={styles.rating}
                              />    
                        </Text>
                    </View>
                </View>
                </ScrollView>
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
        width:300,
        alignItems:'flex-start',
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
        height:70,
        width:70,
    },
    imageContainer:{
        
        
    },
    textContainer:{
        
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
        
    }
    
});