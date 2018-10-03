import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { createDrawerNavigator,createStackNavigator } from 'react-navigation';


class HomeScreen extends React.Component {

constructor(props){
  super(props);
}


 render() {
    return (
      <View style={styles.MainContainer}>
        <Text style={{justifyContent: 'center'}}>This is Main Screen</Text>
      </View>
    );
  }
}


class SettingsScreen extends React.Component {

  constructor(props){
    super(props);
  }
  
  
   render() {
      return (
        <View style={styles.MainContainer}>
          <Text style={{justifyContent: 'center'}}>This is Settings Screen</Text>
        </View>
      );
    }
  }
  



class HamburgerIcon extends React.Component{
  toggleDrawer = () => {
    console.log(this.props.navigationProps);
    this.props.navigationProps.toggleDrawer();
  }

  render(){
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
          <Image
            source={require('./assets/hamburger_icon.png')}
            style={styles.menu}/>
        </TouchableOpacity>
      </View>
    )
  }
}


const HomeNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
    naivgationOptions: ({navigation}) => ({
      title: 'Home',
      headerLeft: <HamburgerIcon navigationProps={navigation} />,

      headerStyle: {
        backgroundColor: '#FF9800'
      },
      headerTintColor: '#fff',
    })
  }
});

const SettingsNavigator = createStackNavigator({
  Home: {
    screen: SettingsScreen,
    naivgationOptions: ({navigation}) => ({
      title: 'Settings',
      headerLeft: <HamburgerIcon navigationProps={navigation} />,

      headerStyle: {
        backgroundColor: '#FF9800'
      },
      headerTintColor: '#fff',
    })
  }
});

export default App = createDrawerNavigator({
  HomeStack: {
    screen:HomeNavigator
  },

  SettingsStack: {
    screen: SettingsNavigator
  },

})


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  menu: {
    width: 25,
    height: 25,
    marginLeft: 5,
  }
});
