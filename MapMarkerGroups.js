import React from 'react';
import { Marker } from 'react-native-maps';

import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import MapView from 'react-native-maps';
import Dimensions from 'Dimensions';
import {MARKERIMAGES} from './MarkerImages';

export default class MapMarkerGroup extends React.Component {
    constructor(props) {
        super(props);
        //Initialize the state variable
        this.state = { 
        region: {
            latitude:0,
            longitude: 0,
            latitudeDelta:0,
            longitudeDelta: 0,
            }, 
        };
        //Initalize the values used to calculate region
        maxLongitude=this.props.Markers[0].latlng.longitude;
        minLongitude=this.props.Markers[0].latlng.longitude;
        maxLatitude=this.props.Markers[0].latlng.latitude;
        minLatitude=this.props.Markers[0].latlng.latitude;
        longitudeSum=0;
        latitudeSum=0;
        numberOfMarkers=0;
        //Update the values
        this.markers=new Array();
        this.props.Markers.map((marker)=>{
            this.markers.push(marker.latlng);
            if(marker.latlng.longitude>maxLongitude){
                maxLongitude=marker.longitude;
            }
            if(marker.latlng.longitude<minLongitude){
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
        
        //Calculate Region as the center(average) of their coordinates
        this.state.region.latitude=latitudeSum/numberOfMarkers;
        this.state.region.longitude=longitudeSum/numberOfMarkers;
        this.state.region.latitudeDelta=maxLatitude-minLatitude;
        this.state.region.longitudeDelta=maxLatitude-minLatitude;
        console.log(this.markers);
        this.onRegionChange = this.onRegionChange.bind(this);


        
      }

      onRegionChange(region) {
        this.setState({ region });
      }
      
      componentDidUpdate(){
          console.log("trial");
           this.map.fitToCoordinates(this.markers, {animated:false});
      }
    render(){
       return(
        <View style={styles.container}>
        <MapView
        
          ref={ref => { this.map = ref; }}
        initialRegion={this.state.region}
        onRegionChangeComplete={this.onRegionChange}
        style={styles.map}>

        {this.props.Markers.map(marker => (
            <Marker
            key={marker.id}
            image={(marker.images!="default")?MARKERIMAGES[marker.image]:null}
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
