import React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'
import { PokemonInitialData } from 'types'
import { parseAssetUrl } from 'utils'

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#CCCC',
    height: 150,
    width: 170,
    padding: 20,
    marginVertical: 15,
    marginHorizontal: 12,
    borderRadius: 10,
  },
  title: {
    fontSize: 22,
    color: '#FFF',
    fontWeight: 'bold',
    zIndex: 1
  },
  pokemonImage: {
    width: 130,
    height: 130,
  },
  pokemonImageWrapper: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 100,
    borderBottomLeftRadius: 100,
    borderTopRightRadius: 100,
    width: 110,
    height: 110,
    position: 'absolute',
    top: 50,
    left: 70,
    zIndex: -1,
    alignItems: 'center',
  }
})

export const PokemonCard: React.FC<PokemonInitialData> = ({ name, url, }) => {

  /* TODO: Write link parser here */

  return (
    <TouchableOpacity>
      <View style={styles.card}>
        <Text style={styles.title}>{name}</Text>
        <View style={styles.pokemonImageWrapper}>
          <Image style={styles.pokemonImage} source={{ uri: parseAssetUrl(url) }} />
        </View>
      </View>
    </TouchableOpacity>
  )
}
