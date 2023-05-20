import { Text, StyleSheet, View,TextInput,TouchableOpacity } from 'react-native'
import React, { } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

interface IState{
    email:string,
    items:any[],
}

interface IProps{
  navigation?:any,
}

export default class Login extends React.Component <IProps,IState> {


constructor(props:any){
    super(props);
   this.state={
     email:'',
     items:[],
   };
}

handleLogin=async()=>{

  try{
  
     
  

  }
  catch(err){
    console.log(err);
  }

}


  render() {
    return (
      <View>
        <Text style={styles.heading}>Login Here</Text>
        <TextInput
          style={styles.inputs}
          placeholder="Email"
          onChangeText={e => {this.setState({email:e})}}
        />
        <TextInput
          style={styles.inputs}
          placeholder="Password"
          onChangeText={e => {this.setState({email:e})}}
        />
        <TouchableOpacity style={styles.submit} onPress={()=>this.props.navigation.navigate('Home')}>
          <Text style={{color: 'white', fontSize: 20, alignSelf: 'center'}}>
            Login
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({

heading:{
    fontSize:30,
    alignSelf:'center',
    marginTop:20
},
inputs:{
    borderWidth: 1,
    padding: 10,
    margin: 20,
},

submit:{
    backgroundColor: '#252525',
    padding: 10,
    margin: 20,
}


})