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
            id:1, //Marker ID
            title:"Title1", //Title
            latlng:{  //Coordinates
              latitude: 37.58825,
              longitude: -122.4324,
            },
            color:'green' //Color
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
              latitude: 34.38825,
              longitude: -120.5324,
            },
            color:'red'
          },

          {
            id:4,
            title:"Title4",
            latlng:{  
              latitude: 25.38825,
              longitude: -120.5324,
            },
            color:'blue'
          },
            {
              id:5,
              title:"Title5",
              latlng:{  
                latitude: 25.38825,
                longitude: -119.5324,
              },
              color:'red'
            },
  
            {
              id:6,
              title:"Title6",
              latlng:{  
                latitude: 22.38825,
                longitude: -120.5324,
              },
              color:'blue'
            },
            
            {
              id:6,
              title:"Title6",
              latlng:{  
                latitude: 29.38825,
                longitude: -126.5324,
              },
              color:'blue'
            },
    
              {
                id:7,
                title:"Title7",
                latlng:{  
                  latitude: 27.38825,
                  longitude: -120.5324,
                },
                color:'blue'
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
