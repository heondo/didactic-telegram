jest.useFakeTimers()

import React from 'react'
import 'react-native'
import { MemoryHomeScreen } from '../src/components/screens/memory'

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer'

it('Memory Home Screen with list renders correctly', () => {
  renderer.create(<MemoryHomeScreen />)
})
