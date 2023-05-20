import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import React, {Component} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';


interface data{
  name:string,
  email:string,
  password:string|number
}


interface IState {
  name:string,
  email:string,
  password:string,
  items: any[];
}

interface IProps {
  route: any;
  navigation?: any;
}

export default class Home extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      name:"",
      email:"",
      password:"",
      items: [],
    };
  }

  async componentDidMount(): void {
    try {
      const data = await AsyncStorage.getItem('USERS');

      if (data !== null) {
        this.setState({items: JSON.parse(data)});
      }
      console.log(this.state.items);
    } catch (err) {
      console.log(err);
    }
  }

  deleteHandler =async (index: number) => { 

  //  const { items } = this.state;
  //       const newItem = items.filter((item, i) => i !== index);
  //       this.setState({ items: newItem});
      const result=await AsyncStorage.getItem('USERS');
      if(result !==null)
      this.setState=JSON.parse(result);
      console.log(this.state.items);
      const newItem = this.state.items.filter((item, i) => i !== index);
      await AsyncStorage.setItem('USERS',JSON.stringify(newItem));

  };

  render() {
    // const {route}=this.props;

    // const { uname } = route.params;
    // const { uemail } = route.params;
    // const { upassword } = route.params;
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>User Details</Text>
        {this.state.items.map((item,index) => {
          return (
            <>
              <View key={index} style={styles.details}>
                <Text style={{fontSize: 20, letterSpacing: 1, color: 'white'}}>
                  Name:{item.name}
                </Text>
                <Text style={{fontSize: 20, letterSpacing: 1, color: 'white'}}>
                  Email:{item.email}
                </Text>
                <Text style={{fontSize: 20, letterSpacing: 1, color: 'white'}}>
                  Password:{item.password}
                </Text>
                <TouchableOpacity onPress={(e)=>this.deleteHandler(index)}>
                  <Text>Delete</Text>
                </TouchableOpacity>
              </View>
            </>
          );
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
  heading: {
    fontSize: 30,
    textAlign: 'center',
    marginTop: 20,
    color: 'black',
  },
  details: {
    marginTop: 20,
    alignSelf: 'center',
    backgroundColor: 'gray',
    padding: 15,
    borderRadius: 10,
  },
});
