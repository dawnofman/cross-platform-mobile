import * as React from 'react';
import { Platform,StyleSheet,View,Image,Text,Dimensions } from 'react-native';
const rows = 4;
const cols = 4;
const marginH = 2;
const marginV = 2;
const width = (Dimensions.get('window').width / cols) - (marginH * (cols + 1));
const height = (Dimensions.get('window').height / rows) - (marginV * (rows + 1));

export default class CategoriesList extends React.Component{
    render(){
        return (
            <View style={styles.container}>
                <View style={styles.categoriesTextContainer}>
                    <Text style ={styles.categoriesText}>
                        Services available in your area
                    </Text>
                </View>
                <View style={styles.imageContainer}>
                
                    <Image style={styles.serviceImage}
                        source={require('../../assets/img/1.jpg')}
                    />
                     <Image style={styles.serviceImage}
                        source={require('../../assets/img/2.png')}
                    />
                     <Image style={styles.serviceImage}
                        source={require('../../assets/img/3.png')}
                    />
                     <Image style={styles.serviceImage}
                        source={require('../../assets/img/4.jpg')}
                    />
                     <Image style={styles.serviceImage}
                        source={require('../../assets/img/5.png')}
                    />
                     <Image style={styles.serviceImage}
                        source={require('../../assets/img/6.png')}
                    />
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
        marginVertical:16,
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
        width: width,
        height: height,
        justifyContent: 'center',
        alignItems: 'center',
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