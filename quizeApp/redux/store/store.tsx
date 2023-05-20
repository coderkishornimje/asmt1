import {configureStore } from "@reduxjs/toolkit";
import {combineReducers} from 'redux';
import fetchDataReducer from '../reducers/reducers';

export const rootReducer=combineReducers({
    fetchDataReducer
})


const store=configureStore({
   reducer:rootReducer
})

export default  store;