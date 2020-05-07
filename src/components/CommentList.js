import * as React from 'react';
import { Platform,StyleSheet,View,Image,Text,ScrollView} from 'react-native';
import { Rating, AirbnbRating } from 'react-native-ratings';

export default class CommentList extends React.Component{
    render(){
        return (
                <View style={styles.container}>
                    <View style={styles.commentTextTileContainer}>
                        <Text style ={styles.commentTextTile}>
                            Comments & Rating
                        </Text>
                    </View>
                    <View style={styles.itemContainer}>
                        <View style={styles.textContainer}>
                            <Text style={styles.commentText}>Best service ever I have seen..</Text>
                            <Text style={styles.executiveRating}>
                                <Rating
                                imageSize={15}
                                readonly
                                startingValue={3}
                                style={styles.rating}
                                />
                                <Text style={styles.author}>by Stephen johnson</Text>
                            </Text>
                        </View>
                    </View>
                    <View style={styles.itemContainer}>
                        <View style={styles.textContainer}>
                            <Text style={styles.commentText}>Best service ever I have seen..</Text>
                            <Text style={styles.executiveRating}>
                                <Rating
                                imageSize={15}
                                readonly
                                startingValue={3}
                                style={styles.rating}
                                />
                                <Text style={styles.author}>by Stephen johnson</Text>
                            </Text>
                        </View>
                    </View>
                    <View style={styles.itemContainer}>
                        <View style={styles.textContainer}>
                            <Text style={styles.commentText}>Best service ever I have seen..</Text>
                            <Text style={styles.executiveRating}>
                                <Rating
                                imageSize={15}
                                readonly
                                startingValue={3}
                                style={styles.rating}
                                />
                                <Text style={styles.author}>by Stephen johnson</Text>
                            </Text>
                        </View>
                    </View>
                    <View style={styles.itemContainer}>
                        <View style={styles.textContainer}>
                            <Text style={styles.commentText}>Best service ever I have seen..</Text>
                            <Text style={styles.executiveRating}>
                                <Rating
                                imageSize={15}
                                readonly
                                startingValue={3}
                                style={styles.rating}
                                />
                                <Text style={styles.author}>by Stephen johnson</Text>
                            </Text>
                        </View>
                    </View>
                    <View style={styles.itemContainer}>
                        <View style={styles.textContainer}>
                            <Text style={styles.commentText}>Best service ever I have seen..</Text>
                            <Text style={styles.executiveRating}>
                                <Rating
                                imageSize={15}
                                readonly
                                startingValue={3}
                                style={styles.rating}
                                />
                                <Text style={styles.author}>by Stephen johnson</Text>
                            </Text>
                        </View>
                    </View>
                </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    itemContainer:{
        flexDirection:'row',
        width:300,
        alignItems:'flex-start',
        backgroundColor:'#ffffff',
        borderWidth: 1,
        borderColor: '#ddd',
    },
    textContainer:{
        padding:10
    },
    executiveRating:{
    },
    rating:{
        marginTop :10,
    },
    commentTextTileContainer:{
        paddingVertical: 10,
        justifyContent: 'flex-start',
        alignItems: 'center',
        width:'100%',
    },
    commentTextTile: {
        fontSize:20,
        fontWeight: '500',
        padding:10
    },
    commentText:{
        fontSize:16,
    },
   author:{
    fontSize:12,
    paddingLeft:10
   }
   
});