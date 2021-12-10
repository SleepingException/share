import React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';

function ItemDetails({ props }) {
  console.log(props)
  return (
    <View style={styles.container}>
      <Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Weschch_1-2.jpg/1200px-Weschch_1-2.jpg' }}/>
      <Text style={styles.h1}></Text>
      {/* <Text style={h1}>{name.toUpperCase()}</Text>
      <Text style={h2}>{summary.replace(/<[^>]+>/g, '')}</Text> */}
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
    padding: 15,
    textAlign: 'center'
  },
});
export default ItemDetails;