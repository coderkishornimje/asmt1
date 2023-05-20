import {Text, StyleSheet, View, Alert} from 'react-native';
import React, {Component, createContext} from 'react';

export const AppContext = createContext({});

interface IProps {
  navigation?: any;
  children: any;
}

interface IState {
  cartData:any[];
  wishlist:any[],
}

export default class AppContextProvider extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      cartData:[],
      wishlist:[],
    };
  }

  handleDetails = (data:any) => {
     
   const val=this.state.cartData.find((ele)=>{
       
          return ele.id===data.id;
   })
    if(val===undefined)
    {
     this.state.cartData.push(data);
    this.setState({cartData: this.state.cartData.map((ele)=>({
      ...ele,
      quantity:1,
    }))}); 
    // this.setState({
    //   cartData:[...this.state.cartData, quantity]
    // });

     console.log('somthing',this.state.cartData);
     console.log('HI==============================>',this.state.cartData);
    }
    else{
      Alert.alert("data alredy added");
    }
    console.log('added', this.state.cartData);
  };
   
  handleIncrement=(item)=>{
     console.log('hello');
     this.setState({cartData:this.state.cartData.map((ele)=>{
          if(item.id===ele.id)
          {
            ele.quantity=item.quantity+1;
          }
          return ele;
     })})
  }


  handleWishList = item => {
    // console.log(item)
    const {wishlist} = this.state;
    const index = wishlist.findIndex(p => p.id === item.id);
    if (index !== -1) {
      wishlist.splice(index, 1);
    } else {
      wishlist.push(item);
    }
    this.setState({
      wishlist,
    });
  };

  render() {
    return (
      <AppContext.Provider
        value={{
          sendItem: this.handleDetails,
          handleItem: this.handleWishList,
          increment:this.handleIncrement,
          cardData: this.state.cartData,
          wishlistData:this.state.wishlist,
        }}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

const styles = StyleSheet.create({});
