import React, { useState } from 'react'
import { connect } from 'react-redux'
import { ThemeProvider } from 'styled-components/native'
import {
  Container,
  Text,
  Title,
  Button,
  ButtonText,
} from '../../components/atoms'
import auth from '@react-native-firebase/auth'
import { GoogleSignin } from '@react-native-community/google-signin'

function HomeScreen({ navigation, theme, authState }) {
  //   const [user, setUser] = useState(null)
  async function onGoogleButtonPress() {
    // await AsyncStorage.setItem('wasLaunched', 'true')
    // Get the users ID token
    const { idToken } = await GoogleSignin.signIn()
    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken)
    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential)
  }
  // const [accountState, setAccountState] = useState<string | null>(null)
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Title>Welcome to Accupuncturist</Title>
        <Text>Login in to sync your memories between devices</Text>
        <Button width={'35%'}>
          <ButtonText onPress={onGoogleButtonPress}>Google</ButtonText>
        </Button>
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

export default connect(mapStateToProps)(HomeScreen)
