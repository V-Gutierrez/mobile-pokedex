import { Header } from './components'
import React from 'react'
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native'


const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
    </SafeAreaView>
  )
}


export default App
