import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import axios from 'axios';
import {fetchData, getId, inputHandler} from '../redux/actions/Actions';
import {FlatList} from 'react-native-gesture-handler';
import {SearchBar} from '@rneui/themed';
import DIcon from 'react-native-vector-icons/AntDesign';

const card = <DIcon name="shoppingcart" size={30} color="#000000" />;

const Products = ({navigation}:any) => {
  const productsData = useSelector(state => state.fetchDataReducer.products);

  const dispatch = useDispatch();

  const inputData=useSelector(state=>state.fetchDataReducer.inputText);
  console.log(inputData);

  const apiData = async () => {
    try {
      const res = await axios.get('https://dummyjson.com/products');
  
      dispatch(fetchData(res.data.products));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    apiData();
  }, []);

  const searchFunction = (text: string) => {
     dispatch(inputHandler(text));
     try{ 
       fetch(`https://dummyjson.com/products/search?q=${inputData}`)
       .then(res=>res.json())
       .then(data=>dispatch(fetchData(data.products)));
       
     }catch(err){
      console.log(err);
     }
  };

  const renderItem = ({item}:any) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: '#3440eb',
          marginVertical: 5,
          padding: 5,
          borderRadius: 10,
        }}>
        <View style={{height: 150, width: 170, borderRadius: 10}}>
          <Image
            style={{height: '100%', width: '100%', borderRadius: 10}}
            source={{uri: item.thumbnail}}
          />
        </View>
        <View style={{alignSelf: 'center', marginHorizontal: 30}}>
          <Text style={{color: 'white', fontSize: 15}}>{item.title}</Text>
          <Text style={{color: 'white', fontSize: 15}}>{item.brand}</Text>
          <Text style={{color: 'white', fontSize: 15}}>{item.price}</Text>
          <Text style={{color: 'white', fontSize: 15}}>{item.rating}</Text>
          <Text onPress={()=>{
             dispatch(getId(item.id))
            navigation.navigate('Singlep')}} style={{color: 'white', fontSize: 20, marginVertical: 10}}>
            View Details...
          </Text>
        </View>
      </View>
    );
  };
  //console.log(data);
  return (
    <View style={{backgroundColor:'#d3d4ed'}}>
      <View style={{marginHorizontal:20,marginTop:20}}>
        <SearchBar
          lightTheme
          round
          placeholder="Search Here..."
          value={inputData}
          onChangeText={text => searchFunction(text)}
          autoCorrect={false}
        />
      </View>
      <View style={{margin: 30}}>
        <FlatList
          data={productsData}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
};
export default Products;

const styles = StyleSheet.create({});
