import {Header} from './components';
import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {PokemonList} from './views';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3D7DCA',
  },
});

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#003A70" />
      <Header />
      <PokemonList />
    </SafeAreaView>
  );
};

export default App;
