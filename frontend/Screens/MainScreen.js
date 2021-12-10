import React from 'react';
import { ScrollView, View, TouchableOpacity, Button } from 'react-native';
import SearchBar from '../components/SearchBar'
import { Header } from '../components/Header.js';

export default function MainScreen({navigation}) {
    const loadScene = () => {
        navigation.navigate('ItemDetails');
    }
    return (
        <View>
            <Header title='ShareIt!' />
            <ScrollView>
                <SearchBar func = {loadScene}/>
            </ScrollView >
        </View>
    );
}
