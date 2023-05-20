import {Text, StyleSheet, View, TextInput, Image} from 'react-native';
import React, {Component} from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface IState{

}

interface IProps{
  navigation?:any
}

export default class Login extends Component <IProps,IState> {

constructor(props:IProps){
    super(props);
}    

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.contents}>
          <Text style={styles.heading}>Log in</Text>

          <View style={styles.input}>
          <Image style={{height:20,width:20,marginLeft:5}} source={require('../images/mail.png')} />
          <TextInput style={{flex:1,marginLeft:15}}placeholder="Email" />
          </View>

          <View style={styles.input}>
          <Image style={{height:20,width:20,marginLeft:5}} source={require('../images/padlock.png')} />
          <TextInput style={{flex:1,marginLeft:15}}placeholder="Password" />
          </View>

          <TouchableOpacity style={styles.button} onPress={()=>this.props.navigation.navigate('CBTcontainer')}>
            <Text style={{ fontSize:15,alignSelf:'center',color:'#ffffff'}}>Log in to your account </Text>
            <Image style={{height:20,width:20,marginLeft:10,marginTop:3}} source={require('../images/right-arrow.png')} />
          </TouchableOpacity>
         
         <View style={{flexDirection:'row',marginTop:40}}>
            <Text style={{}}>I don't have account</Text>
            <Text style={{marginLeft:5,color:"#4254f5"}}>Sign up</Text>
         </View>

        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor:'#f2f4f5'
  },
  heading: {
    fontSize: 40,
    marginBottom: 30,
    fontWeight:'bold',
    color:'#000000'
  },
  contents: {
    margin: 30,
  },
  input: {
    backgroundColor: '#ECECEC',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom:15,
    padding:5
  },
  button:{
    flexDirection:'row',
    justifyContent:'center',
    backgroundColor:'#f55d42',
    padding: 15,
    marginTop:10,
    borderRadius:10,
  } 
});
