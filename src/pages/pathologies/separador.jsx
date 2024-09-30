import React from 'react';
import { View, StyleSheet } from 'react-native';

const Separator = () => {
  return <View style={styles.separator} />;
};

const styles = StyleSheet.create({
  separator: {
    height: 1, // Define a espessura da linha
    width: '90%', // Faz a linha ocupar toda a largura disponível
    backgroundColor: '#ccc', // Cor da linha
    marginVertical: 1,
    marginStart:'5%' // Margem entre os elementos
  },
});

export default Separator;
