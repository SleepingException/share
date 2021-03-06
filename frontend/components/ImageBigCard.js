import React from 'react'
import { Image, View, StyleSheet } from 'react-native'
import { w } from '../constants'

const styles = StyleSheet.create({
    container: {
        paddingVertical: 20
    },
    sub: {
        shadowColor: '#000',
        borderRadius: 10,
        backgroundColor: 'white',
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.4
    },
    cover: {
        borderRadius: 10,
        width: w, //1.67
        height: w * 0.9
    }
})

const ImageBigCard = (props) => {
    console.log(props.source);
    const { container, sub, cover } = styles;
    return (
        <View style={container}>
            <View style={sub}>
                <Image style={cover} source={props.source} />
            </View>
        </View>
    )
}

export { ImageBigCard }