import React, { useState } from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome'; 
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './style';
import { Text, View, ScrollView, TouchableOpacity, Modal } from 'react-native'; 
import Carrossel from '../Carrossel/';
import { useRoute, useFocusEffect  } from '@react-navigation/native';

export default function Perfil({navigation}) {
  const route = useRoute();
  const { nome, telefone } = route.params || {};

  const [menuVisible, setMenuVisible] = useState(false);

  const [nomeCe, setNomeCe] = useState(nome);
  const [telefoneCe, setTelefoneCe] = useState(telefone);

  return (
    <ScrollView style={styles.container} scrollEnabled={true}>
      <View style={styles.iconeView}>    
        <FontAwesome name="user" size={40} color="#000" /> 
        <Text style={styles.textoPerfil}>Perfil</Text>  
        <TouchableOpacity onPress={() => setMenuVisible(true)}>
          <FontAwesome name="bars" size={30} color="white" />
        </TouchableOpacity>
      </View>

      {/* Modal para o menu hambúrguer */}
      <Modal
        transparent={true}
        visible={menuVisible}
        animationType="slide"
        onRequestClose={() => setMenuVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TouchableOpacity onPress={() => setMenuVisible(false)}>
              <Text style={styles.closeButton}>Fechar</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={styles.menuItem} 
              onPress={() => {
                setMenuVisible(false);
                navigation.navigate("Servicos");

              }}
            >
              <Text style={styles.menuItemText}>Meu perfil</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={styles.menuItem} 
              onPress={() => {
                setMenuVisible(false);
                navigation.navigate("Agendamentos");
              }}
            >
              <Text style={styles.menuItemText}
               
        onPress={()=>{
          navigation.navigate("")
        }}
              >Meus agendamentos</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={styles.menuItem} 
              onPress={() => {
                setMenuVisible(false);
                navigation.navigate("SalvarHorario", {telefoneCe, nomeCe});
              }}
            >
              <Text style={styles.menuItemText}>Novo agendamento</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <View style={styles.textView}>
        <Text style={styles.textPrincipal}>Escolha o profissional de sua preferência e reserve um horário</Text>
      </View>
      
      <Text style={styles.textServico}>Serviços</Text>
      
      <View style={styles.viewServico}>
        <Icon style={styles.viewIcones} name="content-cut" size={40} color="#000" />
        <Icon style={styles.viewIcones} name="mustache" size={40} color="#000" />
        <Icon style={styles.viewIcones} name="razor-double-edge" size={40} color="#000" />
      </View>
      
      <View style={styles.containerTextServico}>
        <Text style={styles.servicoText}>Corte completo</Text>
        <Text style={styles.servicoText}>Barba e bigode</Text>
        <Text style={styles.servicoText}>Pezinho e sobrancelha</Text>
      </View>
      
      <Text style={styles.textServico}>Galeria</Text>
      <View style={styles.containerCarrossel}>
        <Carrossel />
      </View>
      
      <TouchableOpacity
        style={styles.botaoReservar}
        onPress={() => navigation.navigate("SalvarHorario", {telefoneCe, nomeCe})}
      >
        <Text style={styles.buttonText}>Agendar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}