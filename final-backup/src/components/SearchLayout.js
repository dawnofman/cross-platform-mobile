import * as React from 'react';
import { StyleSheet, View, TextInput,Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Constants from '../constants';
import { ListItem } from 'react-native-elements';
import * as RootNavigation from "../../RootNavigation";

export default class SearchLayout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            dataSource: [],
            dataExist: true,
            userId :null,
            address:null
        };
        this.onChangeText = this.onChangeText.bind(this);
    }

    onChangeText = (input) => {
        this.setState({ input: input });
    };
     
    componentDidMount(){
        const { userId,address } = this.props.route.params;
        this.setState({ userId: userId,address:address});
    }
    componentDidUpdate(prevProps, prevState) {
        const { input } = this.state;

        if (prevState.input !== input && input.length > 2) {
            fetch(Constants.POST_URL + 'account_setup/service_categories_list', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ 'request_type': 'service_list', 'service_name': input })
            }).then(function (response) {
                return response.json();
            }).then((result) => {
                if (result.response_code === 200) {
                    this.setState({ dataExist: true });
                    this.setState({ dataSource: result.service_list });
                } else {
                    this.setState({ dataExist: false })
                }
            });
        }
    }


    render() {
        const { input, dataSource, dataExist,userId,address } = this.state;
        console.log("src--" + userId+"=="+address);
        return (
            <View style={styles.container}>
                <View style={styles.searchSection}>
                    <Icon name="search" style={styles.searchIcon} size={15} color="#c1c1c1" />
                    <TextInput
                        style={styles.inputBox}
                        placeholder='Search service'
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
                                    title={data.service_name}
                                    chevron={true}
                                    topDivider={true}
                                    bottomDivider={true}
                                    onPress={() => {
                                        RootNavigation.navigate('ExecutivesList', { serviceId: data.id, userId: userId, address: address});
                                    }}
                                />
                            ))
                        }
                    </View>) : (<View style={styles.noDataContainer}><Text style={styles.noData}>Invalid Service name</Text></View>)
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
    noData:{
      color:"grey", 
        
    },
    noDataContainer:{
        alignItems: "flex-start",
        justifyContent: "center",
        margin: 16,
    }
});