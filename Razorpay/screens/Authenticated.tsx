import React from 'react';
import {StyleSheet, Text, View, Image, Button} from 'react-native';
import auth from '@react-native-firebase/auth';
import Home from '../components/Home';

interface IProps{
  navigation?:any
}

export default function Authenticated(props:IProps) {
  const user = auth().currentUser;

  return (
    <View style={styles.screen}>
      {/* <Text style={styles.title}>You have logged in successfully</Text>
      <Image source={{uri: user?.photoURL}} style={styles.image} />
      <Text style={styles.text}>{user?.displayName}</Text>
      <Text style={styles.text}>{user?.email}</Text> */}
      <Text style={{fontSize:20}}>No Data Found</Text>
      <View style={{marginTop: 0}}>
        <Button
          title="Log out"
          onPress={() => {
            auth().signOut();
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 25,
    marginBottom: 30,
  },
  image: {
    height: 150,
    width: 150,
    borderRadius: 150,
    marginBottom: 20,
  },
  text: {
    fontSize: 20,
  },
});
