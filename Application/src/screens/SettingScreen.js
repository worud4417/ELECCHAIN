import React,{Component} from "react";
import {View,Text} from 'react-native';

class SettingScreen extends Component{

    constructor(props){
        super(props)
    }

    static navigationOptions ={
        headerTitle:"SETTING",
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

export default SettingScreen;

