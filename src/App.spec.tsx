import React from 'react'
import { render } from '@testing-library/react'
import App from 'App'

it('Will render App without crashing', () => {
  const tree = render(<App />)
  expect(tree.asFragment()).toMatchSnapshot()
})
