import {Text, StyleSheet, View,Alert, Button} from 'react-native';
import React, {Component} from 'react';
import MapView, { PROVIDER_GOOGLE,Marker } from 'react-native-maps';
import Geolocation from "react-native-geolocation-service";

interface IState{
  markerPosition:{latitude: any,longitude: any},
  coordinates:{flatitude:number,flongitude:number},
  latitude: number,
  longitude: number,
  flatitude: number,
  flongitude: number,
}
interface IProps{
  navigation?:any
}
export default class App extends Component <IProps,IState> {

constructor(props:IProps){
  super(props);
  this.state={
    markerPosition: {
      latitude: 0,
      longitude: 0,
    },
       flatitude: 0,
       flongitude: 0,
       coordinates: {},
  }
}
// componentDidMount(): void {
//   Geolocation.getCurrentPosition(
//     position => {
//       this.setState({
//         flatitude: position.coords.latitude,
//         flongitude: position.coords.longitude,
//         coordinates: this.state.coordinates.concat({
//           flatitude: position.coords.latitude,
//           flongitude: position.coords.longitude,
        
//         })
//       });
//     },
//     error => {
//       Alert.alert(error.message.toString());
//     },
//     {
//       showLocationDialog: true,
//       enableHighAccuracy: true,
//       timeout: 20000,
//       maximumAge: 0
//     }
//   );
// }

handleLocation=()=>{
  Geolocation.getCurrentPosition(
    position => {
      this.setState({
        flatitude: position.coords.latitude,
        flongitude: position.coords.longitude,
        
        // coordinates: this.state.coordinates.concat({
        //   flatitude: position.coords.latitude,
        //   flongitude: position.coords.longitude,
        // })
      });
      this.setState({
        markerPosition: {
          latitude: position.coords.latitude,
          longitude:position.coords.longitude,
        },
      });
    },
    error => {
      Alert.alert(error.message.toString());
    },
    {
      showLocationDialog: true,
      enableHighAccuracy: true,
      timeout: 20000,
      maximumAge: 0
    }
  );
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
            latitude: 17.3850,
            longitude: 78.4867,
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
          <Button title='Show Current Location' onPress={this.handleLocation}/>
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
