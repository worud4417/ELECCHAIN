import React,{Component} from 'react';
import {View,Text,StyleSheet,TextInput,KeyboardAvoidingView,TouchableOpacity} from 'react-native';

class JoinScreen extends Component{
    constructor(props){
        super(props)
    }

    _SingUp(){
        this.props.navigation.navigate("Login");
    }

    render(){
        return(
            <KeyboardAvoidingView style={styles.keyboardavoidingview}>
                <View style={{marginLeft:"10%",flex:3,justifyContent:"flex-end",marginRight:"10%"}}>
                    <Text style={{fontSize:20,fontWeight:"bold",alignSelf:"center",paddingBottom:"5%"}}>회원 가입</Text>
                    <Text>ID</Text>
                    <TextInput style={styles.textinput}></TextInput>
                    <Text>PASSWORD</Text>
                    <TextInput style={styles.textinput}></TextInput>
                    <Text>CHECK PASSWORD</Text>
                    <TextInput style={styles.textinput}></TextInput>
                    <Text>NAME</Text>
                    <TextInput style={styles.textinput}></TextInput>
                    <Text>CARNUMBER</Text>
                    <TextInput style={styles.textinput}></TextInput>
                    <Text>EMAIL</Text>
                    <TextInput style={styles.textinput}></TextInput>
                </View>
                <View style={{flex:1}}>
                    <TouchableOpacity style={styles.touchableopacity} onPress={this._SingUp.bind(this)}>
                        <Text style={styles.text}>회원가입</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.touchableopacity} onPress={()=>this.props.navigation.navigate("Login")}>
                        <Text style={styles.text}>취소</Text>
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