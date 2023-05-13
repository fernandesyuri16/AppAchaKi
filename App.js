import React, {Component} from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation'

import LoginScreen from './LoginScreen';
import PrestadorScreen from './PrestadorScreen';
import CompanyScreen from './CompanyScreen';
import HomeScreen from './HomeScreen';
import ClienteScreen from './ClienteScreen';
import MainScreen from './MainScreen';

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
  CompanyScreen: {
    screen: CompanyScreen,
    navigationOptions: {
      headerShown: false
    }
  },
  ClienteScreen: {
    screen: ClienteScreen,
    navigationOptions: {
      headerShown: false
    }
  },
  MainScreen: {
    screen: MainScreen,
    navigationOptions: {
      headerShown: false
    }
  }
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;