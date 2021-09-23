import { Header } from './components'
import React from 'react'
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native'
import { PokemonList } from './views'


const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <PokemonList />
    </SafeAreaView>
  )
}


export default App
