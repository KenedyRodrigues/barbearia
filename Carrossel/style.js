import { StyleSheet, Dimensions } from "react-native";

const { width: viewportWidth } = Dimensions.get('window');

const styles = StyleSheet.create({
    
    container:{
        width: '100%'
    },
    iconeView:{
        padding: 70,
        flexDirection:'row',
        justifyContent: 'space-between'
    
    },
    
    textoPerfil:{
        color:"#fff",
        fontSize: 21,
        fontWeight: 'semibold',
        textAlign: 'left',
        paddingRight: 170
    },
    textView:{
        width: '80%',
        margin: 'auto',
        marginTop: -20
    },
    textPrincipal:{
        color: 'white',
        fontFamily:'Roboto' ,
        fontSize:19,
        fontWeight:'semibold',
        marginTop: 0,
        textAlign: 'center',
    },
    textServico:{
        
        color: 'white',
        fontFamily:'Playfair Display' ,
        fontSize:19,
        fontWeight:'semibold',
        marginTop: 0,
        textAlign: 'left',
        paddingLeft: 50,
        paddingTop: 30

    },
    viewServico:{
        width:'100%',
        flexDirection:'row',
        justifyContent: 'space-around',
        margin: 10
    },
    viewIcones:{
        backgroundColor: 'white',
        borderRadius: 20,
        padding:10,
        
    },
    containerTextServico:{
        
        width:'100%',
        flexDirection:'row',
        justifyContent: 'space-around',
        margin: 10
    },
    servicoText:{
        
        color: '#A9A9A9',
        fontFamily:'Roboto' ,
        fontSize:14,
        fontWeight:'normal',
    },


    galeria:{
        color: 'white',
        fontFamily:'Playfair Display' ,
        fontSize:19,
        fontWeight:'semibold',
        marginTop: 0,
        textAlign: 'left',
        paddingLeft: 50,
        paddingTop: 30
    },
    image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    },

    wrapper: {
      marginTop: 23,
      height: 250, // Ajuste a altura do carrossel conforme necessário
    },
    slide: {
      width: viewportWidth, // Usa a largura da tela
      justifyContent: 'center',
      alignItems: 'center',
    },
    image1: {
      width: 150, // Defina a largura desejada
      height: 150, // Defina a altura desejada
      borderRadius: 75, // Torna a imagem redonda
      resizeMode: 'cover',
    },
    
    

})

export default styles;
