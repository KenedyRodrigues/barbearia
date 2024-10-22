import React , {useState} from "react"
import {View, Text, TouchableOpacity, TextInput, Alert, Vibration, Pressable, Keyboard, ImageBackground} from "react-native"
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import styles from "./style";
// npm install --save react-native-keyboard-aware-scroll-view
export default function Register(){

const [name, setName] = useState(null)
const [telefone, setTelefone] = useState(null)
const [senha, setSenha] = useState(null);
const [confirmarSenha, setConfirmarSenha] = useState(null);


const formatPhoneNumber = (value) => {

    

    const cleaned = value.replace(/\D/g, '');

    const match = cleaned.match(/^(\d{2})(\d{1})(\d{4})(\d{4})$/);

    if (match) {
      return `(${match[1]}) ${match[2]} ${match[3]}-${match[4]}`;
    }

    return value;
  
};

const handlePhoneChange = (text) => {
  
    const formattedPhone = formatPhoneNumber(text);
    setTelefone(formattedPhone);
    
    
  };

function verificar(){

    if(telefone.length < 16){
      
      Alert.alert('Telefone incorreto!')
      Vibration.vibrate();
    }else {
    if(!name || !telefone || !senha || !confirmarSenha){
        
        Alert.alert('Preencha todos os campos')
        Vibration.vibrate();
        
    } else{
        if(senha.length < 8 || confirmarSenha.length < 8){
            Alert.alert('A senha deve conter no mínimo 8 caracteres!')
            Vibration.vibrate();
        }else{
            if(senha == confirmarSenha){
                Alert.alert('Usuário registrado!')
                Vibration.vibrate();
            } else{
                Alert.alert('As senhas não coincidem')
                Vibration.vibrate();
            }
        }
      }
    }
    
}

  

    return(
      <KeyboardAwareScrollView
      style={styles.container}
      resetScrollToCoords={{ x: 0, y: 0 }}
      scrollEnabled={true}
      >
      <Pressable onPress={Keyboard.dismiss}>
            <View style={styles.viewImagem}>
            <ImageBackground
              source={require('./imagens/barbearia.png')}
              style={styles.image}
              imageStyle={styles.roundImage}
            ></ImageBackground>
            </View>

            
            <Text style={styles.text}>Nome *</Text>
            <TextInput style={styles.input}
                onChangeText={setName}
                value={name}
                placeholder="Ex: João Silva"
                keyboardType="default"
            ></TextInput>

            <Text style={styles.text}>Telefone *</Text>
            <TextInput style={styles.input}
                value={telefone}
                onChangeText={handlePhoneChange}
                placeholder="(DD) 0 0000-0000"
                keyboardType="numeric"
                maxLength={16}
            ></TextInput>

            <Text style={styles.text}>Senha *</Text>
            <TextInput style={styles.input}
                onChangeText={setSenha}
                value={senha}
                placeholder="Senha"
                secureTextEntry={true}
                keyboardType="default"
            ></TextInput>

            <Text style={styles.text}>Confirmar Senha *</Text>
            <TextInput style={styles.input}
                onChangeText={setConfirmarSenha}
                value={confirmarSenha}
                placeholder="Confirmar Senha"
                secureTextEntry={true}
                keyboardType="default"
            ></TextInput>

            <TouchableOpacity
            style={styles.button}
            onPress={()=>{
                verificar()
            }}

            ><Text style={styles.textButton}>Registrar</Text></TouchableOpacity>

            <TouchableOpacity
            style={styles.button2}
            onPress={()=>{
                
            }}

            ><Text style={styles.textButton}>Cancelar</Text></TouchableOpacity>
            </Pressable>

</KeyboardAwareScrollView>   

    );
}
