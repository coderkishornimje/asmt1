import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement} from '../redux/actions/Actions';
import {TouchableOpacity} from 'react-native-gesture-handler';


interface IState{
    state:any
}

const Counter = () => {
  const counter = useSelector(state =>state.counterReducer.count);
  const dispatch = useDispatch();
  
  return (
    <View style={{margin:20}}>
      <Text style={{fontSize: 30,fontWeight:'bold',alignSelf:'center'}}>Counter App</Text>
      <TouchableOpacity
        onPress={() => dispatch(increment())}
        style={{backgroundColor: '#3e3e3e', padding: 10}}>
        <Text style={{fontSize: 30, color: '#ffffff', alignSelf: 'center'}}>
          Increase
        </Text>
      </TouchableOpacity>
      <Text style={{fontSize: 50,alignSelf:'center'}}>{counter}</Text>
      <TouchableOpacity
        onPress={() => dispatch(decrement())}
        style={{backgroundColor: '#3e3e3e', padding: 10}}>
        <Text style={{fontSize: 30, color: '#ffffff', alignSelf: 'center'}}>
          Decrease
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({});
