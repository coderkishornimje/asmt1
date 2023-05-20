import {Text, StyleSheet, View} from 'react-native';
import React, {Component} from 'react';
import Flash from './components/Flash';
import Login from './components/Login';
import Home from './components/Home';
import Tcontainer from './components/Tcontainer';
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import CBTcontainer from './components/CBTcontainer';

const Stack = createStackNavigator();
export default class App extends Component {

  render() {
    return (
      <NavigationContainer>
        
        <Stack.Navigator
          initialRouteName="Flash"
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Flash" component={Flash} />
          <Stack.Screen name="Login" component={Login} />
          {/* <Stack.Screen name="Tcontainer" component={Tcontainer} /> */}
          <Stack.Screen name="CBTcontainer" component={CBTcontainer} />
        </Stack.Navigator>

      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({});
