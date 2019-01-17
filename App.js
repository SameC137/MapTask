import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView from 'react-native-maps';
import MapMarkerGroup from './Components/MapMarkerGroups';

export default class App extends React.Component {
constructor(props) {
  super(props)
  //Setting up input for the Component
    this.state={
      markers:[
          {
            id:"1",
            title:"Title1",
            image:"black",//Image choice use default to use default markers
            latlng:{  
              latitude: 35.58825,
              longitude: -100.4324,
            },
            color:'green' //Color is only used when the value for image is default
          },
          {
            id:"2",
            title:"Title2",
            image:"redpin",
            latlng:{  
              latitude: 37.48825,
              longitude: -122.4324,
            },
            color:'yellow'
          },
          {
            id:"3",
            title:"Title3",
            image:"default",
            latlng:{  
              latitude: 34.38825,
              longitude: -120.5324,
            },
            color:'red'
          },

          {
            id:"4",
            title:"Title4",
            image:"pin",
            latlng:{  
              latitude: 25.38825,
              longitude: -120.5324,
            },
            color:'blue'
          },
            {
              id:"5",
              title:"Title5",
              image:"materialpin",
              latlng:{  
                latitude: 25.38825,
                longitude: -115.5324,
              },
              color:'red'
            },
  
            {
              id:"6",
              title:"Title6",
              image:"pin",
              latlng:{  
                latitude: 22.38825,
                longitude: -120.5324,
              },
              color:'blue'
            },
            
            {
              id:"7",
              title:"Title7",
              image:"redpin",
              latlng:{  
                latitude: 29.38825,
                longitude: -126.5324,
              },
              color:'blue'
            },
    
              {
                id:"8",
                title:"Title8",

              image:"black",
                latlng:{  
                  latitude: 27.38825,
                  longitude: -120.5324,
                },
                color:'blue'
              },{
                id:"9",
                title:"Title9",
                image:"default",
                latlng:{  
                  latitude: 22.38825,
                  longitude: -100.5324,
                },
                color:'orange'
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
