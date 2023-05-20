import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';
import { singleProduct } from '../redux/actions/Actions';
import { FlatList } from 'react-native-gesture-handler';
import { Button, Image } from '@rneui/base';
const Singlep = () => {

const {id,singlePro} = useSelector(state => state.fetchDataReducer);

console.log(id,singlePro);

const dispatch=useDispatch();

  useEffect(()=>{
    axios.get(`https://dummyjson.com/products/${id}`)
    .then(res=>dispatch(singleProduct(res.data)))
    .catch(err=>console.log(err))
  },[])

  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <View
        style={{
          backgroundColor: '#1995fa',
          marginVertical: 5,
          padding: 20,
          borderRadius: 10,
        }}>
        <View style={{height: 200, width: 350, borderRadius: 10,alignSelf:'center'}}>
          <Image
            style={{height: '100%', width: '100%', borderRadius: 10}}
            source={{uri: singlePro.thumbnail}}
          />
        </View>
        <View style={{alignSelf: 'center', marginHorizontal: 30}}>
          <Text style={{color: 'white', fontSize: 20,alignSelf:'center'}}>{singlePro.title}</Text>
          <Text style={{color: 'white', fontSize: 20,alignSelf:'center'}}>{singlePro.brand}</Text>
          <Text style={{color: 'white', fontSize: 20,alignSelf:'center'}}>{singlePro.rating}</Text>
          <Text style={{color: 'white', fontSize: 15,alignSelf:'center'}}>{singlePro.description}</Text>
          <Text style={{color: 'white', fontSize: 20,alignSelf:'center'}}>{singlePro.price}</Text>
        </View>
        <Button title="ADD To Cart"/>
      </View>
    
    </View>
  );
};

export default Singlep;

const styles = StyleSheet.create({});
