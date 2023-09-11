import { Button, SafeAreaView, TextInput, View } from "react-native";
import { StyleSheet } from 'react-native';

export default function AlterarSenha({navigation}){
    return (
        <SafeAreaView style={styles.container}>
            <TextInput style={styles.input}
            placeholder="Nome"/>
            <TextInput style={styles.input}
            placeholder="Nova senha"/>
            <TextInput style={styles.input}
            placeholder="Confirmar senha"/>
            <View style={styles.btnDefault}>
                <Button
                title="Alterar"
                onPress={() => navigation.navigate("Login")}/>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
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
    btnDefault: {
        width: 250,
        marginTop: 40,
        borderWidth: 2,
    }

  });