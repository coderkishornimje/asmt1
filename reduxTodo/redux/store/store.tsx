import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {combineReducers} from 'redux';
import { configureStore } from '@reduxjs/toolkit'
import Counter from '../../components/Counter'
import {counterReducer,todoReducer} from '../reducers/Reducers'

export const rootReducer=combineReducers({
    counterReducer,
    todoReducer,
})

const store= configureStore({
    reducer :rootReducer
})

export default store

const styles = StyleSheet.create({})