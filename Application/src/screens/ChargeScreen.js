import React,{Component} from "react";
import {View,Text,TouchableOpacity,Image,TextInput,StyleSheet} from 'react-native';
import {connect} from 'react-redux';

class ChargeScreen extends Component{

    constructor(props){
        super(props);
        this.state={
            charge:0,
            M:0,
            T:0,
            H:0
        }
    }

    static navigationOptions ={
        headerTitle:"CHARGE",
        headerTitleStyle:{
            marginLeft:"30%"
        }
    }

    render(){
        return(
            <View style={{flex:1}}>
                <View style={{flexDirection:"row",margin:"5%",flex:1}}>
                    <Text style={styles.textInBalance}>현재 잔액 : {this.props.charge.balance}</Text>
                </View>
                <View style={{flexDirection:"row",flex:4,margin:"3%"}}>
                    <View style={{flexDirection:"column",flex:1}}>
                        <TouchableOpacity style={styles.upButton} onPress={()=>{
                            let number = this.state.M+1;
                            if(number>9){
                                number=0;
                                this.setState({M:number});
                            }
                            else{
                                this.setState({M:number});
                            }
                        }}>
                            <Text>+1</Text>
                        </TouchableOpacity>
                        <View style={styles.text}>
                            <Text>{this.state.M}</Text>
                        </View>
                        <TouchableOpacity style={styles.downButton} onPress={()=>{
                            let number = this.state.M-1;
                            if(number<0){
                                number=9;
                                this.setState({M:number});
                            }
                            else{
                                this.setState({M:number});
                            }
                        }}>
                            <Text>-1</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flexDirection:"column",flex:1}}>
                        <TouchableOpacity style={styles.upButton} onPress={()=>{
                            let number = this.state.T+1;
                            if(number>9){
                                number=0;
                                this.setState({T:number});
                            }
                            else{
                                this.setState({T:number});
                            }
                        }}>
                            <Text>+1</Text>
                        </TouchableOpacity>
                        <View style={styles.text}>
                            <Text>{this.state.T}</Text>
                        </View>
                        <TouchableOpacity style={styles.downButton} onPress={()=>{
                            let number = this.state.T-1;
                            if(number<0){
                                number=9;
                                this.setState({T:number});
                            }
                            else{
                                this.setState({T:number});
                            }
                        }}>
                            <Text>-1</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flexDirection:"column",flex:1}}>
                        <TouchableOpacity style={styles.upButton} onPress={()=>{
                            let number = this.state.H+1;
                            if(number>9){
                                number=0;
                                this.setState({H:number});
                            }
                            else{
                                this.setState({H:number});
                            }
                        }}>
                            <Text>+1</Text>
                        </TouchableOpacity>
                        <View style={styles.text}>
                            <Text>{this.state.H}</Text>
                        </View>
                        <TouchableOpacity style={styles.downButton} onPress={()=>{
                            let number = this.state.H-1;
                            if(number<0){
                                number=9;
                                this.setState({H:number});
                            }
                            else{
                                this.setState({H:number});
                            }
                        }}>
                            <Text>-1</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{flex:3}}>
                    <Text style={{alignSelf:"center",fontSize:30}}>{this.state.M*100000+this.state.T*10000+this.state.H*1000}원</Text>
                    <TouchableOpacity style={{alignSelf:"center",backgroundColor:"gray",width:100,height:40,margin:"5%",borderRadius:10}}
                    onPress={()=>this.props.navigation.navigate("NextCharge",{value:this.state.M*100000+this.state.T*10000+this.state.H*1000})}>
                        <Text style={{alignSelf:"center",fontSize:30}}>충전</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

let styles = StyleSheet.create({
    textInBalance:{
        fontSize:20,
        fontWeight:"bold"
    },
    upButton:{
        width:"70%",
        height:"30%",
        backgroundColor:"red",
        borderRadius:10,
        justifyContent:"center",
        margin:"3%",
        alignSelf:"center"
    },
    text:{
        width:"70%",
        height:"30%",
        fontSize:20,
        marginRight:"3%",
        marginLeft:"3%",
        backgroundColor:"gray",
        borderRadius:10,
        alignSelf:"center"
    },
    downButton:{
        width:"70%",
        height:"30%",
        backgroundColor:"blue",
        borderRadius:10,
        justifyContent:"center",
        margin:"3%",
        alignSelf:"center"
    }
})

function mapStateToProps(state){
    return{
        user:state.user,
        charge:state.charge
    };
}

export default connect(mapStateToProps)(ChargeScreen);

