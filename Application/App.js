import React,{Component} from 'react';
import { Image, Text, View } from 'react-native';
import { SplashScreen } from 'expo';
import { Asset } from 'expo-asset';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {createAppContainer,createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';

import LoginScreen from './src/screens/LoginScreen';
import JoinScreen from './src/screens/JoinScreen';
import MainScreen from './src/screens/MainScreen';
import MapScreen from './src/screens/MapScreen';
import ChargeScreen from './src/screens/ChargeScreen';
import MyScreen from './src/screens/MyScreen';
import SettingScreen from './src/screens/SettingScreen';
import LogoutComponent from './src/components/LogoutComponent';

import reducers from './src/reducers/Index'

const defaultNavigationOptions={};

const MyStack = createStackNavigator({
  My:MyScreen
},{
  defaultNavigationOptions
});

const SettingStack = createStackNavigator({
  Setting:SettingScreen
},{
  defaultNavigationOptions
});

const MainStack = createStackNavigator({
  Main:MainScreen,
  Map:MapScreen,
  Charge:{
    screen:ChargeScreen,
  }
},{
  defaultNavigationOptions
});

const TabNavigator = createBottomTabNavigator({
  Home:MainStack,
  My:MyStack,
  Setting:SettingStack,
  Logout:LogoutComponent
},{
  defaultNavigationOptions:({navigation})=>({
    tabBarIcon:({focused,horizontal,tintColor})=>{
      const {routeName} = navigation.state;
      if(routeName === "Home"){
        return <Image source={require("./assets/home.png")} style={{width:25,height:25}}></Image>
      }
      else if(routeName === "My"){
        return <Image source={require("./assets/my.png")} style={{width:25,height:25}}></Image>
      }
      else if(routeName === "Setting"){
        return <Image source={require("./assets/settings.png")} style={{width:25,height:25}}></Image>
      }
      else if(routeName === "Logout"){
        return <Image source={require("./assets/logout.png")} style={{width:25,height:25}}></Image>
      }
    },
  }),
  tabBarOptions:{
    activeTintColor:"blue",
    activeBackgroundColor:"#B8BeFF",
  },
})

MainStack.navigationOptions=({navigation})=>{
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }
  return {
    tabBarVisible,
  };
};

const SwitchNavigator = createSwitchNavigator({
  Login:LoginScreen,
  Join:JoinScreen,
  Tab:{
    screen:TabNavigator
  }
})

const AppContainer = createAppContainer(SwitchNavigator);

export default class App extends Component {

  constructor(props){
    super(props)
    this.state={
      isReady : false
    }
  }

  componentDidMount() {
    SplashScreen.preventAutoHide();
  }

  render() {
    if (!this.state.isReady) {
      return (
        <View style={{ flex: 1 }}>
          <Image
            source={require('./assets/background.png')}
            onLoad={this._cacheResourcesAsync}
            style={{width:"100%",height:"100%"}}
          />
        </View>
      );
    }

    return (
      <Provider store={createStore(reducers)}>
        <AppContainer></AppContainer>
      </Provider>
    );
  }

  _cacheResourcesAsync =  () => {
    setTimeout(()=>{
      SplashScreen.hide();
      const images = [
        require('./assets/background.png')
      ];
  
      const cacheImages = images.map(image => {
        return Asset.fromModule(image).downloadAsync();
      });
  
       Promise.all(cacheImages);
      this.setState({ isReady: true });
    },3000)
  };
}