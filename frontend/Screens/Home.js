import React from 'react';
import { ScrollView, View, Button } from 'react-native';
import SearchBar from '../components/SearchBar'
import { Header } from '../components/Header.js';

export default function Home(props) {
    return (
        <ScrollView>
            <View>
                <SearchBar action={props.navigation} data={props.route.params} />
            </View>
        </ScrollView>
    );
}
