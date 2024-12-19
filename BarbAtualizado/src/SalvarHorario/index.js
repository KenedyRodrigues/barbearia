import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, FlatList, Modal, Vibration} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './style';
import axios from "axios";
import { useRoute, useFocusEffect  } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';



export default function SalvarHorario({ navigation }) {
  const route = useRoute();
  //const { selectedTime } = route.params || {};
  //const { selectedDate } = route.params || {};
  //const { nome } = route.params || {};
  //const { telefone } = route.params || {};

  const { selectedTime: initialTime, selectedDate: initialDate, nomeCe, telefoneCe } = route.params || {};
  
  // Usando useState para armazenar a data e a hora
  const [selectedDate, setSelectedDate] = useState(initialDate || ''); 
  const [selectedTime, setSelectedTime] = useState(initialTime || ''); 
  const [nomeCer, setNomeCer] = useState(nomeCe); // Estado para o nome
  const [telefoneCer, setTelefoneCer] = useState(telefoneCe);

  
  const formatDate = (date) => {
    const d = new Date(date); // Cria um objeto Date a partir da string
    d.setMinutes(d.getMinutes() + d.getTimezoneOffset()); // Ajusta para evitar problemas de fuso horário
    const day = String(d.getDate()).padStart(2, '0'); // Obtém o dia com 2 dígitos
    const month = String(d.getMonth() + 1).padStart(2, '0'); // Obtém o mês com 2 dígitos
    return `${day}/${month}`; // Retorna a data no formato DD/MM
  };

  const selectedDateFormatted = formatDate(selectedDate);

  console.log('nomecer', nomeCer)
  console.log('telefonecer:', telefoneCer)

  const [barbeiroSelecionado, setBarbeiroSelecionado] = useState(null);
  const [mostrarListaBarbeiros, setMostrarListaBarbeiros] = useState(false);
  const [servicosSelecionados, setServicosSelecionados] = useState([]);
  const [mostrarListaServicos, setMostrarListaServicos] = useState(false);



  const barbeiros = [
    { id: '1', nome: 'Roney' },
    { id: '2', nome: 'Bruno' },
    { id: '3', nome: 'Tony' }
  ];

  const servicos = [
    { id: '1', nome: 'Cabelo' },
    { id: '2', nome: 'Barba' },
    { id: '3', nome: 'Pezinho' },
    { id: '4', nome: 'Sobrancelha' },
  ];

  const escolherBarbeiro = (barbeiro) => {
    setBarbeiroSelecionado(barbeiro);
    setMostrarListaBarbeiros(false);
    salvarDados();
  };

  const toggleServico = (id) => {
    setServicosSelecionados((prev) => {
      if (prev.includes(id)) {
        return prev.filter((item) => item !== id); // Remove o serviço se já estiver selecionado
      } else {
        return [...prev, id]; // Adiciona o serviço se não estiver selecionado
      }
    });
    //setServicosSelecionados((prev) => 
      //prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    //);
    //salvarDados();
  };

  const renderServico = ({ item }) => {
    const isSelected = servicosSelecionados.includes(item.id);
    return (
      <TouchableOpacity
        style={[styles.barbeiroItem, isSelected && styles.selectedOption]}
        onPress={() => toggleServico(item.id)}
      >
        <Text style={styles.textBarbeiro}>{item.nome}</Text>
      </TouchableOpacity>
    );
  };

  const carregarDados = async () => {
    try {
      const nomeSalvo = await AsyncStorage.getItem('nome');
      const telefoneSalvo = await AsyncStorage.getItem('telefone');
      const barbeiroSalvo = await AsyncStorage.getItem('barbeiro');
      const servicosSalvos = await AsyncStorage.getItem('servicos');
      //const dateSalvo = await AsyncStorage.getItem('selectedDateFormatted');
      //const timeSalvo = await AsyncStorage.getItem('selectedTime');

      // Atualiza os estados apenas se os dados foram carregados corretamente
      if (nomeSalvo) setNomeCer(nomeSalvo);
      if (telefoneSalvo) setTelefoneCer(telefoneSalvo);
      if (barbeiroSalvo) setBarbeiroSelecionado(JSON.parse(barbeiroSalvo));
      if (servicosSalvos) setServicosSelecionados(JSON.parse(servicosSalvos));
      //if (dateSalvo) selectedDateFormatted(dateSalvo); // Atualiza o estado selectedDate
      //if (timeSalvo) setSelectedTime(timeSalvo); // Atualiza o estado selectedTime
    } catch (e) {
      console.error('Erro ao carregar dados do AsyncStorage', e);
    }
  };
  
  const salvarDados = async () => {
    try {
      // Verifica se cada valor é válido antes de salvar
      if (nomeCer && nomeCer.trim() !== '') {
        await AsyncStorage.setItem('nome', nomeCer);
      }
      if (telefoneCer && telefoneCer.trim() !== '') {
        await AsyncStorage.setItem('telefone', telefoneCer);
      }
      await AsyncStorage.setItem('barbeiro', JSON.stringify(barbeiroSelecionado) || '{}');
      await AsyncStorage.setItem('servicos', JSON.stringify(servicosSelecionados) || '[]');
      console.log("Dados salvos:", { nomeCer, telefoneCer, barbeiroSelecionado, servicosSelecionados });
    } catch (e) {
      console.error('Erro ao salvar dados no AsyncStorage', e);
    }
  };


  

  // Função para carregar os dados do AsyncStorage


  useFocusEffect(
    React.useCallback(() => {
      carregarDados();
    }, [])
  );
  useEffect(() => {
    if (nomeCer && telefoneCer && barbeiroSelecionado !== null && servicosSelecionados.length > 0) {
      salvarDados();
    }
  }, [nomeCer, telefoneCer, barbeiroSelecionado, servicosSelecionados]);

  
  
  const agendar = async () => {
    console.log('Função agendar chamada'); // Log para verificar se a função foi chamada
  
    // Verificação dos campos obrigatórios
    if (!nomeCer || !telefoneCer || !barbeiroSelecionado || servicosSelecionados.length === 0 || !selectedDate || !selectedTime) {
      alert('Por favor, preencha todos os campos!');
      return;
    }
  
    // Organizar os dados para envio
    const dadosAgendamento = {
      nome: nomeCer,
      telefone: telefoneCer,
      barbeiro: barbeiroSelecionado.id, // Enviar apenas o ID do barbeiro
      servicosSelecionados: servicosSelecionados, // Array de IDs de serviços
      dataMarcado: selectedDate, // Certifique-se de que está no formato 'YYYY-MM-DD'
      hora: selectedTime // Certifique-se de que está no formato 'HH:MM'
    };
  
    console.log('Dados formatados para envio:', dadosAgendamento);
  
    try {
      const response = await axios.post('http://192.168.15.143:3000/api/agendar', dadosAgendamento);
  
      // Exibir a resposta do backend
      Alert.alert(response.data.message);
      Vibration.vibrate();
      navigation.navigate('Login'); // Navegar para a tela de login após sucesso
    } catch (error) {
      console.error('Erro ao registrar:', error);
      Alert.alert('Erro ao registrar usuário');
      Vibration.vibrate();
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerItems}>
        <Text style={styles.textPrincipal}>Novo Agendamento</Text>
        <TouchableOpacity style={styles.iconContainer}>
          <Icon name="close" size={20} color="#fff" />
        </TouchableOpacity>
      </View>



      <View style={styles.containerConteudo}>


      <Text style={styles.textSecundario}>Dia e hora</Text>
        <TouchableOpacity 
        style={styles.buttonEscolher}
        onPress={() =>
          navigation.navigate('Agendamento', {
            nome: nomeCer, 
            telefone: telefoneCer,
            barbeiro: barbeiroSelecionado, 
            servicos: servicosSelecionados,
            //selectedDateFormatted: selectedDateFormatted,
            selectedTime: selectedTime,
            
          })
        }
        >
          <Text style={styles.textButton}>
          {selectedDateFormatted && selectedTime 
              ? `Selecionado: ${selectedDateFormatted} ${selectedTime}` 
              : 'Selecionar data'}
          </Text>
        </TouchableOpacity>
        
        




        <Text style={styles.textSecundario}>Serviço</Text>
        <TouchableOpacity
        style={styles.buttonEscolher}
        onPress={() => setMostrarListaServicos(true)} // Abre o modal de serviços
        >
        <Text style={styles.textButton}>
        {servicosSelecionados.length > 0 ? 
            `Selecionado(s): ${servicos
            .filter(servico => servicosSelecionados.includes(servico.id))
            .map(servico => servico.nome)
            .join(', ')}` : 
            'Selecionar serviço'}
        </Text>
        </TouchableOpacity>

        {/* Modal para exibir a lista de serviços */}
        <Modal
          visible={mostrarListaServicos}
          transparent={true}
          animationType="slide"
          onRequestClose={() => setMostrarListaServicos(false)} // Fecha o modal ao apertar o botão de voltar
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <FlatList
                data={servicos}
                keyExtractor={(item) => item.id}
                renderItem={renderServico}
              />
              <TouchableOpacity
                style={styles.buttonFecharModal}
                onPress={() => setMostrarListaServicos(false)} // Fecha o modal ao clicar
              >
                <Text style={styles.textButtonFechar}>Fechar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        
        <Text style={styles.textSecundario}>Barbeiro</Text>
        <TouchableOpacity
          style={styles.buttonEscolher}
          onPress={() => setMostrarListaBarbeiros(true)} // Abre o modal de barbeiros
        >
          <Text style={styles.textButton}>
            {barbeiroSelecionado ? barbeiroSelecionado.nome : 'Selecionar barbeiro'}
          </Text>
        </TouchableOpacity>

        {/* Modal para exibir a lista de barbeiros */}
        <Modal
          visible={mostrarListaBarbeiros}
          transparent={true}
          animationType="slide"
          onRequestClose={() => setMostrarListaBarbeiros(false)} // Fecha o modal ao apertar o botão de voltar
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <FlatList
                data={barbeiros}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={styles.barbeiroItem}
                    onPress={() => escolherBarbeiro(item)}
                  >
                    <Text style={styles.textBarbeiro}>{item.nome}</Text>
                  </TouchableOpacity>
                )}
              />
              <TouchableOpacity
                style={styles.buttonFecharModal}
                onPress={() => setMostrarListaBarbeiros(false)} // Fecha o modal ao clicar
              >
                <Text style={styles.textButtonFechar}>Fechar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>



        
      </View>
      

      <TouchableOpacity 
      
      style={styles.button}

      onPress={() => 

        agendar(
          nomeCer,
          telefoneCer,
          barbeiroSelecionado,
          servicosSelecionados,
          selectedDate,
          selectedTime
        )

      }
      
      >
        <Text style={styles.textButtonConfirmar}>Confirmar Agendamento</Text>
      </TouchableOpacity>
    </View>
    
  );
  
}