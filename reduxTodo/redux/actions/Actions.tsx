import { StyleSheet, Text, View } from 'react-native'
import React from 'react'


export const increment = (payload:string) => {
  // return {
  //   type: "INCREMENT",
  // };
  return {
    type:"INCREMENT",
    payload:payload
  }
};

export const decrement = (payload:string) => {
  return {
    type: "DECREMENT",
    payload:payload
  };
};

export const addtodo = (payload:string) => {
  return {
    type: "ADDTODO",
    payload:payload,
  };
};

export const removetodo = (payload:string) => {
  return {
    type: "REMOVETODO",
    payload:payload
  };
};

export const edittodo = (payload:string) => {
  return {
    type: "EDITTODO",
    payload:payload
  };
};


const styles = StyleSheet.create({})

