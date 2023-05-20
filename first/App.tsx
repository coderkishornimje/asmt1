import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import Udetails from './components/Udetails'
import { NavigationContainer } from '@react-navigation/native';
import Home from './components/Home';
import Login from './components/Login';
import Dcontainer from './components/Dcontainer';
const Stack = createStackNavigator();
const App = () => {

  return (
    <NavigationContainer>
     <Stack.Navigator initialRouteName='Dcontainer'>

      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Udetails" component={Udetails}/>
      <Stack.Screen name="Home" component={Home} />
    
      <Stack.Screen name="Dcontainer" component={Dcontainer} />
      
    </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})

