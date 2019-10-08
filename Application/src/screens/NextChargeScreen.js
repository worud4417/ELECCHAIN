import React,{Component} from "react";
import {View,Text,TextInput,KeyboardAvoidingView,TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';

class MapScreen extends Component{

    constructor(props){
        super(props)
        this.state={
            value:this.props.navigation.getParam("value"),
            account:""
        }
    }

    static navigationOptions ={
        headerTitle:"CHARGE",
        headerTitleStyle:{
            marginLeft:"30%"
        }
    }

    _submit(){
        
    }

    
    render(){
        return(
            <View style={{flex:1}}>
                <View style={{flex:2}}>
                    <Text>현재 잔액: {this.props.charge.balance}원</Text>
                    <Text>충전 금액: {this.state.value}원</Text>
                </View>
                <KeyboardAvoidingView style={{flex:3}}>
                    <Text>계좌 입력</Text>
                    <Text>{this.props.user.name} 님</Text>
                    <TextInput placeholder="계좌번호를 입력하세요." style={{width:"80%",height:"10%",margin:"5%",borderBottomWidth:1}} onChangeText={(text)=>{this.setState({account:text})}}></TextInput>
                </KeyboardAvoidingView>
                <View style={{flex:2,justifyContent:"flex-start",alignItems:"center"}}>
                    <TouchableOpacity style={{backgroundColor:"gray",width:"25%",height:"35%",borderRadius:10}} onPress={()=>this._submit()}>
                        <Text>충전</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

function mapStateToProps(state){
    return{
        user:state.user,
        charge:state.charge
    }
}

export default connect(mapStateToProps)(MapScreen);

