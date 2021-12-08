import React, { useEffect, useState } from 'react';
import { ImageCard } from './ImageCard.js';
import { Layout } from './Layout.js';
import axios from 'axios';

import {
    SafeAreaView,
    View,
    StyleSheet,
    TextInput,
} from 'react-native';

const path = 'http://localhost:8080/';

const SearchBar = () => {
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

    // const ItemView = ({ item }) => {
    //     return (
    //         <Text style={styles.itemStyle} onPress={() => getItem(item)}>
    //             {item.id}
    //             {'.'}
    //             {item.name.toUpperCase()}
    //         </Text>
    //     )
    // }

    // const ItemSeparatorView = () => {
    //     return (
    //         <View
    //             style={{
    //                 height: 0.5,
    //                 width: '100%',
    //                 backgroundColor: '#C8C8C8',
    //             }}
    //         />
    //     );
    // };

    // const getItem = (item) => {
    //     alert('Id: ' + item.id + ' Title :' + item.name + ' Coast: ' + item.cost);
    // }

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
                {filterDataSource.map(item =>{
                        return(
                            <ImageCard data={item} key={item.id}/>
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