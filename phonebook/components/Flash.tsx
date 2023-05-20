import { Text, StyleSheet, View, Image } from 'react-native'
import React, { Component } from 'react'


interface IState{

}
interface IProps{
  navigation?:any
}

export default class Flash extends Component <IProps,IState> {

  constructor(props:IProps){
    super(props);
  }

  componentDidMount(): void {
    setTimeout(() => {
       this.props.navigation.navigate('Login');
    }, 1000);
  }
  
  render() {
    return (
      <View style={styles.container}>
        {/* <Text style={styles.header}>flash screen</Text> */}
        <Image style={{height:300,width:300,}} source={require('../images/nike/nike.png')}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({

container:{
   flex:1,
  //  backgroundColor:'#D7D7D7',
   justifyContent:'center',
   alignItems:'center'
},
header:{
  fontSize:40,
},


})