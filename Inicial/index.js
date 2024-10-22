import React from "react"
import {View, Text, ImageBackground, TouchableOpacity} from "react-native"
import styles from "./style"

export default function Inicial(){
    return(
        
        <View style={styles.viewImagem}>

            <ImageBackground
            source={require('./imagens/barbearia.png')}
            style={styles.image}
            imageStyle={styles.roundImage}
            ></ImageBackground>

            <Text style={styles.textTitle}>Barber Shop</Text>

            <TouchableOpacity style={styles.buttonCadastrar}
                    onPress={()=>{
                        
                    }}
                    >
                    <Text style={styles.textButtonCadastrar}>Criar Conta</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonEntrar}
                    onPress={()=>{
                        
                    }}
                    >
                    <Text style={styles.textButtonEntrar}>Entrar</Text>
            </TouchableOpacity>

        </View>

        
    );
}