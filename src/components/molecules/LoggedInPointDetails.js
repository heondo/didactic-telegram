import React, { useState } from 'react'
import { connect } from 'react-redux'
import { ThemeProvider } from '@react-navigation/native'

import { Image, Text, AddImageButton, MatIcon } from '../atoms'
import PropTypes from 'prop-types'

function LoggedInPointDetailsComponent({
  theme,
  authState,
  userImages,
  pointID,
}) {
  const imageURL = userImages.images[pointID]
  const [selectedImage, setSelectedImage] = useState(null)

  return (
    <ThemeProvider theme={theme}>
      {userImages.images[pointID] ? (
        <Image source={{ uri: userImages.images[pointID] }} />
      ) : (
        <Image source={{ uri: 'https://www.tibs.org.tw/images/default.jpg' }} />
      )}
      <AddImageButton>
        <MatIcon name="add-a-photo" size={18} />
      </AddImageButton>
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

export const LoggedInPointDetails = connect(mapStateToProps)(
  LoggedInPointDetailsComponent,
)

LoggedInPointDetails.propTypes = {
  pointID: PropTypes.string,
}
