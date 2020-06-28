import React from 'react'
import { Switch } from 'react-native'
import { connect } from 'react-redux'
import { ThemeProvider } from 'styled-components'

import {
  SafeAreaView,
  Text,
  View,
  ImageAbsolute,
  EmptySpace,
  ProfileImage,
  TransparentButton,
} from '../atoms'
import { firebaseService } from '../../services'
import { toggleTheme } from '../../state/theme/slice'
import { startAuthLoading } from '../../state/auth/slice'
import { LoadingOverlay } from '../molecules'

const SettingsListScreenComponent = ({
  navigation,
  theme,
  authState,
  userImages,
  toggleTheme,
}) => {
  console.log(userImages)

  const handleGoogleSignIn = async () => {
    try {
      startAuthLoading({
        loadingMessage: 'Logging In',
      })
      await firebaseService.googleLogin()
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView pd="0 0 8px 0">
        {authState.isLoading ? <LoadingOverlay /> : null}
        <View height="50%">
          <ImageAbsolute
            source={require('../../shared/images/backdrop-sample.png')}
          />
          {authState.isLoggedIn ? (
            <ProfileImage
              source={{
                uri: authState.user.photoURL,
              }}
            />
          ) : (
            <TransparentButton onPress={handleGoogleSignIn} width="auto">
              <Text fontSize="24px">G - SIGN IN</Text>
            </TransparentButton>
          )}
        </View>
        <EmptySpace />
        <View mg="4px 0">
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
        </View>
      </SafeAreaView>
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

export const SettingsListScreen = connect(mapStateToProps, {
  toggleTheme,
  startAuthLoading,
})(SettingsListScreenComponent)
