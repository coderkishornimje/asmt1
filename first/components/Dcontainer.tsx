import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './Home';
import Login from './Login';
import Udetails from './Udetails';
import { NavigationContainer } from '@react-navigation/native';

const Drawer = createDrawerNavigator();

export default class Dcontainer extends Component {
  render() {
    return (
   
    <Drawer.Navigator screenOptions={{
        drawerStyle: {
          backgroundColor: 'white',
          zIndex: 100
        },
        drawerPosition: 'left'
      }}>
      <Drawer.Screen name="Udetails" component={Udetails} />
      <Drawer.Screen name="Login" component={Login} />
      <Drawer.Screen name="Home" component={Home} />
      
    </Drawer.Navigator>

    )
  }
}

const styles = StyleSheet.create({})