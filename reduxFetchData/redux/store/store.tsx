import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { configureStore } from '@reduxjs/toolkit'
import {combineReducers} from 'redux';
import fetchDataReducer from '../reducers/Reducers';

export const rootReducer=combineReducers({
    fetchDataReducer
})

const store=configureStore({
    reducer:rootReducer
})

export default store
