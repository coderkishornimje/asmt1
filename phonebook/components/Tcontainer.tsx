import {Text, StyleSheet, View} from 'react-native';
import React, {Component} from 'react';
import Home from './Home';
import Login from './Login';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export default class Tcontainer extends Component {
  render() {
    return (
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
              let iconName;
              if (route.name === 'Home') {
                iconName = focused ? 'home' : 'home-outline';
                size = focused ? 25 : 20;
              } else if (route.name === 'Explore') {
                iconName = focused ? 'search' : 'search-outline';
                size = focused ? 25 : 20;
              } else if (route.name === 'Library') {
                iconName = focused ? 'library' : 'library-outline';
                size = focused ? 25 : 20;
              }
              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: '#000000',
            tabBarInactiveTintColor: '#000000',
            tabBarHideOnKeyboard: true,
            headerShown:false,
            tabBarStyle: {backgroundColor: '#ffffff',paddingTop:5,paddingBottom:5},
          })}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Login" component={Login} />
      </Tab.Navigator>
    );
  }
}

const styles = StyleSheet.create({});
