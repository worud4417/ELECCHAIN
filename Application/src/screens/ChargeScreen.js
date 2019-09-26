import React,{Component} from "react";
import {View,Text} from 'react-native';

class ChargeScreen extends Component{

    constructor(props){
        super(props)
    }

    static navigationOptions ={
        headerTitle:"CHARGE",
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

export default ChargeScreen;

