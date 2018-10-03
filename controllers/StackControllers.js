import React from 'react';
import { createStackNavigator } from 'react-navigation';
import HamburgerIcon from '../views/ToggleMenu';
import HomeScreen from '../views/HomeScreen';
import SettingsScreen from '../views/SettingsScreen';


ToggleConfig = {
  headerLeft: <HamburgerIcon navigationProps={navigation} />,
  
  headerStyle: {
    backgroundColor: '#FF9800'
  },
  headerTintColor: '#fff',
  }
}



const HomeNavigator = createStackNavigator({
    Home: {
      screen: HomeScreen,
      navigationOptions: ({navigation}) => ({
        title: 'Home',
        ToggleConfig, })
    }
  });
  
  const SettingsNavigator = createStackNavigator({
    Home: {
      screen: SettingsScreen,
      navigationOptions: ({navigation}) => ({
        title: 'Settings',
        ToggleConfig,
      })
    }
  });

  export {
      HomeNavigator,
      SettingsNavigator
  }