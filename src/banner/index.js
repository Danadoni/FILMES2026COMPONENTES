import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import styles from './styles';
export default function Banner() {
  return (
      
    <>
      <Text style = {styles.textBanner}> Em cartaz </Text>
         
      <Image
      source={require("../../assets/gato.jpeg")}
      style ={styles.imageBanner}
      />
    </>
  );
}