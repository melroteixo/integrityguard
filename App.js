import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';

import CadastrarUsuario from './src/pages/cadastro/cadastrarUsuario';
import Catalogo from './src/pages/catalogo/catalogoDosItens';
import Login from './src/pages/login/paginaDeLogin';
import AlterarSenha from './src/pages/recuperarSenha/alterarSenha';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer style={styles.fundo}>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
        <Stack.Screen name="MudarSenha" component={AlterarSenha}/>
        <Stack.Screen name="Registro" component={CadastrarUsuario}/>
        <Stack.Screen name="Catalogo" component={Catalogo}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  fundo: {
    backgroundColor: '#fff',
  },
});