import React, { useEffect, useState } from 'react';
import { ImageCard } from './ImageCard.js';
import { Layout } from './Layout.js';
import axios from 'axios';

import {
    SafeAreaView,
    View,
    StyleSheet,
    TextInput,
    TouchableOpacity
} from 'react-native';

const path = 'http://localhost:8080/';

const SearchBar = (props) => {
    const [search, setSearch] = useState('');
    const [filterDataSource, setFilterDataSource] = useState([]);
    const [masterDataSource, setMasterDataSource] = useState([]);

    useEffect(() => {
        axios.get(path + 'items/get/all')
            .then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response;
                } else {
                    let error = new Error(response.statusText);
                    error.response = response;
                    throw error
                }
            }).then((response) => {
                if (response.headers['content-type'] !== 'application/json') {
                    let error = new Error('Некорректный ответ от сервера');
                    error.response = response;
                    throw error
                }
                return response.data;
            }).then((json) => {
                setFilterDataSource(json);
                setMasterDataSource(json);
            })
    }, []);

    const searchFilterFunction = (text) => {
        if (text) {
            const newData = masterDataSource.filter(function (item) {
                const itemData = item.name
                    ? item.name.toUpperCase()
                    : ''.toUpperCase();
                const textData = text.toUpperCase();
                return itemData.indexOf(textData) > -1
            });
            setFilterDataSource(newData);
            setSearch(text);
            console.log(newData);
        } else {
            setFilterDataSource(masterDataSource);
            setSearch(text);
        }
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <TextInput
                    style={styles.textInput}
                    searchIcon={{ size: 24 }}
                    onChangeText={(text) => searchFilterFunction(text)}
                    value={search}
                    placeholder="Type Here..."
                    value={search}
                />
                <Layout>
                    {filterDataSource.map(item => {
                        return (
                            <TouchableOpacity key={item.id} onPress={() => {
                                props.action.navigate('ItemDetails', {data: item});
                            }}>
                                <ImageCard data={item} key={item.id} />
                            </TouchableOpacity>
                        )
                    })}
                </Layout>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
    },
    itemStyle: {
        padding: 10,
    },
    textInput: {
        height: 40,
        borderWidth: 1,
        padding: 10,
        paddingLeft: 20,
        margin: 5,
        borderColor: 'pink',
        backgroundColor: '#fff',
        borderRadius: 20,
    }
});

export default SearchBar;