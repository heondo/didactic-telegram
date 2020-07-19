import React from 'react'
import { Switch } from 'react-native'
import { connect, useDispatch } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import AsyncStorage from '@react-native-community/async-storage'

import {
  SafeAreaView,
  Text,
  View,
  ImageAbsolute,
  EmptySpace,
  ProfileImage,
  TransparentButton,
} from '../../atoms'
import { firebaseService } from '../../../services'
import { toggleTheme } from '../../../state/theme/slice'
import { startAuthLoading, thunkLogout } from '../../../state/auth/slice'
import { LoadingOverlay } from '../../molecules'

const SettingsListScreenComponent = ({
  navigation,
  theme,
  authState,
  toggleTheme,
  startAuthLoading,
}) => {
  const dispatch = useDispatch()

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

  const capitalize = (str, lower = false) =>
    (lower ? str.toLowerCase() : str).replace(/(?:^|\s|["'([{])+\S/g, (match) =>
      match.toUpperCase(),
    )

  const handleLogout = () => {
    dispatch(thunkLogout())
  }

  const handleThemechange = async () => {
    try {
      //
      await AsyncStorage.setItem(
        'themeMode',
        theme.mode === 'light' ? 'dark' : 'light',
      )
      toggleTheme()
    } catch (err) {
      console.error('error')
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView pd="0 0 8px 0">
        {authState.isLoading ? (
          <LoadingOverlay loadingMessage={authState.loadingMessage} />
        ) : null}
        <View height="50%" width="100%">
          <ImageAbsolute
            source={require('../../../shared/images/backdrop-sample.png')}
          />
          {authState.isLoggedIn ? (
            <>
              <ProfileImage
                source={{
                  uri: authState.user.photoURL,
                }}
              />
              <Text fontSize="22px">
                {capitalize(authState.user.displayName)}
              </Text>
              <TransparentButton onPress={handleLogout} width="30%">
                <Text>Sign Out</Text>
              </TransparentButton>
            </>
          ) : (
            <TransparentButton onPress={handleGoogleSignIn}>
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
            onValueChange={handleThemechange}
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
