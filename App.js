/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react'
import { Provider } from 'react-redux'
import { darkTheme } from './src/shared/theme'
import store from './src/state/store'
import { ThemeProvider } from 'styled-components/native'
import RootStackNavigator from './src/components/RootStackNavigator'

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={darkTheme}>
        <RootStackNavigator />
      </ThemeProvider>
    </Provider>
  )
}

export default App
