import React from 'react';
import { ScrollView, View, TouchableOpacity, Button } from 'react-native';
import SearchBar from '../components/SearchBar'
import { Header } from '../components/Header.js';

export default function MainScreen({navigation}) {
    // const loadScene = () => {
    //     navigation.navigate('ItemDetails', {text: 'Hello from MainScreen'});
    // }
    return (
        <View>
            <Header title='ShareIt!' />
            <ScrollView>
                <SearchBar action = {navigation}/>
            </ScrollView >
        </View>
    );
}
