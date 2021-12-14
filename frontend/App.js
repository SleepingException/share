import React from 'react';
import NavigationBar from './tabsNavigator'
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      <NavigationBar />
    </NavigationContainer>
  );
}