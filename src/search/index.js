import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import styles from './styles';
export default function Search() {
  return (

              <View style = {styles.containerSearch}>
                {/* INICIO DA BARRA DE PESQUISA npx expo install @expo/vector-icons */}
              <TextInput 
              placeholder='Digite o filme que deseja buscar'
              style = {styles.inputSearch}
              ></TextInput>
        
              <TouchableOpacity>
              <Feather name="search" size={24} color="black" />
              </TouchableOpacity>
              </View>
  );
}