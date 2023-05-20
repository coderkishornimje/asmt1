import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import React, {Component} from 'react';
import {Image} from 'react-native-elements';
import {AppContext} from './AppContext';
import DIcon from 'react-native-vector-icons/AntDesign';

const hearto = <DIcon name="hearto" size={30} color="#000000" />;
const arrowleft = <DIcon name="arrowleft" size={30} color="#000000" />;
const heart = <DIcon name="heart" size={30} color="red" />;

interface IProps {
  navigation?: any;
  route?: any;
}

export default class Singlep extends Component<IProps> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      wishList:false
    };
  }
  static contextType = AppContext;

  render() {
    const {Item} = this.props.route.params;
    const {sendItem,handleItem,wishlistData} = this.context;
    const isWishlisted = wishlistData.findIndex(p=>p.id === Item.id) !== -1;

    console.log(wishlistData);
    return (
      <View style={{flex: 1, justifyContent: 'center'}}>
        <View
          style={{
            backgroundColor: '#9d8eed',
            alignSelf: 'center',
            padding: 20,
            borderRadius: 20,
          }}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text
              style={{marginRight: 10}}
              onPress={() => this.props.navigation.navigate('Home')}>
              {arrowleft}
            </Text>
            <View
              style={{
                height: 200,
                width: 150,
                borderRadius: 50,
                alignSelf: 'center',
              }}>
              <Image
                style={{height: '100%', width: '100%', borderRadius: 10}}
                source={{uri: this.props.route.params.image}}
              />
            </View>
            {/* <Text onPress={()=>sendItem(Item)}
              style={{marginRight: 10}}
               >
              {hearto}
            </Text> */}
            <TouchableOpacity
              onPress={() => {
                handleItem(Item);
                this.props.navigation.navigate('Wishlist');
                //this.setState({wishList: !wishList});
              }}
              >
              <DIcon
                name="heart"
                size={30}
                color={!isWishlisted ? '#ffffff' : '#FE6244'}
              />
            </TouchableOpacity>
          </View>
          <View style={{margin: 20, position: 'relative', left: 10}}>
            <Text
              style={{fontSize: 30, fontWeight: 'bold', alignSelf: 'center'}}>
              {this.props.route.params.name}
            </Text>
            <Text style={{fontSize: 15, fontWeight: 'bold'}}>
              {this.props.route.params.desc}
            </Text>
            <Text
              style={{fontSize: 20, fontWeight: 'bold', alignSelf: 'center'}}>
              {this.props.route.params.price}
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => sendItem(Item)}
            style={{
              backgroundColor: '#0345fc',
              padding: 10,
              borderRadius: 10,
            }}>
            <Text style={{fontSize: 15, color: '#ffffff', alignSelf: 'center'}}>
              Add To Cart
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
