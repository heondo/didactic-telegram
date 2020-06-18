import React from 'react'
import { Switch } from 'react-native'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import auth from '@react-native-firebase/auth'
import { GoogleSignin } from '@react-native-community/google-signin'

import {
  PaddedView,
  Text,
  Row,
  EmptySpace,
  Button,
  ButtonText,
  View,
} from './atoms'
import { themeSlice } from '../state/theme/slice'
import { ThemeProvider } from 'styled-components'
import { ProfileBanner } from './molecules'

// no need for fancy settings pages just yet. Just a simple dark theme, sign in and sign out feature.

const SettingsListScreen = ({ theme, authState, navigation, toggleTheme }) => {
  const onGoogleButtonPress = async () => {
    try {
      const { idToken } = await GoogleSignin.signIn()
      const googleCredential = auth.GoogleAuthProvider.credential(idToken)
      return auth().signInWithCredential(googleCredential)
    } catch (err) {
      console.error(err)
    }
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
            <Button mg="4px 0" onPress={onGoogleButtonPress}>
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
