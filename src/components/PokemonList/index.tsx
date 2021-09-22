import useAxios from 'axios-hooks'
import { PokemonCard } from '../../components'
import React from 'react'
import { ActivityIndicator, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { setApi } from '../../services'
import { PokeAPIResponse, PokemonInitialData } from 'types'

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  listContainer: {
    marginVertical: 10,
    flex: 1
  },
  boundaryContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  tryAgainButton: {
    padding: 15,
    marginVertical: 15,
    backgroundColor: '#ccc',
    borderRadius: 5
  },
  errorText: {
    fontWeight: 'bold',
    fontSize: 15,
  }
})

setApi()

export const PokemonList: React.FC = () => {
  const [{ data, loading, error }, refetch] = useAxios<PokeAPIResponse>(
    '/pokemon'
  )

  if (loading) {
    return (
      <View style={styles.boundaryContainer}>
        <ActivityIndicator size="large" color="#ccc" />
      </View >
    )
  }

  if (error) {
    return (
      <View style={styles.boundaryContainer}>
        <Text style={styles.errorText}>Houve um erro ao capturar os pokemóns!</Text>
        <TouchableOpacity style={styles.tryAgainButton} onPress={() => refetch()}>
          <Text>Tentar novamente</Text>
        </TouchableOpacity>
      </View >
    )
  }

  return (
    <FlatList
      testID='pokemon-list'
      contentContainerStyle={styles.container}
      data={data?.results}
      numColumns={2}
      renderItem={({ item, index, separators }: { item: PokemonInitialData, index: number, separators: any }) => <PokemonCard name={item.name} url={item.url} />}
      keyExtractor={item => item.name}
    />
  )
}
