import React from 'react'
import { Image, View, Text, StyleSheet } from 'react-native'
import { w } from '../constants'

const styles = StyleSheet.create({
  container: {
    width: w / 2.4,
    paddingVertical: 10
  },
  sub: {
    shadowColor: '#000',
    borderRadius: 10,
    backgroundColor: 'white',
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.4
  },
  h1: {
    paddingTop: 10,
    fontFamily: 'AvenirNext-DemiBold',
    fontSize: 18,
    alignSelf: 'center',
    textAlign: 'center'
  },
  cover: {
    width: w / 2.4,
    height: w * 0.63,
    borderRadius: 10
  }
})

const ImageCard = ({ data }) => {
  const { container, sub, h1, cover } = styles
  const { name, id } = data
  return (
    <View style={container}>
      <View style={sub}>
        <Image style={cover} source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Weschch_1-2.jpg/1200px-Weschch_1-2.jpg' }} />
      </View>
      <Text style={h1}>{id + '.' + name.toUpperCase()}</Text>
    </View>
  )
}

export { ImageCard }