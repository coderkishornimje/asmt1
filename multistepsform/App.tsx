import {Text, StyleSheet, View} from 'react-native';
import React, {Component} from 'react';
import Details from './components/Details';
import AppContextProvider from './components/AppContext';

export default class App extends Component {
  render() {
    return (
      <AppContextProvider>
        <Details />
      </AppContextProvider>
    );
  }
}

const styles = StyleSheet.create({});
