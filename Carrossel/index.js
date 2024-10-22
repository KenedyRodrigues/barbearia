import React from 'react';
import { StyleSheet, View, Image, Dimensions } from 'react-native';
import Swiper from 'react-native-swiper';

/* npm install --save react-native-swiper */

const { width: viewportWidth } = Dimensions.get('window');

const images = [
  require('./imagens/barbearia.png'),
  require('./imagens/barbearia.png'),
  require('./imagens/barbearia.png'),
];

const ImageCarousel = () => {
  return (
    <Swiper
      style={styles.wrapper}
      showsButtons={true}
      autoplay={true}
      autoplayTimeout={3} // tempo em segundos para cada slide
    >
      {images.map((image, index) => (
        <View key={index} style={styles.slide}>
          <Image source={image} style={styles.image} />
        </View>
      ))}
    </Swiper>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    height: 10000, // Altura do carrossel
  },
  slide: {
    width: viewportWidth,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '50%',
    height: '50%',
    resizeMode: 'cover',
  },
});

export default ImageCarousel;