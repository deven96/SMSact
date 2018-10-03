import { StyleSheet, Platform } from 'react-native';


const MenuStyle = StyleSheet.create({
    container: {
      flexDirection: 'row',
    },
    menu: {
      width: 25,
      height: 25,
      marginLeft: 5,
    },

  });

const Screens = StyleSheet.create({
    MainContainer: {
        flex: 1,
        paddingTop: (Platform.OS) == 'ios' ? 20 : 0,
        alignItems: 'center',
        justifyContent: 'center',
      }  
})



export {
    MenuStyle,
    Screens
}