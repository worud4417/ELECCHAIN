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

import reducers from './src/reducers/Index'

const defaultNavigationOptions={
  
}

const MainStack = createStackNavigator({
  Main:{
    screen:MainScreen
  }
},{
  defaultNavigationOptions
})

const TabNavigator = createBottomTabNavigator({
  Main:MainStack
},{
  defaultNavigationOptions
})

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