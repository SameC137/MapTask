import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView from 'react-native-maps';
import MapMarkerGroup from './Components/MapMarkerGroups';
import {MARKEREXAMPLEDATA} from './Constants/MarkerExampleData';
export default class App extends React.Component {
constructor(props) {
  super(props)
  //Setting up input for the Component
    this.state={
      markers:MARKEREXAMPLEDATA
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
