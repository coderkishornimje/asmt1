// import { Text, StyleSheet, View } from 'react-native'
// import React, { Component } from 'react'
// import {createStackNavigator} from '@react-navigation/stack'; 
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { NavigationContainer } from '@react-navigation/native';
// import Screen1 from './screens/Screen1';
// import Screen2 from './screens/Screen2';
// import Screen3 from './screens/Screen3';
// import TabBar from './Tabbar';

// const Tab = createBottomTabNavigator();

// export default class CBTcontainer extends Component {
    
//   render() {
//     return (
//         <Tab.Navigator initialRouteName={"home"}  tabBar={props => <TabBar {...props} />} >
//         <Tab.Screen name="Screen1" component={Screen1} />
//         <Tab.Screen name="Screen2" component={Screen2} />
//         <Tab.Screen name="Screen3" component={Screen3} />
//       </Tab.Navigator>
//     )
//   }
// }

// const styles = StyleSheet.create({})

import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import React, {Component} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';

interface IState {
  activeTab: number;
}

interface IProps {
  navigation?: any;
}
export default class CBTcontainer extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      activeTab: 0,
    };
  }

  handleTab = (index: any) => {
    this.setState({
      activeTab: index,
    });
  };

  render() {
    const tabs = [
      {
        title: 'Tab 1',
        icon: 'md-home',
        routeName: 'Tab1Screen',
      },
      {
        title: 'Tab 2',
        icon: 'md-person',
        routeName: 'Tab2Screen',
      },
      {
        title: 'Tab 3',
        icon: 'md-settings',
        routeName: 'Tab3Screen',
      },
    ];

    const Tab1Screen = () => (
      <View>
        <Text>Tab 1 Screen</Text>
      </View>
    );

    const Tab2Screen = () => (
      <View>
        <Text>Tab 2 Screen</Text>
      </View>
    );

    const Tab3Screen = () => (
      <View>
        <Text>Tab 3 Screen</Text>
      </View>
    );
    const Tab = createBottomTabNavigator();

    return (
    
      <Tab.Navigator
        // screenOptions={{
        //   style:{
        //     height: 50,
        //   },
        //   showLabel: false,
        //   activeTintColor: '#007aff',
        //   inactiveTintColor: '#929292',
        // }}
        screenOptions={{ tabBarStyle:{height:70}, tabBarShowLabel:false,tabBarActiveTintColor:'#007aff',tabBarInactiveTintColor:'#929292'}}
        >
       
        {tabs.map((tab, index) => (
          <Tab.Screen
            key={index}
            name={tab.title}
            component={
              index === 0 ? Tab1Screen : index === 1 ? Tab2Screen : Tab3Screen
            }
            options={{
              tabBarIcon: ({focused}) => (
                <TouchableOpacity
                  style={styles.tab}
                  onPress={() => this.handleTab(index)}>
                  <Ionicons
                    name={tab.icon}
                    size={25}
                    color={focused ? '#007aff' : '#929292'}
                  />
                  <Text
                    style={{
                      color: focused ? '#007aff' : '#929292',
                      fontSize: 12,
                    }}>
                    {tab.title}
                  </Text>
                </TouchableOpacity>
              ),
            }}
          />
        ))}
        
      </Tab.Navigator>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#e3e1e1',
    margin: 10,
    borderRadius: 10,
  },
  tab: {
    alignItems: 'center',
  },
});

