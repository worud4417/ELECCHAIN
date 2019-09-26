import React,{Component} from "react";
import {View,Text} from 'react-native';

class MyScreen extends Component{

    constructor(props){
        super(props)
    }

    static navigationOptions ={
        headerTitle:"MY PAGE",
        headerTitleStyle:{
            marginLeft:"40%"
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

export default MyScreen;

