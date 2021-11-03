import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Lets's Share</Text>
      <StatusBar style="auto" />
      <Text>Список, описание, вещи</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#03a5fc',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  
});
