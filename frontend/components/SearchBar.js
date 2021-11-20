import React, {useEffect, useState} from 'react';

import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  TextInput,
  FlatList,
} from 'react-native';

const SearchBar = () =>{
    const [search, setSearch] = useState('');
    const [filterDataSource, setFilterDataSource] = useState([]);
    const [masterDataSource, setMasterDataSource] = useState([]);

const obj =[
    {
        'userId': 1,
        'id': 1,
        'title': "Jopa",
        'body': "Opisanie jopy"
    },
]

    // useEffect(() => {
    //     fetch(`https://jsonplaceholder.typicode.com/posts`, {
    //     method: "GET",
    //     headers: {
    //         Accept: 'application/json',
    //     },   
    //    // body: $('body')

    //     })
    //     //fetch('https://jsonplaceholder.typicode.com/posts',{ method: 'GET'})
    //     .then((response) => response.json())
    //     .then((responseJson) =>{
    //         setFilterDataSource(responseJson);
    //         setMasterDataSource(responseJson);
    //     })
    //     .catch((error) =>{
    //         console.error(error);
    //     })
    // });

    const searchFilterFunction = (text) => {
        if(text){
            const newData = masterDataSource.filter(function(item){
                const textData = text.toUpperCase();
            })
            setFilterDataSource(newData);
            setSearch(text);
        }else{
            setFilterDataSource(masterDataSource);
            setSearch(text);
        }
    }

    const ItemView = ({item}) =>{
        return(
            <Text style={styles.itemStyle} onPress={() => getItem(item)}>
                {item.id}
                {'.'}
                {item.title.toUpperCase()}
            </Text>
        )
    }

    return(
        <SafeAreaView style = {{flex: 1}}>
            <View style = {styles.container}>
                <SearchBar
                      searchIcon={{ size: 24 }}
                      onChangeText={(text) => searchFilterFunction(text)}
                      onClear={(text) => searchFilterFunction('')}
                      placeholder="Type Here..."
                      value={search}
                />
                <FlatList
                    data={filterDataSource}
                    keyExtractor={(item, index) => index.toString()}
                    //ItemSeparatorComponent={ItemSeparatorView}
                    renderItem={ItemView}
                />
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
});

export default SearchBar;