import { createDrawerNavigator } from 'react-navigation';
import { HomeNavigator, SettingsNavigator } from './StackControllers';

const MainNavigator = createDrawerNavigator({
    Main: {
      screen:HomeNavigator
    },
  
    Settings: {
      screen: SettingsNavigator
    },
  
  })

  export {
      MainNavigator
  }