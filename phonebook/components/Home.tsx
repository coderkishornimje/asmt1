import {Text, StyleSheet, View, Image, FlatList} from 'react-native';
import React, {Component} from 'react';
import {ScrollView} from 'react-native-gesture-handler';

interface IState {
  images: [];
}
interface IProps {
  navigation?: any;
}
export default class Home extends Component<IProps,IState> {
  constructor(props: IProps) {
    super(props);
  }
  
   
  render() {
    return (
      <View style={styles.container}>
        <View style={{flex: 1}}>
          <View
            style={{
              margin: 10,
              padding: 3,
              borderWidth: 1,
              borderRadius: 10,
              backgroundColor: '#f7f7f7',
              position: 'absolute',
              left: 10,
            }}>
            <Image
              style={{
                height: 30,
                width: 30,
                marginLeft: 20,
                alignSelf: 'center',
                position: 'relative',
                right: 8,
              }}
              source={require('../images/menu.png')}
            />
          </View>
        </View>
        <View style={styles.contents}>
          <Image
            style={{
              height: 100,
              width: 100,
              marginLeft: 20,
              position: 'relative',
              top: 30,
            }}
            source={require('../images/nike/nike.png')}
          />
          <Text
            style={{
              fontSize: 60,
              marginLeft: 20,
              fontWeight: 'bold',
              color: '#09090d',
              position: 'relative',
            }}>
            AIRMAX
          </Text>
          <Text style={{fontSize: 60, marginLeft: 20, color: '#09090d'}}>
            2023
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={{fontSize: 30, marginLeft: 20, color: '#09090d'}}>
              $200
            </Text>
            <Image
              style={{
                height: 20,
                width: 20,
                position: 'relative',
                top: 10,
                left: 10,
              }}
              source={require('../images/nike/right-arrow.png')}
            />
          </View>
          <Image
            style={{
              height: 270,
              width: 400,
              position: 'relative',
              bottom: 130,
              left: 30,
            }}
            source={require('../images/nike/bg1.png')}
          />
        </View>

        <View style={{position: 'relative', bottom: 10}}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: '#09090d',
              marginLeft: 20,
            }}>
            Favorite
          </Text>
       
          <View style={{flexDirection: 'row'}}>
            <ScrollView style={{}} horizontal>
            <View
              style={{
                backgroundColor: '#f5c3bf',
                margin: 10,
                marginLeft: 20,
                borderRadius: 10,
              }}>
              <Image
                style={{height: 100, width: 100}}
                source={require('../images/nike/bg1.png')}
              />
              <Text
                style={{
                  fontSize: 13,
                  color: '#09090d',
                  position: 'relative',
                  top: 20,
                }}>
                Jully Kingston
              </Text>
            </View>
            <View
              style={{
                backgroundColor: '#f5c3bf',
                margin: 10,
                borderRadius: 10,
              }}>
              <Image
                style={{height: 100, width: 100, position: 'relative'}}
                source={require('../images/nike/bg1.png')}
              />
              <Text
                style={{
                  fontSize: 13,
                  color: '#09090d',
                  position: 'relative',
                  top: 20,
                }}>
                Jully Kingston
              </Text>
            </View>
            <View
              style={{
                backgroundColor: '#f5c3bf',
                margin: 10,
                borderRadius: 10,
              }}>
              <Image
                style={{height: 100, width: 100, position: 'relative'}}
                source={require('../images/nike/bg1.png')}
              />
              <Text
                style={{
                  fontSize: 13,
                  color: '#09090d',
                  position: 'relative',
                  top: 20,
                }}>
                Jully Kingston
              </Text>
            </View>
            <View
              style={{
                backgroundColor: '#f5c3bf',
                margin: 10,
                borderRadius: 10,
              }}>
              <Image
                style={{height: 100, width: 100, position: 'relative'}}
                source={require('../images/nike/bg1.png')}
              />
              <Text
                style={{
                  fontSize: 13,
                  color: '#09090d',
                  position: 'relative',
                  top: 20,
                }}>
                Jully Kingston
              </Text>
            </View>
            </ScrollView>
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
    backgroundColor: '#f2f4f5',
  },
  contents: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    position: 'absolute',
    top: 10,
  },
});
