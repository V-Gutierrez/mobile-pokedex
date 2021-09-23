import { useModal } from '../../hooks'
import React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'
import { PokemonInitialData } from '../../types'
import { capitalizeStringFirstIndex, parseAssetUrl } from '../../utils'
import { PokemonModal } from '../../views'

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#003A70',
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
    borderBottomRightRadius: 80,
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
  const { isShowing, toggle } = useModal()

  return (
    <>
      <TouchableOpacity onPress={toggle}>
        <View style={styles.card}>
          <Text style={styles.title}>{capitalizeStringFirstIndex(name)}</Text>
          <View style={styles.pokemonImageWrapper}>
            <Image style={styles.pokemonImage} source={{ uri: parseAssetUrl(url) }} />
          </View>
        </View>
      </TouchableOpacity>
      <PokemonModal pokemonUrl={url} visible={isShowing} onRequestClose={toggle} />
    </>
  )
}
