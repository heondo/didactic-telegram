import React from 'react'
import { Switch } from 'react-native'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { View, PaddedView, Text, Row } from './atoms'
import { themeSlice } from '../state/theme/slice'
import { ThemeProvider } from 'styled-components'

const SettingsListScreen = ({ theme, navigation, toggleTheme }) => {
  return (
    <ThemeProvider theme={theme}>
      <PaddedView>
        <Text>Settings</Text>
        <Row>
          <Text>Enable Dark Theme</Text>
          <Switch onValueChange={toggleTheme} value={theme.mode !== 'light'} />
        </Row>
      </PaddedView>
    </ThemeProvider>
  )
}
const mapStateToProps = ({ theme }) => {
  return {
    theme,
  }
}

export default connect(mapStateToProps, {
  toggleTheme: themeSlice.actions.toggleTheme,
})(SettingsListScreen)

SettingsListScreen.propTypes = {
  theme: PropTypes.object,
  navigation: PropTypes.object,
}
