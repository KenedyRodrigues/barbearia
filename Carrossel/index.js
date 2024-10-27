import React from 'react';
import { FontAwesome, MaterialCommunityIcons as Icon } from '@expo/vector-icons';
import Swiper from 'react-native-swiper'; // npm install --save react-native-swiper
import styles from './style';
import { Text,View, ScrollView, Image} from 'react-native'; 

const images = [
  require('./imagens/barbearia.png'),
  require('./imagens/barbearia.png'),
  require('./imagens/barbearia.png'),
];

export default function Carrossel() {
  return (
   <ScrollView style={styles.container} scrollEnabled={false}>
     <View style={styles.iconeView}>    
      <FontAwesome name="user" size={40} color="#000" /> 
      <Text style={styles.textoPerfil}>Meu perfil</Text>  
      <FontAwesome name="bars" size={30}  color="white" />
    </View>
    <View style={styles.textView}>
    <Text style={styles.textPrincipal}>Escolha o profissional de sua preferência e reserve um horário</Text>
    </View>
    <Text style={styles.textServico}>Serviços</Text>
    <View style={styles.viewServico}>
      <View>
        <Icon style={styles.viewIcones} name="content-cut" size={40} color="#000" />
      </View>
      <View>
      <Icon style={styles.viewIcones} name="mustache" size={40} color="#000" />
      </View>
      <View>
      <Icon style={styles.viewIcones} name="razor-double-edge" size={40} color="#000" />
      </View>
    </View>
    <View style={styles.containerTextServico}>
      <Text style={styles.servicoText}>Corte completo</Text>
      <Text style={styles.servicoText}>Barba e bigode</Text>
      <Text style={styles.servicoText}>Pezinho e sobrancelha</Text>
    </View>
    <View > 
      <Text style={styles.textServico} >Galeria</Text>
    </View>

    <Swiper
      style={styles.wrapper}
      showsButtons={false}
      autoplay={true}
      autoplayTimeout={3} // Tempo em segundos para cada slide
    >
      {images.map((image, index) => (
        <View key={index} style={styles.slide}>
          <Image source={image} style={styles.image1} />
        </View>
      ))}
    </Swiper>

   </ScrollView>
  );
}