import React from 'react';
import { ScrollView, View } from 'react-native';
import SearchBar from '../components/SearchBar'
import { Header } from '../components/Header.js';

export default function Home({ navigation }) {
    return (
        <ScrollView>
            <View>
                <Header title="Share!" />
                <SearchBar action={navigation}/>
            </View>
        </ScrollView>
    );
}
