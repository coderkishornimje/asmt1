import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'
import {AppContext} from './AppContext';
import { FlatList } from 'react-native-gesture-handler';
import { Image } from 'react-native-elements';

export default class Wishlist extends Component {

static contextType = AppContext;  

displayData = ({item}) => {
    return (
      <>
        <View
          style={{
            backgroundColor: '#5870f5',
            margin: 10,
            padding: 10,
            justifyContent: 'space-around',
            borderRadius: 20,
            flexDirection: 'row',
          }}>
          <View style={{height: 200, width: 150, borderRadius: 50}}>
            <Image
              style={{height: '100%', width: '100%', borderRadius: 10}}
              source={{uri: item.thumbnail}}
            />
          </View>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontSize: 15, fontWeight: 'bold'}}>{item.title}</Text>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>{item.brand}</Text>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>{item.price}</Text>
          </View>
        </View>
      </>
    );
  };

  render() {
 const {wishlistData} = this.context;    

    return (
      <View style={{flex:1}}>
        <Text style={{fontSize:30,fontWeight:'bold',alignSelf:'center'}}>Wishlist</Text>
        <FlatList
          data={wishlistData}
          renderItem={this.displayData}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({})