import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  TouchableHighlight,
  Alert,
} from 'react-native';
import React, {Component} from 'react';
import RazorpayCheckout from 'react-native-razorpay';
import {AppContext} from './AppContext';
import {FlatList} from 'react-native-gesture-handler';
import {Image} from 'react-native-elements';

export default class CartDetails extends Component {
  constructor(props: any) {
    super(props);
  }
  static contextType = AppContext;
  
  displayData = ({item}) => {
   const {increment} = this.context;
    return (
      <>
        <View
          style={{
            backgroundColor: '#f2cecb',
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
            <View style={{flexDirection: 'row', marginTop: 10}}>
              <TouchableOpacity
                style={{
                  padding: 10,
                  backgroundColor: '#3e3e3e',
                  marginRight: 10,
                  borderRadius: 10,
                }}>
                <Text style={{fontSize: 30, color: '#ffffff'}}>-</Text>
              </TouchableOpacity>
              <Text
                style={{fontSize: 20, alignSelf: 'center', fontWeight: 'bold'}}>
                0
              </Text>
              <TouchableOpacity onPress={()=>increment(item)}
                style={{
                  padding: 10,
                  backgroundColor: '#3e3e3e',
                  marginLeft: 10,
                  borderRadius: 10,
                }}>
                <Text style={{fontSize: 30, color: '#ffffff'}}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </>
    );
  };
  render() {
    const {cardData} = this.context;
    //console.log('this is cart',cardData);

    return (
      <View>
        <Text style={{fontSize: 30, fontWeight: 'bold', marginLeft: 20}}>
          CartDetails
        </Text>

        <FlatList
          data={cardData}
          renderItem={this.displayData}
          keyExtractor={item => item.id.toString()}
        />

        <TouchableOpacity
          style={{
            backgroundColor: '#0345fc',
            padding: 10,
            margin: 20,
            borderRadius: 10,
          }}
          onPress={() => {
            var options = {
              description: 'Credits towards consultation',
              image: 'https://i.imgur.com/3g7nmJC.png',
              currency: 'INR',
              key: 'rzp_test_locuRaWt3KL2uf', // Your api key
              amount: '5000',
              name: 'foo',
              prefill: {
                email: 'void@razorpay.com',
                contact: '9191919191',
                name: 'Razorpay Software',
              },
              theme: {color: '#F37254'},
            };
            RazorpayCheckout.open(options)
              .then(data => {
                // handle success
                Alert.alert(`Success: ${data.razorpay_payment_id}`);
              })
              .catch(error => {
                // handle failure
                Alert.alert(`Error: ${error.code} | ${error.description}`);
              });
          }}>
          <Text style={{fontSize: 20, color: '#ffffff', alignSelf: 'center'}}>
            Payment With Razorpay
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
