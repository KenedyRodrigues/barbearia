import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
viewImagem: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center', 
    },

image: {
    width: 250, 
    height: 250,
    },

roundImage: {
    borderRadius: 250, 
    },

textTitle:{
    padding: 50,
    alignItems:"center",
    justifyContent:"center",
    color:"#FFFFFF",
    fontSize:40,
    fontWeight:"bold",
},

buttonCadastrar:{
    borderRadius:50,
    alignItems:"center",
    justifyContent:"center",
    width:"55%",
    backgroundColor:"#1C1C1C",
    paddingTop:14,
    paddingBottom:14,
    margin:30
},

textButtonCadastrar:{
    fontSize: 20,
    color: "#FFFAF0",
},

buttonEntrar:{
    borderRadius:50,
    alignItems:"center",
    justifyContent:"center",
    width:"55%",
    backgroundColor:"#363636",
    paddingTop:14,
    paddingBottom:14,
    margin:30
},

textButtonEntrar:{
    fontSize: 20,
    color: "#FFFAF0",
},
});

export default styles