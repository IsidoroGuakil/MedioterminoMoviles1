import * as react from 'react';
import React, { Component } from 'react';
import {StyleSheet, TouchableOpacity, Text, View, Image, TextInput, Dimensions, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Communications from 'react-native-communications';
import MapView from 'react-native-maps';
import { AntDesign } from '@expo/vector-icons';


export default class Ubicacion extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.mapStyle}
          region={{
            // 19.419444°, -99.145556
            latitude: 19.419444,
            longitude: -99.145556,
            longitudeDelta: 35,
            latitudeDelta: 35,
          }}>
          <MapView.Marker
            coordinate={{
              latitude: 19.370724,
              longitude: -99.163983,
            }}
            title="Dominos Zapata"></MapView.Marker>

          <MapView.Marker
            coordinate={{
              latitude: 19.372628,
              longitude: -99.175962,
            }}
            title="Dominos Felix Cuevas"></MapView.Marker>

          <MapView.Marker
            coordinate={{
              latitude: 20.618511,
              longitude: -100.455246,
            }}
            title="Dominos Queretaro"></MapView.Marker>
        </MapView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});