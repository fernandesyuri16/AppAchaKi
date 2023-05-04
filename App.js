import React, {Component} from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation'

import LoginScreen from './LoginScreen';

const AppNavigator = createStackNavigator({
  LoginScreen: {
    screen: LoginScreen,
    navigationOptions: {
      headerShown: false
    }
  }
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;