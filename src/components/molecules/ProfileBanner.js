import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import auth from '@react-native-firebase/auth'
import { ThemeProvider } from 'styled-components'

import { Text, Row, Button, ButtonText, ProfileImage } from '../atoms'
import { authSlice } from '../../state/auth/slice'
import firebaseAPI from '../../services/firebase'

function ProfileBannerComponent({ authState, theme, logout }) {
  const capialize = (str, lower = false) =>
    (lower ? str.toLowerCase() : str).replace(/(?:^|\s|["'([{])+\S/g, (match) =>
      match.toUpperCase(),
    )

  const handleLogout = async () => {
    await firebaseAPI.logout()
    logout()
  }

  // pass in the points array when pressing the Meridian Point to enter the
  // Meridian Points List, instead of the normal meridian lists. JEez this naming convention is confusing my head
  return (
    <ThemeProvider theme={theme}>
      <Row>
        <ProfileImage source={{ uri: authState.photoURL }} mg="0 6px" />
        <Text>{capialize(authState.displayName)}</Text>
        {/* <Button onPress={handleLogout}>
            <ButtonText>Sign Out</ButtonText>
          </Button> */}
      </Row>
      <Button onPress={handleLogout} width="50%">
        <ButtonText>Sign Out</ButtonText>
      </Button>
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
