jest.useFakeTimers()

import React from 'react'
import 'react-native'
import { Provider } from 'react-redux'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import renderer from 'react-test-renderer'

import { SettingsHomeScreen } from '../../src/components/screens'
import { defaultLoggedOutState } from '../../__mocks__/mockInitialState'

// Note: test renderer must be required after react-native.

it('Memory Home Screen with list renders correctly', () => {
  const middlewares = [thunk]
  const mockStore = configureMockStore(middlewares)
  let store
  let component
  beforeEach(() => {
    store = mockStore(defaultLoggedOutState)
    // what? why do i have to render it here in order to mock the store correctly
    component = renderer.create(
      <Provider store={store}>
        <SettingsHomeScreen />
      </Provider>,
    )
  })
})
