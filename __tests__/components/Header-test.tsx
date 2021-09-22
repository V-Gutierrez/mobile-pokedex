import 'react-native'
import React from 'react'
import { Header } from '../../src/components'

import { render, fireEvent } from '@testing-library/react-native'
import renderer from 'react-test-renderer'


describe('Header component', () => {

  it('renders correctly', () => {
    const tree = renderer.create(<Header />)
    expect(tree).toMatchSnapshot()
  })

  it('should render title correctly', () => {
    const { getByText } = render(
      <Header />
    )
    const headerTitle = getByText('Mobile Pokedex')

    expect(headerTitle).toBeDefined()
  })
})
