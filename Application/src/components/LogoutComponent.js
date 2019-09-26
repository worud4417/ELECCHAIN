import React,{Component} from "react";
import {View,Text} from 'react-native';
import {connect} from "react-redux";
import ActionCreator from '../actions/Index';

class LogoutComponent extends Component{

    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.Logout();
        this.props.navigation.navigate("Login");
    }

    render(){
        return(
            <View></View>
        )
    }
}

function mapStateToProps(state){
    return{
        user:state.user
    };
}

function mapDispatchToProps(dispatch){
    return {
        Logout:()=>{
            dispatch(ActionCreator.Logout());
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(LogoutComponent);