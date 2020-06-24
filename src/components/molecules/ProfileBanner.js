import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
// import auth from '@react-native-firebase/auth'
import { ThemeProvider } from 'styled-components'
import {
  Text,
  Div,
  ProfileImage,
  ProfileBannerContainer,
  TransparentButton,
  Image,
} from '../atoms'
import { thunkLogout } from '../../state/auth/slice'
import firebaseService from '../../services/firebase'

function ProfileBannerComponent({ authState, theme, thunkLogout }) {
  const capitalize = (str, lower = false) =>
    (lower ? str.toLowerCase() : str).replace(/(?:^|\s|["'([{])+\S/g, (match) =>
      match.toUpperCase(),
    )

  const handleLogout = async () => {
    try {
      await firebaseService.logout()
      await thunkLogout()
    } catch (err) {
      console.error(err)
    }
  }

  // pass in the points array when pressing the Meridian Point to enter the
  // Meridian Points List, instead of the normal meridian lists. JEez this naming convention is confusing my head
  return (
    <ThemeProvider theme={theme}>
      <Div>
        <Image
          source={require('../../../public/images/backdrop-sample.png')}
          resizeMode="cover"
        />
        <ProfileBannerContainer>
          <ProfileImage source={{ uri: authState.photoURL }} mg="0 12px" />
          <Text fontSize="22px">{capitalize(authState.displayName)}</Text>
          <TransparentButton onPress={handleLogout}>
            <Text>Sign Out</Text>
          </TransparentButton>
        </ProfileBannerContainer>
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
  thunkLogout,
}

export const ProfileBanner = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProfileBannerComponent)
