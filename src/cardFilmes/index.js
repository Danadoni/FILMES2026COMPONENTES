import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import styles from './styles';
export default function CardFilmes({imagem,nome,nota}) {
  return (
         
         <TouchableOpacity style={styles.containerFilmes}>

          <Image style={styles.images} source={{ uri: imagem }} />
                  <Text style ={styles.titulo}>{nome} </Text> 
                  
                  <Text style ={styles.textNota}> {nota} </Text>

         </TouchableOpacity>



  );
}