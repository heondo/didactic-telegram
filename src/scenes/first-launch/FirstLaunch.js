import React, { useState } from 'react'
import { connect } from 'react-redux'
import { ThemeProvider } from 'styled-components/native'
import {
  Container,
  Text,
  Title,
  Button,
  ButtonText,
  View,
  MatCommIcon,
} from '../../components/atoms'
import auth from '@react-native-firebase/auth'
import { GoogleSignin } from '@react-native-community/google-signin'
import AsyncStorage from '@react-native-community/async-storage'

function FirstLaunch({ navigation, theme, authState, setHasBeenLaunched }) {
  const onGoogleButtonPress = async () => {
    await AsyncStorage.setItem('wasLaunched', 'true')
    const { idToken } = await GoogleSignin.signIn()
    const googleCredential = auth.GoogleAuthProvider.credential(idToken)
    return auth().signInWithCredential(googleCredential)
  }

  const handleContinue = async () => {
    try {
      await AsyncStorage.setItem('wasLaunched', 'true')
      setHasBeenLaunched(true)
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Title>Welcome to Accupuncturist</Title>
        <Text>Login in to sync your memories between devices</Text>
        <View>
          <Button width={'35%'}>
            <ButtonText onPress={handleContinue}>Continue Offline</ButtonText>
          </Button>
          <Button width={'35%'}>
            <MatCommIcon name="google" size={25} />
            <ButtonText onPress={onGoogleButtonPress}>Google</ButtonText>
          </Button>
        </View>
      </Container>
    </ThemeProvider>
  )
}

const mapStateToProps = ({ theme, auth: authState }) => {
  return {
    theme,
    authState,
  }
}

export default connect(mapStateToProps)(FirstLaunch)
