import { ScrollView, StyleSheet, View } from 'react-native';
import { Image } from 'react-native';

import Card from "../../components/cardCompra";

export default function Catalogo(){
    const Itens = [
        {
            nome: 'Espada Élfica',
            desc: 'Uma espada forjada pelos elfos',
            uri: 'https://www.crosster.com.br/image/cache/catalog/UC3100%20(2)-1000x1000.jpg',
        },
        {
            nome: 'Varinha de Ouro',
            desc: 'Uma varinha poderosa',
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCCcTLTjdGfTUyvZS1eQLt_WRWEm-5V8bOJA&usqp=CAU',
        },
        {
            nome: 'Amuleto de Proteção',
            desc: 'Uma varinha poderosa',
            uri: 'https://wiki.rpg.net/images/f/fb/Amuleto_da_Prote%C3%A7%C3%A3o.png',
        },
      ];
    return(
        <ScrollView contentContainerStyle={styles.container} horizontal={true} >
            
                <Card item={Itens[0]}/>
                <Card item={Itens[1]}/>
                <Card item={Itens[2]}/>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'gray',
        alignItems: 'center', // Add this
        justifyContent: 'center', // Add this
    },
  });