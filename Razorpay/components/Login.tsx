import {Text, StyleSheet, View} from 'react-native';
import React, {Component} from 'react';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import Authenticated from '../screens/Authenticated';
import Authenticate from '../screens/Authenticate';


interface IProps{
    navigation?:any
}

export default class Login extends Component <IProps> {

constructor(props:IProps){
    super(props);
   this.state={
    Authenticated:false
   }
    GoogleSignin.configure({
        webClientId:
          '680990704039-5fmc84u15qhueqhoog414jgh0miurela.apps.googleusercontent.com',
      });
    
}

componentDidMount() {

    auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({authenticated: true});
      } else {
        this.setState({authenticated: false});
      }
    });
  }

  handleGoogleButtonPress = async () => {
    try {
      // get the user id token
      const {idToken} = await GoogleSignin.signIn();
      // create a credential using the token
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      // authenticate the user using the credential
      console.log('try block');

      return auth().signInWithCredential(googleCredential);
    } catch (error) {
      console.log('error', JSON.stringify(error));
    }
  };

  render() {
    if (this.state.authenticated) {
      this.props.navigation.navigate('Home');
      return <Authenticated />;  
    }
    return (
      <View style={styles.container}>
        <View style={{height:'50%',position:'relative',top:70}}>
          <Text style={{fontSize: 40, position:'relative',left:10, fontWeight:'bold'}}>Login</Text>
          <TextInput
            style={styles.input}
            //value={this.state.email}
            placeholder="Email"
            onChangeText={text => {
              this.setState({email: text});
            }}
          />
          <TextInput
            style={styles.input}
            //value={this.state.email}
            placeholder="Password"
            onChangeText={text => {
              this.setState({email: text});
            }}
          />
          <TouchableOpacity
            onPress={()=>this.props.navigation.navigate('Home')}
            style={{
              backgroundColor: '#0345fc',
              padding: 10,
              margin: 10,
              borderRadius: 10,
            }}>
            <Text style={{fontSize: 20, color: '#ffffff', alignSelf: 'center'}}>
              Login
            </Text>
          </TouchableOpacity>
          <Authenticate
            style={{}}
            handleGoogleButtonPress={this.handleGoogleButtonPress}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '',
  },
  input: {
    borderWidth: 2,
    margin: 10,
    borderRadius: 10,
    padding: 10,
  },
});
