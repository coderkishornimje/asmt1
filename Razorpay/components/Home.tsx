import {Text, StyleSheet, View, FlatList, Image} from 'react-native';
import React, {Component} from 'react';
import axios from 'axios';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Button, ListItem, SearchBar} from 'react-native-elements';
import auth from '@react-native-firebase/auth';
import DIcon from 'react-native-vector-icons/AntDesign';

const card = <DIcon name="shoppingcart" size={30} color="#000000" />;
const heart = <DIcon name="heart" size={30} color="green" />;

interface IProps {
  navigation?: any;
}
interface IData {
  brand: string;
  title: string;
  thumbnail: any;
  price: number;
  description: string;
}
interface IState {
  items: [];
  searchValue: '';
}
export default class Home extends Component<IProps, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      items: [],
      searchValue: '',
    };
  }
  user = auth().currentUser;

  componentDidMount(): void {
    this.fetchData();
  }

  fetchData = async () => {
    try {
      const response = await axios.get('https://dummyjson.com/products');
      const data = response.data.products;
      this.setState({items: data});
    } catch (error) {
      console.error(error);
    }
  };

  searchFunction = (text: string) => {
    const {items} = this.state;
    const updatedData = items.filter(item => {
      const item_data = `${item.brand.toUpperCase()})`;
      const text_data = text.toUpperCase();
      return item_data.indexOf(text_data) > -1;
    });
    this.setState({items: updatedData, searchValue: text});
  };

  renderItem = ({item}: {item: IData}) => {
    return (
      <>
        <View style={{flex: 1, justifyContent: 'center'}}>
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
              <Text style={{fontSize: 15, fontWeight: 'bold'}}>
                {item.title}
              </Text>
              <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                {item.brand}
              </Text>
              <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                {item.price}
              </Text>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Home')}
                style={{
                  backgroundColor: '#0345fc',
                  padding: 10,
                  borderRadius: 10,
                }}>
                <Text
                  style={{fontSize: 15, color: '#ffffff', alignSelf: 'center'}}>
                  Add To Cart
                </Text>
              </TouchableOpacity>
              <Text
                onPress={() =>
                  this.props.navigation.navigate('Singlep', {
                    price: item.price,
                    name: item.brand,
                    desc: item.description,
                    image: item.thumbnail,
                    Item:item
                  })
                }
                style={{
                  fontSize: 15,
                  position: 'relative',
                  top: 20,
                  fontWeight: 'bold',
                }}>
                View Details
              </Text>
            </View>
          </View>
        </View>
      </>
    );
  };

  render() {
    //console.log(this.state.items);
    return (
      <View>
        <View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:20}}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>
          {this.user?.displayName}
        </Text>
        <Text style={{fontSize:20}} onPress={()=>this.props.navigation.navigate('Wishlist')}>{heart}</Text>
        <Text
          style={{marginRight: 10}}
          onPress={()=>this.props.navigation.navigate('CartDetails')}
          >
          {card}
        </Text>
        </View>
        <SearchBar
          lightTheme
          round
          placeholder="Search Here..."
          value={this.state.searchValue}
          onChangeText={text => this.searchFunction(text)}
          autoCorrect={false}
        />
        <FlatList
          data={this.state.items}
          renderItem={this.renderItem}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({});
