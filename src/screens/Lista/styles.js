import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
    caixa: {
        height: Platform.OS === "web" ? "100vh" : "100%"
        //web 100vh
    },
    titulo:{
        color: "#000000",
        fontSize: 19,
        fontWeight: "bold"
    },
    fundo: {
        width: "100%",
        height: "100%",
        alignItems: 'center'
    },
    cardlist:{
        width: "80%",
        height: "100%",
        justifyContent:'center',
        alignItems: 'center',
      
    },
    lista:{
        color:"#1C1C1C",
        fontWeight: "bold",
        fontSize:16,
        width: "80%",
        textAlign: 'center',
        backgroundColor: '#D2B48C',
        borderWidth: 2,
        borderColor: "#FFE4C4",
        padding: 2,
        margin:2,
        borderRadius: 6
    }
})

export default styles;