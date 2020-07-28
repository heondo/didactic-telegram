jest.useFakeTimers()

import React from 'react'
import 'react-native'
import { Provider } from 'react-redux'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import renderer from 'react-test-renderer'
import { ThemeProvider } from 'styled-components'

import { lightTheme, darkTheme } from '../src/shared/theme'
import { MemoryHomeScreen } from '../src/components/screens/memory'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

// Note: test renderer must be required after react-native.

it('Memory Home Screen with list renders correctly', () => {
  let store
  beforeEach(() => {
    store = mockStore({
      theme: darkTheme,
      authState: {
        isLoading: false,
        loadingMessage: '',
        error: null,
        loggedIn: false,
        user: null,
      },
      userImages: {
        isLoading: false,
        loadingMessage: '',
        error: null,
        images: null,
      },
    })
  })
  renderer.create(
    <Provider store={store}>
      <MemoryHomeScreen />
    </Provider>,
  )
})
