import * as React from 'react';
import { Platform,StyleSheet,View,Image,Text,Dimensions } from 'react-native';
const rows = 4;
const cols = 4;
const marginH = 10;
const marginV = 10;
const width = (Dimensions.get('window').width / cols) - (marginH * (cols + 1));
const height = (Dimensions.get('window').height / rows) - (marginV * (rows + 1));

export default class CategoriesList extends React.Component{
    render(){
        return (
            <View style={styles.container}>
                <View style={styles.categoriesTextContainer}>
                    <Text style ={styles.categoriesText}>
                        Categories
                    </Text>
                </View>
                <View style={styles.imageContainer}>
                
                    <Image style={styles.logoImage}
                        source={require('../img/1.jpg')}
                    />
                     <Image style={styles.logoImage}
                        source={require('../img/2.png')}
                    />
                     <Image style={styles.logoImage}
                        source={require('../img/3.png')}
                    />
                     <Image style={styles.logoImage}
                        source={require('../img/4.jpg')}
                    />
                     <Image style={styles.logoImage}
                        source={require('../img/5.png')}
                    />
                     <Image style={styles.logoImage}
                        source={require('../img/6.png')}
                    />
                     <Image style={styles.logoImage}
                        source={require('../img/1.jpg')}
                    />
                     <Image style={styles.logoImage}
                        source={require('../img/2.png')}
                    />
                     <Image style={styles.logoImage}
                        source={require('../img/3.png')}
                    />
                     <Image style={styles.logoImage}
                        source={require('../img/4.jpg')}
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
        marginVertical :16
   },
   logoImage:{
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
   }
});