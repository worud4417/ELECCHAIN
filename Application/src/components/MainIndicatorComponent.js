import React,{Component} from 'react';
import {View,Text,StyleSheet} from "react-native";
import {connect} from 'react-redux';

class MainIndicatorComponent extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <View style={styles.view}>
                <View style={{flex:1}}>
                    <Text style={styles.header}>ELEC CHAIN</Text>
                </View>
                <View style={styles.balanceView}>
                    <Text style={styles.name}>{this.props.user.name}님 반갑습니다!</Text>
                    <Text style={styles.text}>잔액 : {this.props.charge.balance} 원</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    view:{
        flex:1,
        justifyContent:"center",
        alignContent:"center"
    },
    header:{
        fontSize:30,
        fontWeight:"bold",
        alignSelf:"center",
        margin:"5%"
    },
    balanceView:{
        flex:2,
        justifyContent:"center",
        margin:"2%",
        backgroundColor:"#B8BeFF"
    },
    name:{
        fontSize:20,
        fontWeight:"bold",
        alignSelf:"center",
        marginBottom:"5%",
        color:"gray"
    },
    text:{
        fontSize:30,
        fontWeight:"bold",
        alignSelf:"center",
        marginBottom:"5%"
    }
})

function mapStateToProps(state){
    return{
        user:state.user,
        charge:state.charge
    };
}

export default connect(mapStateToProps)(MainIndicatorComponent);