import React,{Component} from 'react';
import {View,Text,StyleSheet,TouchableOpacity,Image} from 'react-native';

class MainScreen extends Component{
    constructor(props){
        super(props)
    }

    static navigationOptions ={
        headerTitle:"HOME",
        headerTitleStyle:{
            marginLeft:"40%"
        }
    }

    render(){
        return(
            <View style={{flex:1}}>
                <View style={{flex:1,flexDirection:"row"}}>

                </View>
                <View style={{flex:1,flexDirection:"row"}}>
                    <TouchableOpacity style={styles.touchableopacity} onPress={()=>this.props.navigation.navigate("Map")}>
                        <Image source={require("../../assets/map.png")} style={styles.image}></Image>
                        <Text style={styles.text}>주유소 위치</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.touchableopacity} onPress={()=>this.props.navigation.navigate("Charge")}>
                        <Image source={require("../../assets/electric-car.png")} style={styles.image}></Image>
                        <Text style={styles.text}>충전하기</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    touchableopacity:{
        flex:1,
        justifyContent:"flex-start"
    },  
    image:{
        width:100,
        height:100,
        alignSelf:"center",
        marginTop:"10%"
    },
    text:{
        alignSelf:"center",
        fontSize:20,
        fontWeight:"bold",
        marginTop:"10%"
    },
})

export default MainScreen;