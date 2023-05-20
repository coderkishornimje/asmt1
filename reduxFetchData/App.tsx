import 'react-native-gesture-handler';
import {Text, StyleSheet, View} from 'react-native';
import React, {Component} from 'react';
import {Provider} from 'react-redux';
import store from './redux/store/store';
import Home from './components/Products';
import Products from './components/Products';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Singlep from './components/Singlep';

const Stack = createStackNavigator();

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Products"
            screenOptions={{
              headerShown: false,
            }}>
            <Stack.Screen name="Products" component={Products} />
            <Stack.Screen name="Singlep" component={Singlep} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({});
