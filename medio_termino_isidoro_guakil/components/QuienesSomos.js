import * as react from 'react';
import React, { Component } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Image,
  TextInput,
  Dimensions,
  Button,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Communications from 'react-native-communications';
import MapView from 'react-native-maps';
import { AntDesign } from '@expo/vector-icons';

export default function QuienesSomos() {
  return (
    <View styl style={{ flex: 1, backgroundColor: 'black' }}>
      <Text>{'\n\n\n'}</Text>
      <Text
        style={{ fontWeight: 'bold', fontSize: 30, justifyContent: 'space-around', color:'white' }}>
        Quienes Somos
      </Text>
      <Image
        source={{
          uri:
            'https://i.pinimg.com/originals/9a/d5/df/9ad5df2d2799c1def8d6bbb233bafaeb.png',
        }}
        style={{ width: 400, height: 200 }}
      />
      <Text style={{ fontSize: 16, color:'white', justifyContent:'space-around' }}>
        Somos la cadena de restaurantes de entrega rápida más grande, exitosa e
        innovadora de México y para alcanzar el estandar de servicio necesario
        para lograrlo, mantenemos una estricta política de eficiencia y trato
        ético y honesto hacia nuestros clientes, proveedores, colaboradores,
        asociados y a la comunidad en general.
      </Text>
      <Image
        source={{
          uri:
            'https://cnnespanol.cnn.com/wp-content/uploads/2019/08/190806154802-dominos-pizza-prepara-stock-brexit-boris-johnson-reino-unido-portafolio-global-cnnee-00000000-full-169.jpg?quality=100&strip=info',
        }}
        style={{ width: 400, height: 200 }}
      />
    </View>
  );
}