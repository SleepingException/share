import React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';
import {ImageBigCard} from '../components/ImageBigCard';

function ItemDetails({ route }) {
  let data = route.params.data;
  let name = data.name[0].toUpperCase() + data.name.slice(1);
  return (
    <View style={styles.container}>
      <ImageBigCard source={{ uri: data.image }}/>
      <Text style={styles.h1}>{name}</Text>
      <Text style={styles.cost}>{data.cost} руб.</Text>
      <Text style={styles.description}>{data.description}</Text>
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
  cost:{
    fontSize: 30,
    fontWeight: "700",
    padding: 5,
    textAlign: 'left'
  }, 
  description:{
    fontSize: 20,
    padding: 10,
    textAlign: 'left'
  }
});
export default ItemDetails;