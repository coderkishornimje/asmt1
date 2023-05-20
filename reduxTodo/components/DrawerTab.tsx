import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';
import Todo from './Todo';
import Counter from './Counter';

const Drawer = createDrawerNavigator();

export default class DrawerTab extends Component {
  render() {
    return (
      <Drawer.Navigator initialRouteName="Todo">
        <Drawer.Screen name="Todo" component={Todo} />
        <Drawer.Screen name="Counter" component={Counter} />
      </Drawer.Navigator>
    )
  }
}

const styles = StyleSheet.create({})