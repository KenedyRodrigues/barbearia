import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: '#2D2D2D'
    },
    iconeView: {
        padding: 70,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    textoPerfil: {
        color: "#fff",
        marginLeft: 5,
        fontSize: 18,
        fontWeight: '600',
        textAlign: 'left',
        paddingRight: 170
    },
    textView: {
        width: '80%',
        alignSelf: 'center',
        marginTop: -20
    },
    textPrincipal: {
        color: 'white',
        fontFamily: 'Roboto',
        fontSize: 16,
        fontWeight: '600',
        marginTop: 0,
        textAlign: 'center',
    },
    textServico: {
        color: 'white',
        fontFamily: 'Playfair Display',
        fontSize: 19,
        fontWeight: '600',
        textAlign: 'left',
        paddingLeft: 50,
        paddingTop: 30
    },
    viewServico: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        margin: 10
    },
    viewIcones: {
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 10,
    },
    containerTextServico: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        margin: 10
    },
    servicoText: {
        color: '#A9A9A9',
        fontFamily: 'Roboto',
        fontSize: 12,
        fontWeight: 'normal',
    },
    galeria: {
        color: 'white',
        fontFamily: 'Playfair Display',
        fontSize: 19,
        fontWeight: '600',
        textAlign: 'left',
        paddingLeft: 50,
        paddingTop: 30
    },
    image: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
    },
    containerCarrossel: {
        width: '100%',
        height: 'auto',
        padding: 20,
    
    },
    botaoReservar: {
        borderRadius: 50,
        alignSelf: 'center',
        backgroundColor: "#1C1C1C",
        width: 300,
        height: 50,
        justifyContent: 'center',
        marginBottom:30
    },
    buttonText: {
        color: '#fff',
        fontSize: 20,
        textAlign: 'center',
    },
    modalContainer: {
        flex: 1,
        paddingTop:30,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    modalContent: {
        width: '80%',
        padding: 20,
        backgroundColor: '#333',
        borderRadius: 10,
    },
    closeButton: {
        color: '#fff',
        fontSize: 18,
        marginBottom: 10,
        textAlign: 'right',
    },
    menuItem: {
        color: '#fff',
        fontSize: 16,
        marginVertical: 5,
    },
    menuItemText:{
        color:'#fff',
        fontSize: 16
    }
});

export default styles;