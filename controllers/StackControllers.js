import React from 'react';
import { createStackNavigator } from 'react-navigation';
import HamburgerIcon from '../views/ToggleMenu';
import HomeScreen from '../views/HomeScreen';
import SettingsScreen from '../views/SettingsScreen';


const HomeNavigator = createStackNavigator({
    Home: {
      screen: HomeScreen,
      navigationOptions: ({navigation}) => ({
        title: 'SMSact',
        headerLeft: <HamburgerIcon navigationProps={navigation} />,
        headerStyle: {
          backgroundColor: '#FF9800'
            },
        headerTintColor: '#fff',})
    }
  });
  
const SettingsNavigator = createStackNavigator({
    Home: {
      screen: SettingsScreen,
      navigationOptions: ({navigation}) => ({
        title: 'Settings',
        headerLeft: <HamburgerIcon navigationProps={navigation} />,
        headerStyle: {
          backgroundColor: '#FF9800'
            },
        headerTintColor: '#fff',})
    }
  });

  export {
      HomeNavigator,
      SettingsNavigator
  }