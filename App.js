import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, FlatList } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import Banner from './src/banner';
import Header from './src/header';
import Search from './src/search';
import CardFilmes from './src/cardFilmes';
import Filmes from './data/filmes'
export default function App() {
  return (
    <View style={styles.container}>

     <Header></Header>
     <Search></Search>
     <Banner></Banner>

    <View style = {{width:'90%'}}>
    <FlatList
    showsVerticalScrollIndicator= {false}
    horizontal = {true}
    data={Filmes}
    keyExtractor={(item)=> item.id}
    renderItem={({item})=> (

      <CardFilmes nome ={item.nome} image={item.imagem} nota = {item.nota}/>

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
    alignItems: "center",
  },

  containerFilmes:{
        paddingTop:20,
        paddingBottom:16,
        paddingRight:16,
        width:140,
        heigh:28
    },

    titulo:{
        color: '#fff',
        fontSize:12,
        paddingTop:8  
    },

    textNota:{
        fontSize:10,
        color:'#fff',
        paddingLeft:4
    },

    images:{
        width:'100%',
        height:170,
        borderRadius: 8,    
       
    }


});