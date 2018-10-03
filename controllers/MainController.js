import { createDrawerNavigator } from 'react-navigation';
import { HomeNavigator, SettingsNavigator } from './StackControllers';

const MainNavigator = createDrawerNavigator({
    Home: {
      screen:HomeNavigator
    },
  
    Settings: {
      screen: SettingsNavigator
    },
  
  })

  export {
      MainNavigator
  }