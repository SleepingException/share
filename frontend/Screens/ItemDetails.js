import React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';
import {ImageBigCard} from '../components/ImageBigCard';

function ItemDetails({ route }) {
  let data = route.params.data;
  return (
    <View style={styles.container}>
      <ImageBigCard source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Weschch_1-2.jpg/1200px-Weschch_1-2.jpg' }}/>
      <Text style={styles.h1}>{data.name}</Text>
      <Text style={styles.h1}>{data.cost} $</Text>
    </View>
  );

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  h1: {
    fontFamily: 'AvenirNext-DemiBold',
    fontSize: 30,
    padding: 5,
    textAlign: 'left'
  },
});
export default ItemDetails;