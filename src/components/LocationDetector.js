import * as React from 'react';
import { StyleSheet, View, TextInput, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ListItem } from 'react-native-elements';
import * as RootNavigation from "../../RootNavigation";

export default class LocationDetector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      dataSource: [],
      dataExist: true,
    
    };
    this.onChangeText = this.onChangeText.bind(this);
    this.addAddress = this.addAddress.bind(this);
  }

  onChangeText = (input) => {
    this.setState({ input: input });
  };

  componentDidUpdate(prevProps, prevState) {
    const { input } = this.state;
    
    let key = 'AIzaSyAKBxvnKG2dKk9FOEgB5k15E-G4V5FtIUk';
    if (prevState.input !== input && input.length > 2) {
      fetch('https://maps.googleapis.com/maps/api/place/autocomplete/json?input=' + input + '&key=' + key, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
      }).then(function (response) {
        return response.json();
      }).then((result) => {
        console.log(result);
       // if (result.status === "OK") {
         // result.predictions =["Hagenberg","Linz","Salzburg"];
          this.setState({ dataExist: true });
          this.setState({ dataSource: result.predictions });
       /* } else {
          this.setState({ dataExist: false })
        }*/
      });
    }
  }
  addAddress = (data) => {
    const { updateUserData } = this.props;
    //console.log("Testinggggggg---" + onLoginStateChange);
    updateUserData(data);
  //  this.props.route.params.changeAddress("123");
    RootNavigation.navigate('Home') 
 ///   this.props.navigation.goBack();
  }

  render() {
    const { input, dataExist, dataSource } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.searchSection}>
          <Icon name="search" style={styles.searchIcon} size={15} color="#c1c1c1" />
          <TextInput
            style={styles.inputBox}
            placeholder='Search Location'
            value={input}
            onChangeText={this.onChangeText}
          />

        </View>
        {
          dataExist ? (<View>
            {
              dataSource.map((data, index) => (
                <ListItem
                  key={index}
                  title={data.description}
                  chevron={false}
                  topDivider={true}
                  bottomDivider={true}
                  onPress={() => { this.addAddress(data.description) }}
                />
              ))
            }
          </View>) : (<View style={styles.noDataContainer}><Text style={styles.noData}>No address found..</Text></View>)
        }
      </View>

    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,

  }, searchSection: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    marginVertical: 0,
    padding: 10,
    borderRadius: 2,
    height: 50,
  },
  searchIcon: {
    paddingLeft: 15,
    width: '15%',
  },
  inputBox: {
    width: '85%',
    fontSize: 14,
    borderColor: '#fff',
    borderWidth: 0,
    color: '#000000',
    padding: 0,
    height: 50,
  },
  noData: {
    color: "grey",

  },
  noDataContainer: {
    alignItems: "flex-start",
    justifyContent: "center",
    margin: 16,
  }
});