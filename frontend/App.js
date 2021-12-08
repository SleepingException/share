import React from 'react';
import { ScrollView, View} from 'react-native';
import SearchBar from './components/SearchBar.js';
import {Header} from './components/Header.js';

export default function App() {
  return (
    <View>
      <Header title='ShareIt!' />
      <ScrollView>
          <SearchBar/>
      </ScrollView>
    </View>
  );
}
