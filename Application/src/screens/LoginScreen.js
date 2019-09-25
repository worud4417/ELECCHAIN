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
                let users = {
                    isLogin:true,
                    name:user.name,
                    email:user.email
                };

                this.props.Login(users);
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

    }
    _signUp(){
        this.props.navigation.navigate("Join");
    }

    render(){
        return(
            <KeyboardAvoidingView style={styles.keyboardavoidingview}>
                <View style={{marginLeft:"10%",flex:1,justifyContent:"flex-end",marginRight:"10%"}}>
                    <Image source={require("../../assets/logos.png")} style={styles.image}></Image>
                    <Text>ID</Text>
                    <TextInput style={styles.textinput} onChangeText={(text)=>this.setState({id:text})}></TextInput>
                    <Text>PASSWORD</Text>
                    <TextInput style={styles.textinput} onChangeText={(text)=>this.setState({password:text})}></TextInput>
                </View>
                <View style={{flex:1,justifyContent:"flex-start"}}>
                    <TouchableOpacity style={styles.touchableopacity} onPress={()=>this._signIn()}>
                        <Text style={styles.text}>SIGN IN</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.touchableopacity} onPress={()=>this._signUp()}>
                        <Text style={styles.text}>SIGN UP</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.touchableopacity} onPress={()=>this._googleSignIn()}>
                        <Text style={styles.text}>GOOGLE SIGNIN</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    keyboardavoidingview:{
        alignContent:"center",
        justifyContent:"center",
        flex:1
    },
    image:{
        width:"25%",height:"20%",alignSelf:"center",marginBottom:"20%"
    },
    text:{
        fontSize:20,
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
})

function mapStateToProps(state){
    return{
        user:state.user
    };
}

function mapDispatchToProps(dispatch){
    return {
        Login:(user)=>{
            dispatch(ActionCreator.Login(user));
        },
        Logout:()=>{
            dispatch(ActionCreator.Logout());
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(LoginScreen);