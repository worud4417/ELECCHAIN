import React,{Component} from 'react';
import {View,Text,StyleSheet,TextInput,KeyboardAvoidingView,TouchableOpacity} from 'react-native';

import fetchJoin from '../apis/JoinApi';

class JoinScreen extends Component{
    constructor(props){
        super(props);
        this.state={
            id:"",
            password:"",
            checkPassword:"",
            name:"",
            carnumber:"",
            email:""
        }
    }

    async _signUp(){
        if(this.state.password != this.state.checkPassword){
            alert("비밀번호가 서로 다릅니다.");
            return null;
        }
        
        let result = await fetchJoin(this.state.id,this.state.password,this.state.name,
            this.state.carnumber,this.state.email);
        
        if(result.error){
            alert("양식을 채워주세요");
            return null;
        }
        this.props.navigation.navigate("Login");
    }

    render(){
        return(
            <View style={styles.keyboardavoidingview}>
                <KeyboardAvoidingView style={{marginLeft:"10%",flex:3,justifyContent:"flex-end",marginRight:"10%"}} behavior="padding" enabled>
                    <Text style={{fontSize:20,fontWeight:"bold",alignSelf:"center",paddingBottom:"5%"}}>회원 가입</Text>
                    <Text>ID</Text>
                    <TextInput style={styles.textinput} onChangeText={(text)=>this.setState({id:text})}></TextInput>
                    <Text>PASSWORD</Text>
                    <TextInput style={styles.textinput} onChangeText={(text)=>this.setState({password:text})}></TextInput>
                    <Text>CHECK PASSWORD</Text>
                    <TextInput style={styles.textinput} onChangeText={(text)=>this.setState({checkPassword:text})}></TextInput>
                    <Text>NAME</Text>
                    <TextInput style={styles.textinput} onChangeText={(text)=>this.setState({name:text})}></TextInput>
                    <Text>CARNUMBER</Text>
                    <TextInput style={styles.textinput} onChangeText={(text)=>this.setState({carnumber:text})}></TextInput>
                    <Text>EMAIL</Text>
                    <TextInput style={styles.textinput} onChangeText={(text)=>this.setState({email:text})}></TextInput>
                </KeyboardAvoidingView>
                <View style={{flex:1}}>
                    <TouchableOpacity style={styles.touchableopacity} onPress={this._signUp.bind(this)}>
                        <Text style={styles.text}>회원가입</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.touchableopacity} onPress={()=>this.props.navigation.navigate("Login")}>
                        <Text style={styles.text}>취소</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    keyboardavoidingview:{
        alignContent:"center",
        justifyContent:"center",
        flex:1
    },
    text:{
        fontSize:15,
        fontWeight:"bold",
        alignSelf:"center"
    },
    textinput:{
        borderBottomWidth:1,
        width:"100%",
        marginBottom:"5%"
    },
    touchableopacity:{
        marginLeft:"10%",
        marginTop:"5%",
        backgroundColor: "#00000020",
        padding:"3%",
        width:"80%",
        borderWidth:2,
        borderRadius:10
    }
});

export default JoinScreen;