import useAxios from 'axios-hooks'
import { AnimatedActivity, PokemonCard } from '../../components'
import React, { useEffect, useState } from 'react'
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
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
  },
  listFooterComponent: {
    height: 60,
    marginTop: 25,
  }
})

setApi()

export const PokemonList: React.FC = () => {
  const [pageParams, setPageParams] = useState({ limit: 6, initial: true })
  const [firstLoading, setFirstLoading] = useState(true)

  const [{ data, loading, error }, refetch] = useAxios<PokeAPIResponse>(
    `/pokemon?limit=${pageParams.limit}`
  )

  useEffect(() => {
    setFirstLoading(false)
    refetch()
  }, [pageParams])

  const handleEndReached = () => {
    const step = 6
    setPageParams(prev => ({ limit: prev.limit + step, initial: false }))
  }

  if (loading && firstLoading)
    return (
      <View style={styles.boundaryContainer}>
        <AnimatedActivity />
      </View >
    )

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
      onEndReached={handleEndReached}
      onEndReachedThreshold={0.001}
      initialScrollIndex={pageParams.initial ? 0 : pageParams.limit / 2 - 3}
      ListFooterComponent={
        <View style={styles.boundaryContainer}>
          <AnimatedActivity />
        </View >
      }
      ListFooterComponentStyle={styles.listFooterComponent}
    />
  )
}
