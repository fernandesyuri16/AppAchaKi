import React, {Component} from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation'

import LoginScreen from './LoginScreen';
import PrestadorScreen from './PrestadorScreen';
import EstabelecimentoScreen from './EstabelecimentoScreen';
import HomeScreen from './HomeScreen';

const AppNavigator = createStackNavigator({
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: {
      headerShown: false
    }
  },
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
  },
  EstabelecimentoScreen: {
    screen: EstabelecimentoScreen,
    navigationOptions: {
      headerShown: false
    }
  },
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;