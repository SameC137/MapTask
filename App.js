import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView from 'react-native-maps';
import MapMarkerGroup from './MapMarkerGroups';

export default class App extends React.Component {
constructor(props) {
  super(props)
  //Setting up input for the Component
    this.state={
      markers:[
          {
            id:1, //Key
            title:"Title1", //Title
            latlng:{  //Coordinates
              latitude: 37.58825,
              longitude: -122.4324,
            },
            color:'green' //Color For our Marker
          },
          {
            id:2,
            title:"Title2",
            latlng:{  
              latitude: 37.48825,
              longitude: -122.4324,
            },
            color:'yellow'
          },
          {
            id:3,
            title:"Title3",
            latlng:{  
              latitude: 37.38825,
              longitude: -122.5324,
            },
            color:'red'
          }
       ]
    };
  }
  //Render the app
  render() {
    return (
      <View style={styles.container}>
        <MapMarkerGroup Markers={this.state.markers}/>
      </View>
    );
  }
}

//Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map :{
    width:'100%',
    height:'90%'
    }
});
