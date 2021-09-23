import 'react-native'
import React from 'react'
import { PokemonCard } from '../../src/components'

import { render } from '@testing-library/react-native'


describe('PokeCard component', () => {

  it('should render correctly based on props', () => {
    const componentProps = {
      name: 'Pikachu', url: 'https://pokeapi.co/api/v2/pokemon/6/'
    }

    const { getByText } = render(
      <PokemonCard {...componentProps} />
    )
    const pokemonName = getByText(componentProps.name)

    expect(pokemonName).toBeDefined()
  })
})
