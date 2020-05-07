import * as React from 'react';
import { Platform,StyleSheet,View,Image } from 'react-native';
import Gallery from 'react-native-image-gallery';

export default class BannerSlider extends React.Component{
     render(){
         return (
           <Gallery
                style={{ flex: 1, backgroundColor: '#ffffff' }}
                images={[
                  { source: { uri: 'http://i.imgur.com/XP2BE7q.jpg' } },
                  { source: { uri: 'http://i.imgur.com/5nltiUd.jpg' } },
                  { source: { uri: 'http://i.imgur.com/6vOahbP.jpg' } },
                  { source: { uri: 'http://i.imgur.com/kj5VXtG.jpg' } }
                ]}
              />
        );
    }
}
const styles = StyleSheet.create({
	container: {
		flexGrow: 1,
        justifyContent: 'flex-end',
		alignItems: 'center',
	},
});