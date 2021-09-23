import {Container, Header} from './components';
import React from 'react';
import {ErrorBoundary, PokemonList} from './views';

const App = () => {
  return (
    <ErrorBoundary>
      <Container>
        <Header />
        <PokemonList />
      </Container>
    </ErrorBoundary>
  );
};

export default App;
