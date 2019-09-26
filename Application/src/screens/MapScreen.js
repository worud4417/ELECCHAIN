import React,{Component} from "react";
import {View,Text} from 'react-native';

class MapScreen extends Component{

    constructor(props){
        super(props)
    }

    static navigationOptions ={
        headerTitle:"MAP",
        headerTitleStyle:{
            marginLeft:"30%"
        }
    }

    render(){
        return(
            <View>
                <Text>screen</Text>
            </View>
        )
    }
}

export default MapScreen;

