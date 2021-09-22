import 'react-native'
import React from 'react'
import { PokemonCard } from '../../src/components'

import { render } from '@testing-library/react-native'
import renderer from 'react-test-renderer'


describe('PokeCard component', () => {

  it('renders correctly', () => {
    const tree = renderer.create(<PokemonCard name='Pikachu' url='https://pokeapi.co/api/v2/pokemon/6/' />)
    expect(tree).toMatchSnapshot()
  })

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
