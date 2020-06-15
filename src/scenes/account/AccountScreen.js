import React from 'react'
import { connect } from 'react-redux'
import { Button, ButtonText, Container, Title } from '../../components/atoms'
import { ThemeProvider } from 'styled-components/native'

function AccountScreen({ navigation, theme }) {
  const toLogin = () => {
    navigation.navigate('Login')
  }

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Container width={'80%'}>
          <Title>Need an account?</Title>
          <Button onPress={toLogin}>
            <ButtonText>LOGIN</ButtonText>
          </Button>
        </Container>
      </Container>
    </ThemeProvider>
  )
}

const mapStateToProps = ({ theme }) => {
  return {
    theme,
  }
}

export default connect(mapStateToProps)(AccountScreen)
