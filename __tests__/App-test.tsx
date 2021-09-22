import 'react-native'
import React from 'react'
import App from '../src/App'

import renderer from 'react-test-renderer'

describe('App component', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<App />)
    expect(tree).toMatchSnapshot()
  })
})
