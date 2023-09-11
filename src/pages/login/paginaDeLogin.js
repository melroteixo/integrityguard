import React from 'react';
import { image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function AlterarSenha({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Integrity Guard - Alterar Senha</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.leftPanel}>
          {/* Conteúdo do lado esquerdo (35%) */}
          {/* Você pode adicionar elementos aqui, se necessário */}
          <Text style={styles.leftPanelPanelText}>
             Texto aqui titulo. nao sei oque escrever:
            </Text>
            <View style={styles.leftPanelPanelList}>
            <Text>Item 1</Text>
            <Text>Item 2</Text>
            <Text>Item 3</Text>
    {/* Adicione mais itens de lista conforme necessário */}
  </View>
        </View>
        <View style={styles.rightPanel}>
          {/* Conteúdo do lado direito (65%) */}
          <TextInput
            style={styles.input}
            placeholder="Nova Senha"
          />
          <TextInput
            style={styles.input}
            placeholder="Confirme a Nova Senha"
          />
          <View style={styles.buttonContainer}>
            <Text
              style={styles.link}
              onPress={() => navigation.navigate('Login')}>
              Voltar ao Login
            </Text>
            <Text
              style={styles.link}
              onPress={() => navigation.navigate('Registro')}>
              Criar Conta
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.menu}>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate('Pagina1')}>
          <Text style={styles.menuText}>Página 1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate('Pagina2')}>
          <Text style={styles.menuText}>Página 2</Text>
        </TouchableOpacity>
        {/* Adicione mais itens de menu conforme necessário */}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAF9F6',
  },
  header: {
    height: '10%',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerImage: {
    width: 30, // Defina a largura desejada para a imagem
    height: 30, // Defina a altura desejada para a imagem
    marginRight: 10, // Ajuste o espaçamento à direita da imagem conforme necessário
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    flexDirection: 'row',
  },
  leftPanel: {
    flex: 0.35,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightPanel: {
    flex: 0.65,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  input: {
    width: '100%',
    marginTop: 10,
    padding: 10,
    fontSize: 18,
    color: 'black',
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'black',
  },
  link: {
    color: 'blue',
    marginTop: 10,
  },
  buttonContainer: {
    marginTop: 20,
  },
  menu: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '8%',
    borderTopWidth: 1,
    borderTopColor: 'black',
    backgroundColor: 'white',
  },
  menuItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuText: {
    color: 'blue',
    fontSize: 16,
  },
});
