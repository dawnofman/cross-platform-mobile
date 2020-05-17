import * as React from 'react';
import { Platform,StyleSheet,View,TextInput,FlatList,Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Constants from '../constants';

export default class SearchLayout extends React.Component{
    constructor(props) {
          super(props);
          this.state={
              input:'',
              dataSource: [],
          }
          this.onChangeText = this.onChangeText.bind(this);
          
    }
   
    


    onChangeText = (input) => {
        this.setState({input: input});
      }
       
       componentDidUpdate(prevProps, prevState){
      const {input, dataSource} = this.state;
  
        if(prevState.input != input && input.length > 2){
       
        fetch(Constants.POST_URL+'account_setup/service_categories_list',{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({'request_type':'service_list','service_name':input})
        }).then((response)=>{
          console.log(response.json());
          if(response){
            const responseJson = response.json();

            this.setState({dataSource: responseJson.service_list});
          }
        }).catch((error)=>{
          console.log("-------- error ------- "+error);
            alert("result:"+error)
                  });
}
}


    render(){
      const {input} = this.state;

        return (
          <View style={styles.container}>
            <View style={styles.searchSection}>
                <Icon name="search" style={styles.searchIcon} size={15} color="#c1c1c1"/>
                <TextInput
                    style ={styles.inputBox}
                    placeholder='Search service'
                    value={input}
                    onChangeText={this.onChangeText}
                />
              
            </View>
            <View>
            <FlatList
                data={this.state.dataSource}
                extraData={this.props.state} //for re-render the Flatlist data item
                renderItem={({ item }) => (
                  <Text>
                    {item.service_name}
                  </Text>
                )}
                keyExtractor={(item, index) => index}
              />
            </View>
            </View>            
            
        );
    }
}
const styles = StyleSheet.create({
  container:{
    flex:1,

  },searchSection: {
        flex:0,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        marginVertical:0 ,
        padding:10,
        borderRadius:2,
        height:50,
    },
    searchIcon: {
        paddingLeft: 15,
        width :'15%',
    },
    inputBox: {
        width :'85%',
        fontSize:14,
        borderColor:'#fff',
        borderWidth:0,
        color: '#000000',
        padding:0,
        height:50,
    },
});