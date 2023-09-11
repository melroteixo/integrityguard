import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    parentContainer: {

    },
    container: {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: 400,
      width: `30%`,
      padding: 10,
      margin: 10,
      backgroundColor: '#FAF9F6',
    },
    btnDefault: {
      width: '90%',
      marginBottom: 10,
      borderWidth: 2,
      borderColor: 'black',
      backgroundColor:`blue`
    },
    campoImagem: {
      flex: 1,
      width: '30%',
      height:100,
      justifyContent: 'center',
      alignItems: 'center',
    },
    imagem: {
      width: '100%',
      height: '100%',
      resizeMode: 'contain',
    },
    infoItem: {
      flex: 1,
      width: '70%',
      padding: 10,
      borderRadius: 10,
      justifyContent: "space-between",
    },
    nomeItem: {
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 20,
    },
    descItem: {
      textAlign: 'center',
      marginBottom: 5,
    },
    input: {
        width: 250,
        marginTop: 40,
        padding: 10,
        fontSize: 18,
        color: 'black',
        backgroundColor: 'white',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'black'
    },
  });

export default styles;
