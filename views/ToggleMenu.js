import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { MenuStyle } from '../utils/Common.style';

export default class HamburgerIcon extends React.Component{
    toggleDrawer = () => {
      console.log(this.props.navigationProps);
      this.props.navigationProps.toggleDrawer();
    }
  
    render(){
      return (
        <View style={MenuStyle.container}>
          <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
            <Image
              source={require('../assets/hamburger_icon.png')}
              style={MenuStyle.menu}/>
          </TouchableOpacity>
        </View>
      )
    }
  }

