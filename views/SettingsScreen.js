import React from 'react';
import { Text, View } from 'react-native';
import { Screens } from '../utils/Common.style'

export default class SettingsScreen extends React.Component {

    constructor(props){
      super(props);
    }
    
    
     render() {
        return (
          <View style={Screens.MainContainer}>
            <Text>This is Settings Screen</Text>
          </View>
        );
      }
    }