import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import auth from '@react-native-firebase/auth'
import { ThemeProvider } from 'styled-components'

import { Text, View, Div, Button, ButtonText } from '../atoms'
import { authSlice } from '../../state/auth/slice'

function ProfileBannerComponent({ authState, theme, logout }) {
  const handleLogout = async () => {
    try {
      await auth().signOut()
      logout()
    } catch (err) {
      console.error(err)
    }
  }

  // pass in the points array when pressing the Meridian Point to enter the
  // Meridian Points List, instead of the normal meridian lists. JEez this naming convention is confusing my head
  return (
    <ThemeProvider theme={theme}>
      <Div>
        <Text>{JSON.stringify(authState)}</Text>
        <Button onPress={handleLogout}>
          <ButtonText>Sign Out</ButtonText>
        </Button>
      </Div>
    </ThemeProvider>
  )
}

ProfileBannerComponent.propTypes = {
  title: PropTypes.string,
}

const mapStateToProps = ({ theme, authState }) => {
  return {
    theme,
    authState,
  }
}

const mapDispatchToProps = {
  logout: authSlice.actions.logout,
}

export const ProfileBanner = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProfileBannerComponent)
