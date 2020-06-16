/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler'
import React, { useEffect } from 'react'
import { Provider } from 'react-redux'
import { darkTheme } from './src/shared/theme'
import store from './src/state/store'
import { ThemeProvider } from 'styled-components/native'
import StackNavigator from './src/scenes/stack/root'

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={darkTheme}>
        <StackNavigator />
      </ThemeProvider>
    </Provider>
  )
}

export default App
