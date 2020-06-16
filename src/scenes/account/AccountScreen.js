import React from 'react'
import { connect } from 'react-redux'
import {
  Button,
  ButtonText,
  Container,
  Title,
  Text,
  View,
  MatCommIcon,
} from '../../components/atoms'
import { ThemeProvider } from 'styled-components/native'
import auth from '@react-native-firebase/auth'

import { authSlice } from '../../state/auth/auth'

function AccountScreen({ navigation, theme, authState, logout }) {
  const toLogin = () => {
    navigation.navigate('Login')
  }

  const handleLogout = () => {
    auth().signOut()
    logout()
  }

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Container width={'80%'}>
          {authState ? (
            <View>
              <Title>Hello {authState.displayName}</Title>
              <Text>Thanks for signing in</Text>
              <Button onPress={handleLogout}>
                <ButtonText>LOGOUT</ButtonText>
              </Button>
            </View>
          ) : (
            <View>
              <Title>Need an account?</Title>
              <Button onPress={toLogin}>
                <MatCommIcon name="google" size={25} />
                <ButtonText>LOGIN</ButtonText>
              </Button>
            </View>
          )}
        </Container>
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

const mapDispatchToProps = {
  logout: authSlice.actions.logout,
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountScreen)
