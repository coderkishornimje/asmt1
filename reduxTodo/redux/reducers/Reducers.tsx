import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { addtodo } from '../actions/Actions';

const initialState=({
  count:1,
  todos:[],
  isEditing: false
})

export const counterReducer = (state =initialState, action:any) => {
  switch (action.type) {
    //return state.count + 1;
    case "INCREMENT":
      return {
        ...state,
        count:state.count + 1,
      };
    case "DECREMENT":
      //return state.count - 1;
      return {
        ...state,
        count:state.count - 1,
      };
    default:
      return state;
  }
};
export const todoReducer = (state =initialState, action:any) => {
  //console.log("action",action);
  switch (action.type) {
    case "ADDTODO":
    {
    return {...state,todos: [...state.todos,action.payload]};
    };
    case "REMOVETODO":
    return {
      ...state,
      todos : action.payload
    };
    case "EDITTODO":
      console.log(action.payload);
      const currentTasks = Array.from(state.todos);
      console.log(currentTasks);
      currentTasks[action.payload.taskIndex] = action.payload.task;
      console.log(currentTasks);
      return { ...state, tasks: currentTasks };
    default:
    return state;
    }
};

export default {counterReducer,todoReducer};

