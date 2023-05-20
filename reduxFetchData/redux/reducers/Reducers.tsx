import { View, Text } from 'react-native'
import React from 'react'
import { FETCH_DATA, GET_ID, INPUT_DATA, SINGLE_DATA } from '../actions/Actions'

const initialState=({
    products:[],
    id:'',
    singlePro:[],
    inputText:''
})

const fetchDataReducer = (state =initialState, action:any) => {
    // console.log("===========================",action);
    switch(action.type) {
        case FETCH_DATA:
          return {
            ...state,
            products:action.payload
            
          };
          case SINGLE_DATA:
          return {
            ...state,
            singlePro:action.payload
            
          };
          case GET_ID:
            return{
              ...state,
              id:action.payload
            }
            case INPUT_DATA:
              return{
                ...state,
                inputText:action.payload
              }
              
        default:
            return state;
      }
  };
export default fetchDataReducer