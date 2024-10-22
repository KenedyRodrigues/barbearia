import React , {useState} from "react"
import {View, Text, TouchableOpacity, TextInput, Alert, Vibration, Pressable, Keyboard, ImageBackground} from "react-native"
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import styles from "./style";


export default function Login(){

const [telefone, setTelefone] = useState(null)
const [senha, setSenha] = useState(null);

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

            <TouchableOpacity
            style={styles.button}
            onPress={()=>{
                
            }}

            ><Text style={styles.textButton}>Entrar</Text></TouchableOpacity>

            <TouchableOpacity
            style={styles.button2}
            onPress={()=>{
                
            }}

            ><Text style={styles.textButton}>Cancelar</Text></TouchableOpacity>
            
        
        </Pressable>
    </KeyboardAwareScrollView> 
    );
}