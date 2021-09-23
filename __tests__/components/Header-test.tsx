import 'react-native'
import React from 'react'
import { Header } from '../../src/components'

import { render } from '@testing-library/react-native'


describe('Header component', () => {

  it('should render title correctly', () => {
    const { getByText } = render(
      <Header />
    )
    const headerTitle = getByText('Mobile Pokedex')

    expect(headerTitle).toBeDefined()
  })
})
