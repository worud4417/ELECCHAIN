import React,{Component} from 'react';
import {View,Text,StyleSheet,TextInput} from 'react-native';

class JoinScreen extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <View>
                <Text>JoinScreen</Text>
                <View>
                    <TextInput></TextInput>
                </View>
            </View>
        )
    }
}

export default JoinScreen;