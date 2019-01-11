import React from 'react';
import { Marker } from 'react-native-maps';

import { StyleSheet, Text, View } from 'react-native';
import MapView from 'react-native-maps';
import Dimensions from 'Dimensions';

export default class MapMarkerGroup extends React.Component {
    constructor(props) {
        super(props);
        //Initiate State
        this.state = { 
        region: {
            latitude:0,
            longitude: 0,
            latitudeDelta:0,
            longitudeDelta: 0,
            }, 
        };
        //Initiate Variables for finding Region
        maxLongitude=this.props.Markers[0].latlng.longitiude;
        minLongitude=this.props.Markers[0].latlng.longitiude;
        maxLatitude=this.props.Markers[0].latlng.latitude;
        minLatitude=this.props.Markers[0].latlng.latitude;
        longitudeSum=0;
        latitudeSum=0;
        numberOfMarkers=0;
        //Find Region Values
        this.props.Markers.map((marker)=>{
            if(marker.latlng.longitude>maxLongitude){
                maxLongitude=marker.longitiude;
            }
            if(marker.longitude<minLongitude){
                minLongitude=marker.latlng.longitude;
            }
            if(marker.latlng.latitude>maxLatitude){
                maxLatitude=marker.latlng.latitude;
            }
            if(marker.latlng.latitude<minLatitude){
                minLatitude=marker.latlng.latitude;
            }
            
            longitudeSum+=marker.latlng.longitude;
            latitudeSum+=marker.latlng.latitude;
            numberOfMarkers+=1;
        })
        //Set Region Values
        this.state.region.latitude=latitudeSum/numberOfMarkers;
        this.state.region.longitude=longitudeSum/numberOfMarkers;
        //Set Region Delta as the max distance from the center
        if((this.state.region.longitude-maxLongitude)<(this.state.region.longitude-minLongitude)){
            
            this.state.region.longitudeDelta=this.state.region.longitude-minLongitude + 1;
        }else{
            this.state.region.longitudeDelta=this.state.region.longitude-maxLongitude + 1;
        }
        
        
         if((this.state.region.latitude-maxLatitude)<(this.state.region.latitude-minLatitude)){
            
            this.state.region.latitudeDelta=this.state.region.latitude-minLatitude + 1;
        }else{
            this.state.region.latitudeDelta=this.state.region.latitude-maxLatitude + 1;
        }
      
        //Bind the Function to the event
        this.onRegionChange = this.onRegionChange.bind(this);
      }

        //On RegionChange(Pan) handler
      onRegionChange(region) {
        this.setState({ region });
      }
      
    render(){
       return(
        <View style={styles.container}>
        <MapView
        region={this.state.region}
        onRegionChangeComplete={this.onRegionChange}
        style={styles.map}>

        {this.props.Markers.map(marker => (
            <Marker
            key={marker.id}
            coordinate={marker.latlng}
            title={marker.title}
            pinColor={marker.color}
            />
        ))} 
      
      </MapView>
      </View>
      
    )
    }

}

//Get Dimension of our view window
var {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    map :{
      width:width/1.5,
      height:height/1.5
      }
  });
