import React, { useState } from 'react';
import {View, Image} from 'react-native';
import Swiper from 'react-native-swiper';
import styles from './style';

/* npm install --save react-native-swiper */

const images = [
  require('./imagens/barbearia.png'),
  require('./imagens/barbearia.png'),
  require('./imagens/barbearia.png'),
  require('./imagens/barbearia.png'),
  require('./imagens/barbearia.png'),
  require('./imagens/barbearia.png'),
  require('./imagens/barbearia.png'),
  require('./imagens/barbearia.png'),
  require('./imagens/barbearia.png'),
  require('./imagens/barbearia.png'),
  require('./imagens/barbearia.png'),
  require('./imagens/barbearia.png'),
  require('./imagens/barbearia.png'),
];



export default function Carrossel() {
  return (
    <View>
    <Swiper
      style={styles.wrapper}
      showsButtons={false}
      autoplay={true}
      autoplayTimeout={3} // tempo em segundos para cada slide
    >
      {images.map((image, index) => (
        <View key={index} style={styles.slide}>
          <Image source={image} style={styles.image1} />
        </View>
      ))}
    
    </Swiper>
    </View>
    
  );
};