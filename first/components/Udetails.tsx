import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {TextInput} from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface IState {
  name: string;
  email: string ;
  password: string | number | symbol;
  data:any[];
}
 interface IProps{
  navigation?:any
 }

export default class Udetails extends React.Component  <IProps, IState>{
  constructor(props: any) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      data:[],
    };
  }

  handleSubmit=async()=>{
    
    try{
      this.state.data.push({
         name: this.state.name,
         email:this.state.email,
         password:this.state.password

      });
     await AsyncStorage.setItem('USERS',JSON.stringify(this.state.data));
     
     //this.props.navigation.navigate('Login',{uname:this.state.name,uemail:this.state.email,upassword:this.state.password});
     console.log(this.state.data);
         
     this.props.navigation.navigate('Login');

     this.setState({
       name:'',
       email:'',
       password:''
     })
    }
    catch(err){
       
      console.log(err);
    }
  }

  render() {
    //console.log(this.state.name);
    //console.log(this.state.udetails);
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Create New Account</Text>

        <TextInput
          style={styles.inputs}
          placeholder="Name"
          onChangeText={e => {this.setState({name:e})}}
        />
        <TextInput
          style={styles.inputs}
          placeholder="Email"
          onChangeText={e => {this.setState({email:e})}}
        />
        <TextInput
          style={styles.inputs}
          placeholder="Password"
          onChangeText={e => {this.setState({password:e})}}
        />

        <TouchableOpacity style={styles.submit} onPress={this.handleSubmit}>
          <Text style={{color: 'white', fontSize: 20, alignSelf: 'center'}}>
            Submit
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  heading: {
    fontSize: 20,
    alignSelf: 'center',
    marginTop: 20,
  },

  inputs: {
    borderWidth: 1,
    padding: 10,
    margin: 20,
  },

  submit: {
    backgroundColor: '#252525',
    padding: 10,
    margin: 20,
  },
});
