import * as React from 'react';
import { Platform, StyleSheet, View, Image, Text, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Rating, AirbnbRating } from 'react-native-ratings';

export default class CommentList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: [],
            commentsAvailable: false

        }
    }

    componentDidMount() {
        const { comments, commentsAvailable } = this.props.state;
        this.setState({ comments: comments, commentsAvailable: commentsAvailable });
    }
    render() {
        const { comments, commentsAvailable } = this.state;
        console.log("common-li"+JSON.stringify(this.state));
        return (
            <View style={styles.container}>
                <View style={styles.commentTextTileContainer}>
                    <Text style={styles.commentTextTile}>
                        <Icon style={styles.locationIcon} name="mode-comment" size={20} /> Comments & Rating
                        </Text>
                </View>
                <View style={styles.itemContainer}>
                    {commentsAvailable ?
                        (<View>
                            {
                                comments.map((data, index) => (
                                    <View style={styles.textContainer}>
                                        <View>
                                            <Text style={styles.commentText}>{data.comment}</Text>
                                        </View>

                                        <View>
                                            <Text style={styles.author}>by {data.first_name + ' ' + data.last_name}</Text>
                                        </View>
                                    </View>
                                ))
                            }
                        </View>) : (
                            <View><Text style={{ color: "#708090", fontSize: 15 }} >No comments found.</Text></View>
                        )}
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
        width: '100%'
    },
    itemContainer: {
        width: '100%',
        alignItems: 'flex-start',
        backgroundColor: '#ffffff',
        borderWidth: 1,
        borderColor: '#ddd',
    },
    textContainer: {
        padding: 10
    },
    executiveRating: {
    },
    rating: {
        marginTop: 10,
    },
    commentTextTileContainer: {
        padding: 10,
        marginTop: 15,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        width: '100%',
        backgroundColor: "#dddddd"
    },
    commentTextTile: {
        fontSize: 18,
        fontWeight: '500',
    },
    commentText: {
        fontSize: 16,
    },
    author: {
        fontSize: 12,
        paddingLeft: 10
    }

});