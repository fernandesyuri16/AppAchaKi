import React, {Component} from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation'

import LoginScreen from './LoginScreen';

const App = createStackNavigator({
  LoginScreen,
},
{
  defaultNavigationOptions: {
      headerShow: false,
  }
});

export default createAppContainer (App);
