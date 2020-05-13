import React from 'react';
import { Image, Text } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
 
 
export default class LocationDetector extends React.Component{
	 key = 'AIzaSyAKBxvnKG2dKk9FOEgB5k15E-G4V5FtIUk';
	 render(){
	  return (
	    	
<GooglePlacesAutocomplete
      placeholder='Search'
      minLength={3} // minimum length of text to search
      autoFocus={false}
      returnKeyType={'search'} // Can be left out for default return key https://facebook.github.io/react-native/docs/textinput.html#returnkeytype
      keyboardAppearance={'light'} // Can be left out for default keyboardAppearance https://facebook.github.io/react-native/docs/textinput.html#keyboardappearance
      listViewDisplayed='auto'    // true/false/undefined
      fetchDetails={true}
      renderDescription={row => row.description} // custom description render
      onPress={(data, details = null) => {  
        console.log(data, details);
		if(this.props.onLocationPicked)     
			this.props.onLocationPicked(details)
      }}
      getDefaultValue={() => ''}

      query={{
        // available options: https://developers.google.com/places/web-service/autocomplete
        key: 'AIzaSyAKBxvnKG2dKk9FOEgB5k15E-G4V5FtIUk',
        language: 'en', // language of the results
        types: 'address' // default: 'geocode'
      }}

      styles={{
        textInputContainer: {
          width: '100%'
        },
        description: {
          fontWeight: 'bold'
        },
        predefinedPlacesDescription: {
          color: '#1faadb'
        }
      }}

      currentLocation={true} // Will add a 'Current location' button at the top of the predefined places list
      currentLocationLabel="Current location"
      nearbyPlacesAPI='GooglePlacesSearch' // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
      GoogleReverseGeocodingQuery={{
        // available options for GoogleReverseGeocoding API : https://developers.google.com/maps/documentation/geocoding/intro
      }}
      GooglePlacesSearchQuery={{
        // available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
        rankby: 'distance',
       	type: 'cafe'
      }}
      
      GooglePlacesDetailsQuery={{
        // available options for GooglePlacesDetails API : https://developers.google.com/places/web-service/details
        fields: 'formatted_address',
      }}

      filterReverseGeocodingByTypes={['locality', 'administrative_area_level_3']} // filter the reverse geocoding results by types - ['locality', 'administrative_area_level_3'] if you want to display only cities
     // predefinedPlaces={[homePlace, workPlace]}

      debounce={200} // debounce the requests in ms. Set to 0 to remove debounce. By default 0ms.
     // renderRightButton={() => <Text>Custom text after the input</Text>}
    /> 

	  );
	}
	 
}