import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../components/Home';
import Display from '../components/Display';
import Ionicons from 'react-native-vector-icons/Ionicons'; 
import TodoContextProvider from './TodoContext';
const Tab = createBottomTabNavigator();

export default class Tabcontainer extends Component {

constructor(props:any){
  super(props)
}

  render() {
    return (
         <TodoContextProvider>
           <Tab.Navigator 
       initialRouteName="Home"
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
              size = focused ? 25 : 20;
            } else if (route.name === 'Display') {
              iconName = focused ? 'list' : 'list-outline';
              size = focused ? 25 : 20;
            } 
            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#CDE7BE',
          tabBarInactiveTintColor: '#ffffff',
          tabBarHideOnKeyboard: true,
          tabBarStyle: {backgroundColor: '#282828',paddingTop:5,paddingBottom:5},
          headerShown:false
        })}>
          
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Display" component={Display} />

      </Tab.Navigator>
         </TodoContextProvider>
    
    )
  }
}

const styles = StyleSheet.create({})