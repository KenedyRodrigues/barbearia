import React from 'react';
import { View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Certifique-se de que a biblioteca foi instalada
import styles from './style'; // Verifique o caminho do arquivo

//npm install react-native-vector-icons
const services = [
  { id: 1, name: 'Corte + sobrancelha + Barba', price: 'R$50', icon: 'scissors' }, 
  { id: 2, name: 'Pezinho + barba', price: 'R$30', icon: 'user' },
  { id: 3, name: 'Pezinho + sobrancelha', price: 'R$20', icon: 'eye' },
];

const Servicos = () => {
  return (
    <View style={{ padding: 20, backgroundColor: '#1E1E1E', flex: 1 }}>
      <Text style={styles.title}>Selecionar Barbeiro</Text>
      {services.map(service => (
        <TouchableOpacity key={service.id} style={styles.serviceCard}>
          <Icon name={service.icon} size={40} color="#FFFFFF" style={styles.icon} />
          <View style={styles.serviceDetails}>
            <Text style={styles.serviceName}>{service.name}</Text>
            <Text style={styles.servicePrice}>{service.price}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Servicos;