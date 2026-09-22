import { 
  StyleSheet, 
  Text, 
  View, 
  TouchableOpacity, 
  TextInput, 
  Image, 
  FlatList,
  ScrollView
} from 'react-native';

import Feather from '@expo/vector-icons/Feather';
import Banner from '../banner';
import Header from '../header';
import Search from '../search';
import CardFilmes from '../cardFilmes';
import Filmes from '../../data/filmes'

export default function Home() {
  return (
    <View style={styles.container}>


        <Header />
        <Search />
        <Banner />

     
        <View style={{ width: '90%' }}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={Filmes}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <CardFilmes
                imagem={item.imagem}
                nome={item.nome}
                nota={item.nota}
              />
            )}
          />
        </View>

      

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141a29',
    alignItems: 'center',
  },

  containerFilmes: {
    paddingTop: 20,
    paddingBottom: 16,
    paddingRight: 16,
    width: 140,
    heigh: 28
  },

  titulo: {
    color: '#fff',
    fontSize: 12,
    paddingTop: 8
  },

  textNota: {
    fontSize: 10,
    color: '#fff',
    paddingLeft: 4
  },

  images: {
    width: '100%',
    height: 170,
    borderRadius: 8,
  }
});