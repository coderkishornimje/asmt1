import {Text, StyleSheet, View} from 'react-native';
import React, {Component} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Tabcontainer from './components/Tabcontainer';
import TodoContextProvider from './components/TodoContext';

const Stack = createNativeStackNavigator();

export default class App extends Component {
  render() {
    return (
      
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Tabcontainer"
          screenOptions={{headerShown: false}}>
         <Stack.Screen name="Tabcontainer" component={Tabcontainer} />

        </Stack.Navigator>         
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({});
