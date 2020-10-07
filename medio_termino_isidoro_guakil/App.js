import * as react from 'react';
import React, { Component } from 'react';
import {StyleSheet, TouchableOpacity, Text, View, Image, TextInput, Dimensions, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Communications from 'react-native-communications';
import MapView from 'react-native-maps';
import { AntDesign } from '@expo/vector-icons';

import QuienesSomos from './components/QuienesSomos.js';
import Contacto from './components/Contacto';
import Ubicacion from './components/Ubicacion';

const Tab = createBottomTabNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'QuienesSomos') {
              iconName = 'ios-pizza';
            } else if (route.name === 'Contacto') {
              iconName = 'ios-headset';
            } else if (route.name === 'Ubicacion') {
              iconName = 'ios-locate';
            }
            return <Ionicons name={iconName} size={size} color="color" />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}>
        <Tab.Screen name="QuienesSomos" component={QuienesSomos} />
        <Tab.Screen name="Contacto" component={Contacto} />
        <Tab.Screen name="Ubicacion" component={Ubicacion} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
