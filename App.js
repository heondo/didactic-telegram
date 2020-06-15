/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler'
import React from 'react'
import { Provider } from 'react-redux'
import { lightTheme } from './src/shared/theme'
import store from './src/state/store'
import { ThemeProvider } from 'styled-components/native'
import StackNavigator from './src/scenes/stack/root'

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={lightTheme}>
        <StackNavigator />
      </ThemeProvider>
    </Provider>
  )
}

export default App
