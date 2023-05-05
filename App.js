import React, {Component} from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation'

import LoginScreen from './LoginScreen';
import PrestadorScreen from './PrestadorScreen';

const AppNavigator = createStackNavigator({
  LoginScreen: {
    screen: LoginScreen,
    navigationOptions: {
      headerShown: false
    }
  },
  PrestadorScreen: {
    screen: PrestadorScreen,
    navigationOptions: {
      headerShown: false
    }
  }
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;