import 'react-native-gesture-handler';
import {Text, StyleSheet, View} from 'react-native';
import React, {Component} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './components/Login';
import Home from './components/Home';
import Singlep from './components/Singlep';
import CartDetails from './components/CartDetails';
import AppContextProvider from './components/AppContext';
import Wishlist from './components/Wishlist';

const Stack = createStackNavigator();

export default class App extends Component {
  componentDidMount(): void {
    setTimeout(() => {
      SplashScreen.hide();
    }, 2000);
  }

  render() {
    return (
      <AppContextProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Login' screenOptions={{
        headerShown:false
      }}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Singlep" component={Singlep} />
          <Stack.Screen name="CartDetails" component={CartDetails} />
          <Stack.Screen name="Wishlist" component={Wishlist} />
        </Stack.Navigator>
      </NavigationContainer>
      </AppContextProvider>
    );
  }
}

const styles = StyleSheet.create({});
