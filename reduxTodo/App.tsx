import 'react-native-gesture-handler';
import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Todo from './components/Todo';
import Counter from './components/Counter';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DrawerTab from './components/DrawerTab';
import { Provider } from 'react-redux';
import store from './redux/store/store';


const Tab = createBottomTabNavigator();

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <NavigationContainer>
      <Tab.Navigator screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
              size = focused ? 25 : 20;
            } else if (route.name === 'Explore') {
              iconName = focused ? 'search' : 'search-outline';
              size = focused ? 25 : 20;
            } 
            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#CDE7BE',
          tabBarInactiveTintColor: '#ffffff',
          tabBarHideOnKeyboard: true,
          tabBarStyle: {backgroundColor: '#282828',paddingTop:5,paddingBottom:5},
        })}>
        <Tab.Screen name="Todo" component={Todo} />
        <Tab.Screen name="Counter" component={Counter} />
        <Tab.Screen name="DrawerTab" component={DrawerTab} />
      </Tab.Navigator>
    </NavigationContainer>
    </Provider>
    )
  }
}

const styles = StyleSheet.create({})