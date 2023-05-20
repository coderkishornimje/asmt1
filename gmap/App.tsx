import {Text, StyleSheet, View} from 'react-native';
import React, {Component} from 'react';
import MapView, { PROVIDER_GOOGLE,Marker } from 'react-native-maps';

interface IState{
  markerPosition:{latitude: any,longitude: any},
  latitude: any,
  longitude: any,
}
interface IProps{
  navigation?:any
}
export default class App extends Component <IProps,IState> {

constructor(props:IProps){
  super(props);
  this.state={
    markerPosition: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
  }
}

handleMapPress = (event:any) => {
  this.setState({
    markerPosition: {
      latitude: event.nativeEvent.coordinate.latitude,
      longitude: event.nativeEvent.coordinate.longitude,
    },
  });
  
};

  render() {
    return (
      <View style={{flex:1}}>
        <MapView
          onPress={this.handleMapPress}
          style={{ flex: 1 }}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
            coordinate={{
              latitude: this.state.latitude,
              longitude: this.state.longitude,
            }}
          showsUserLocation={true}
          zoomEnabled={true}
          scrollDuringRotateOrZoomEnabled={true}
          scrollEnabled={true}
        >
         <Marker draggable
            coordinate={this.state.markerPosition} 
            pinColor = {"red"}
            onDragEnd={this.handleMapPress}
         />
        </MapView>
     
      <View>
          <Text style={styles.show}>Latitude:{this.state.markerPosition.latitude}</Text>
          <Text style={styles.show}>Longitude:{this.state.markerPosition.longitude}</Text>
          
          {/* <Text style={{fontSize:20}}>Longitude:{this.state.coordinate.longitude}</Text> */}
      </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  show:{
    fontSize:20,
    fontWeight:'bold',
    marginLeft:10,
    marginTop:10,
  }
});
