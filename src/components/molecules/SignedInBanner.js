import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import PropTypes from 'prop-types'

import {
  Text,
  ItalicizedText,
  ProfileImage,
  TransparentButton,
  MatCommIcon,
  SettingsRow,
  Button,
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

  const convertJoinedDate = (date) => {
    const dateObj = new Date(date)
    const month = dateObj.toLocaleString('default').split(' ')
    month.splice(3, 1) && month.splice(0, 1) // i didnt know this works
    return month.join(' ')
  }

  return (
    <ThemeProvider theme={theme}>
      <SettingsRow pd="4px">
        <ProfileImage
          source={{
            uri: authState.user.photoURL,
          }}
          mg="0 16px 0 0"
        />
        <Text fontSize="26px">{capitalize(authState.user.displayName)}</Text>
      </SettingsRow>
      <SettingsRow>
        <MatCommIcon name="image-outline" size={28} />
        <Text fontSize="24px"> - {userStats.photosCount} photos</Text>
      </SettingsRow>
      <SettingsRow>
        <MatCommIcon name="notebook-outline" size={28} />
        <Text fontSize="24px"> - {userStats.notesCount} notes</Text>
      </SettingsRow>
      <SettingsRow>
        <ItalicizedText>
          Joined: {convertJoinedDate(authState.user.signUpDate)}
        </ItalicizedText>
      </SettingsRow>
      <SettingsRow>
        <Button
          elevation={2}
          onPress={handleLogout}
          width="25%"
          pd="10px 6px"
          mg="0">
          <Text>Sign Out</Text>
        </Button>
      </SettingsRow>
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
