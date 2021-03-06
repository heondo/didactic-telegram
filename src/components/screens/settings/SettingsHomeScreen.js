import React, { useState } from 'react'
import { Switch } from 'react-native'
import { connect, useDispatch } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import AsyncStorage from '@react-native-community/async-storage'

import {
  SafeAreaView,
  Text,
  View,
  EmptySpace,
  Row,
  TransparentButton,
  AbsoluteView,
  MatCommIcon,
  HeaderText,
  Button,
} from '../../atoms'
import { firebaseService } from '../../../services'
import { toggleTheme } from '../../../state/theme/slice'
import {
  startAuthLoading,
  endAuthLoading,
  thunkLogout,
} from '../../../state/auth/slice'
import { LoadingOverlay, SignedInBanner } from '../../molecules'
import { IntroSwiperScreen } from '../intro-screen'

const SettingsHomeScreenComponent = ({
  navigation,
  theme,
  authState,
  toggleTheme,
  startAuthLoading,
  endAuthLoading,
}) => {
  const dispatch = useDispatch()
  const [showTutorial, setShowTutorial] = useState(false)

  const handleGoogleSignIn = async () => {
    try {
      startAuthLoading({
        loadingMessage: 'Logging In',
      })
      await firebaseService.googleLogin()
    } catch (err) {
      endAuthLoading({
        loadingMessage: 'Logging In',
      })
      console.error(err)
    }
  }

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

  const openTutorial = () => {
    setShowTutorial(true)
  }

  const closeTutorial = () => {
    setShowTutorial(false)
  }

  if (showTutorial) {
    return <IntroSwiperScreen handleCloseTutorial={closeTutorial} />
  }

  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView pd="12px">
        {/* Loading overlay if loading */}
        {authState.isLoading ? (
          <LoadingOverlay loadingMessage={authState.loadingMessage} />
        ) : null}
        {authState.isLoggedIn ? (
          <SignedInBanner handleLogout={handleLogout} />
        ) : (
          <AbsoluteView>
            <TransparentButton onPress={handleGoogleSignIn}>
              <Row>
                <MatCommIcon name="google" size={32} mg="0 8px" />
                <HeaderText fontSize="32px">- SIGN IN</HeaderText>
              </Row>
            </TransparentButton>
          </AbsoluteView>
        )}
        {/* Image and sign in/out button container */}
        <EmptySpace />
        {/* <TransparentButton onPress={rewatchTutorial}>
          <Text>Review Tutorial</Text>
        </TransparentButton> */}
        {/* Theme toggler */}
        <View>
          <Button elevation={2} onPress={openTutorial}>
            <Text>Review Tutorial</Text>
          </Button>
        </View>
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

export const SettingsHomeScreen = connect(mapStateToProps, {
  toggleTheme,
  startAuthLoading,
  endAuthLoading,
})(SettingsHomeScreenComponent)
