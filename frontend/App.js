import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity  } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Let`s Share!</Text>
      <StatusBar style="auto" />
      <Text>Список, описание, вещи</Text>
      <TouchableOpacity
        onPress={() => alert('Hello World!')}
        style={{ backgroundColor: '#fff', borderRadius: 70, padding: 10 }}>
        <Text style={{ fontSize: 20, color: '#000' }}>Touch me!</Text>
      </TouchableOpacity>
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
