import * as React from 'react';
import { Platform,StyleSheet,View,Image } from 'react-native';
import Gallery from 'react-native-image-gallery';

export default class BannerSlider extends React.Component{
     render(){
         return (<Gallery style={{ flex: 1, backgroundColor: '#ffffff',margin:0 }}
                //http://kaliinctech.comjaymaumau.com/wajeh/doorstep/application/assets/img
                images={[
                  { source: { uri: 'https://alianzaconstructiva.com/wp-content/uploads/2019/01/servise-image-6.jpg' } },
                  { source: { uri: 'http://ah-contractinggroup.com/wp-content/uploads/2020/02/4-1536x1025.jpg' } },
                  { source: { uri: 'http://www.festivals-worldwide.com/wp-content/uploads/2020/03/1_gD_D3rKYnki9kszT8K3z3A.jpeg' } },
                  { source: { uri: 'http://bnbtechservices.com/wp-content/uploads/2015/05/carpentry-services.jpg' } },
                  { source: { uri: 'https://static.cms.yp.ca/ecms/media/1/19291783_lel-1444356681-600x360.jpg' } },
                  { source: { uri: 'https://www.dtgv.de/wp-content/uploads/sites/4/2015/05/Fitness-Studios-2015-Foto-Website-500x0-c-default.jpg' } }
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
        margin:0
	},
});