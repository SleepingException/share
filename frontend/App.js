import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity  } from 'react-native';
import SearchBar from './components/SearchBar.js';

export default function App() {
  return (
      <View  style={styles.container}>
        <SearchBar/>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
  },
});
