import React from 'react'
import { Switch } from 'react-native'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { PaddedView, Text, Row, EmptySpace, Button, ButtonText } from './atoms'
import { toggleTheme } from '../state/theme/slice'
import { ThemeProvider } from 'styled-components'
import { ProfileBanner, LoadingOverlay } from './molecules'
import firebaseService from '../services/firebase'

// no need for fancy settings pages just yet. Just a simple dark theme, sign in and sign out feature.

const SettingsListScreen = ({ theme, authState, toggleTheme, userImages }) => {
  const onGoogleButtonPress = async () => {
    try {
      await firebaseService.login()
    } catch (err) {
      console.error(err)
    }
  }

  if (authState.isLoading) {
    return <LoadingOverlay />
  }

  return (
    <ThemeProvider theme={theme}>
      <PaddedView>
        {/* <Text>
          TODO: need to change this not logged in or out component into its own file
        */}
        {authState.loggedIn ? (
          <ProfileBanner />
        ) : (
          <>
            <Text>
              You are not logged in, sign in to save your images across devices
            </Text>
            <Button onPress={onGoogleButtonPress}>
              <Row>
                <ButtonText>Sign In</ButtonText>
              </Row>
            </Button>
          </>
        )}
        {/* </Text> */}
        <EmptySpace />
        <Row mg="4px 0">
          <Text>
            {theme.mode === 'light' ? 'Enable' : 'Disable'} Dark Theme
          </Text>
          <Switch
            trackColor={{ false: theme.aurora2, true: theme.aurora3 }}
            thumbColor={
              theme.mode === 'light' ? theme.frost3 : theme.snowStorm0
            }
            onValueChange={toggleTheme}
            value={theme.mode !== 'light'}
          />
        </Row>
      </PaddedView>
    </ThemeProvider>
  )
}
const mapStateToProps = ({ theme, authState, userImages }) => {
  return {
    theme,
    authState,
    userImages,
  }
}

export default connect(mapStateToProps, {
  toggleTheme,
})(SettingsListScreen)

SettingsListScreen.propTypes = {
  theme: PropTypes.object,
  navigation: PropTypes.object,
}
