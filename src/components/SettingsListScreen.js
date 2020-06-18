import React from 'react'
import { Switch } from 'react-native'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { View, PaddedView, Text, Row, EmptySpace } from './atoms'
import { themeSlice } from '../state/theme/slice'
import { ThemeProvider } from 'styled-components'

// no need for fancy settings pages just yet. Just a simple dark theme, sign in and sign out feature.

const SettingsListScreen = ({ theme, authState, navigation, toggleTheme }) => {
  return (
    <ThemeProvider theme={theme}>
      <PaddedView>
        <Text>
          {authState.loggedIn ? (
            'true'
          ) : (
            <Text>
              You are not logged in, sign in to save your images across devices
            </Text>
          )}
        </Text>
        <EmptySpace />
        <Row mg="4px 0">
          <Text>Enable Dark Theme</Text>
          <Switch onValueChange={toggleTheme} value={theme.mode !== 'light'} />
        </Row>
      </PaddedView>
    </ThemeProvider>
  )
}
const mapStateToProps = ({ theme, authState }) => {
  return {
    theme,
    authState,
  }
}

export default connect(mapStateToProps, {
  toggleTheme: themeSlice.actions.toggleTheme,
})(SettingsListScreen)

SettingsListScreen.propTypes = {
  theme: PropTypes.object,
  navigation: PropTypes.object,
}
