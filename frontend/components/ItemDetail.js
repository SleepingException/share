import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

function ItemDetail()  {
    return (
      <View style={styles.container}>
        <Text>Jopa</Text>
        <Button
          title="Back to home"
          onPress={() =>
            this.props.navigation.navigate('SearchBar')
          }
        />
      </View>
    );

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
  },
});
export default ItemDetail;