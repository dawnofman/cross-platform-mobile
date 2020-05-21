import * as React from 'react';
import { Platform,StyleSheet,View,Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
export default class HelpDeskItemList extends React.Component{
    render(){
        return (
            <View style={styles.container}>
                <View style={styles.itemContainer}>
                    <View style={styles.textContainer}>
                        <Text style={styles.helpText}>How can I communciate customer care?</Text>
                        <Text style={styles.arrow}>
                            <Icon name="chevron-right" style={styles.nextIcon} size={20} color="#ddd" />
                        </Text>
                    </View>
                </View>
                 <View style={styles.itemContainer}>
                    <View style={styles.textContainer}>
                        <Text style={styles.helpText}>How can I communciate customer care?</Text>
                        <Text style={styles.arrow}>
                            <Icon name="chevron-right" style={styles.nextIcon} size={20} color="#ddd" />
                        </Text>
                    </View>
                </View>
                 <View style={styles.itemContainer}>
                    <View style={styles.textContainer}>
                        <Text style={styles.helpText}>How can I communciate customer care?</Text>
                        <Text style={styles.arrow}>
                            <Icon name="chevron-right" style={styles.nextIcon} size={20} color="#ddd" />
                        </Text>
                    </View>
                </View>
                 <View style={styles.itemContainer}>
                    <View style={styles.textContainer}>
                        <Text style={styles.helpText}>How can I communciate customer care?</Text>
                        <Text style={styles.arrow}>
                            <Icon name="chevron-right" style={styles.nextIcon} size={20} color="#ddd" />
                        </Text>
                    </View>
                </View>
                 <View style={styles.itemContainer}>
                    <View style={styles.textContainer}>
                        <Text style={styles.helpText}>How can I communciate customer care?</Text>
                        <Text style={styles.arrow}>
                            <Icon name="chevron-right" style={styles.nextIcon} size={20} color="#ddd" />
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
        width:'100%',
        backgroundColor:'#ffffff',
        borderWidth: 1,
        borderColor: '#ddd',
        padding:10
    },
    textContainer:{
        marginTop:10,
        flexDirection:'row',
    },
    helpText:{
        fontSize:16,
        width:'90%',
        alignItems:'flex-start',
    },
    arrow:{
        width:'10%',
        marginVertical:10,
        marginLeft:20
    },
    nextIcon:{
        height:25
    }
});