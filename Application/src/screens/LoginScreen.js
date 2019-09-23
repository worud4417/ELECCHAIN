import React,{Component} from 'react';
import {Text,View,StyleSheet,TouchableOpacity,Image,TextInput,KeyboardAvoidingView} from 'react-native';
import {connect}from 'react-redux';
import ActionCreator from '../actions/Index';
import * as Google from 'expo-google-app-auth';

class LoginScreen extends Component{
    
    constructor(props){
        super(props)
        this.state = {
            id:"",
            password:""
        }
    }

    _googleSignIn = async()=>{
        try{
            const {type,accessToken,user} = await Google.logInAsync({
                androidClientId:"876782387423-pg0vjmtt6bsv72udmtqcm5njfef291sk.apps.googleusercontent.com",
                iosClientId:"876782387423-mp76k7od9oedhvrtc9h0m8s2dc6tmbup.apps.googleusercontent.com"
            })
    
            if(type === "success"){
                this.setState({
                    accessToken:accessToken,
                    name:user.name,
                    photoUrl:user.photoUrl
                })
                console.log(user)
                console.log(accessToken)
            }
            else{
                console.log("cancelled");
            }
        }
        catch(e){
            console.log("error",e);
        }
    }

    _signIn(){
        console.log(this.state.id)
    }
    _signUp(){

    }

    render(){
        return(
            <KeyboardAvoidingView style={styles.keyboardavoidingview}>
                <View style={{marginLeft:"10%"}}>
                    <Text>ID</Text>
                    <TextInput style={styles.textinput} onChangeText={(text)=>this.setState({id:text})}></TextInput>
                    <Text>PASSWORD</Text>
                    <TextInput style={styles.textinput} onChangeText={(text)=>this.setState({password:text})}></TextInput>
                </View>
                <View style={{alignSelf:"center"}}>
                    <View style={{flexDirection:"row"}}>
                    <TouchableOpacity style={styles.touchableopacity} onPress={()=>this._signIn()}>
                        <Text>SIGN IN</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.touchableopacity} onPress={()=>this._signUp()}>
                        <Text>SIGN UP</Text>
                    </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={{margin:"3%",backgroundColor:"#00000020", width:"50%",padding:"3%"}} onPress={()=>this._googleSignIn()}>
                        <Text>GOOGLE SIGNIN</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        )
    }
}

styles = StyleSheet.create({
    keyboardavoidingview:{
        alignContent:"center",
        justifyContent:"center",
        flex:1
    },
    text:{
        fontSize:20,
        fontWeight:"bold",
    }, 
    textinput:{
        borderBottomWidth:1,
        width:"80%",
        marginBottom:"5%"
    },
    touchableopacity:{
        margin:"3%",
        backgroundColor: "#00000020",
        padding:"3%"
    }
})

function mapStateToProps(state){
    return{
        id:state.id
    };
}

function mapDispatchToProps(dispatch){
    return {
        Login:(id)=>{
            dispatch(ActionCreator.Login(id));
        },
        Logout:()=>{
            dispatch(ActionCreator.Logout());
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(LoginScreen);