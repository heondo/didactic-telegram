import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import PropTypes from 'prop-types'

import {
  SafeAreaView,
  Text,
  View,
  ImageAbsolute,
  EmptySpace,
  ProfileImage,
  TransparentButton,
  MatCommIcon,
  SettingsRow,
} from '../atoms'

function SignedInBannerComponent({
  theme,
  authState,
  userImages,
  handleLogout,
}) {
  const capitalize = (str, lower = false) =>
    (lower ? str.toLowerCase() : str).replace(/(?:^|\s|["'([{])+\S/g, (match) =>
      match.toUpperCase(),
    )

  const [userStats, setUserStats] = useState({})

  useEffect(() => {
    if (userImages.images) {
      const stats = generateStats(userImages.images)
      setUserStats(stats)
    }
  }, [userImages.images])

  const generateStats = (imagesObj) => {
    const stats = {
      photosCount: 0,
      notesCount: 0,
    }
    if (!Object.keys(imagesObj).length) {
      return stats
    }
    for (let pointID in imagesObj) {
      if (imagesObj[pointID].imageURL) {
        stats.photosCount += 1
      }
      if (imagesObj[pointID].note) {
        stats.notesCount += 1
      }
    }
    return stats
  }
  // const numPhotos

  return (
    <ThemeProvider theme={theme}>
      <SettingsRow width="100%" justifyContent="flex-start" pd="4px">
        <ProfileImage
          source={{
            uri: authState.user.photoURL,
          }}
          mg="0 8px"
        />
        <Text fontSize="26px">
          Hello, {capitalize(authState.user.displayName)}
        </Text>
      </SettingsRow>
      <SettingsRow width="100%" justifyContent="flex-start">
        <MatCommIcon name="image-outline" size={28} />
        <Text fontSize="24px"> - {userStats.photosCount} photos</Text>
      </SettingsRow>
      <SettingsRow width="100%" justifyContent="flex-start">
        <MatCommIcon name="notebook-outline" size={28} />
        <Text fontSize="24px"> - {userStats.notesCount} notes</Text>
      </SettingsRow>
      <TransparentButton onPress={handleLogout} width="30%">
        <Text>Sign Out</Text>
      </TransparentButton>
    </ThemeProvider>
  )
}

const mapStateToProps = ({ theme, userImages, authState }) => {
  return {
    theme,
    userImages,
    authState,
  }
}

SignedInBannerComponent.propTypes = {
  handleLogout: PropTypes.func,
}

export const SignedInBanner = connect(mapStateToProps)(SignedInBannerComponent)
