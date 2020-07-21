/**
 * @format
 */

// import 'react-native'
// import React from 'react'
// import App from '../App'

// // Note: test renderer must be required after react-native.
// import renderer from 'react-test-renderer'

// it('renders correctly', () => {
//   renderer.create(<App />)
// })
import 'react-native'
import React from 'react'
import App from '../App'

import renderer from 'react-test-renderer'

test('renders correctly', () => {
  const tree = renderer.create(<App />).toJSON()
  expect(tree).toMatchSnapshot()
})
