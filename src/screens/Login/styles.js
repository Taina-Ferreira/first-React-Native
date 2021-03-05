import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#D8BFD8'
    },
    form:{
      width: "100%"
    },
    PaddingContainer: {
        padding: 10,
        color:"#1C1C1C",
        fontWeight: "bold",
        fontSize:16,
        width: "100%",
        textAlign: 'center',
        borderWidth: 2,
        borderColor: "#FFE4C4",
        padding: 2,
        margin:2,
        borderRadius: 6,
    },
    textStyle: {
      textAlign: 'center',
      marginBottom: 8
    },
    Button:{
      padding: 12,
      backgroundColor: "#FFF0F5",
      alignSelf:"center",
      borderRadius:5
  }
});

export default styles;