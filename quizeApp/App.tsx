import 'react-native-gesture-handler';
import {Text, StyleSheet, View} from 'react-native';
import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './components/Home';
import {NavigationContainer} from '@react-navigation/native';
import { Provider } from 'react-redux';
import store from './redux/store/store';

const Stack = createStackNavigator();

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({});
