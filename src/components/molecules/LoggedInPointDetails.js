import React, { useState } from 'react'
import { connect } from 'react-redux'
import { ThemeProvider } from '@react-navigation/native'
import PropTypes from 'prop-types'

import { Image, Text, AddImageButton, MatIcon, Div } from '../atoms'
import MeridianPointsData from '../../shared/data/meridian-points-data'
import { SelectImageButton } from './SelectImageButton'
function LoggedInPointDetailsComponent({
  theme,
  authState,
  userImages,
  pointID,
}) {
  const imageURL =
    userImages.images && userImages.images[pointID]
      ? userImages.images[pointID].imageURL
      : null
  const {
    name,
    transliteration,
    english,
    pinyin,
    korean,
    romaji,
    vietnamese,
    alternative,
  } = MeridianPointsData[pointID] || null
  const [selectedImage, setSelectedImage] = useState(null)

  return (
    <ThemeProvider theme={theme}>
      {/* If a user has uploaded an image display their image or a default image */}
      {imageURL ? (
        <Image source={{ uri: imageURL }} />
      ) : (
        <Image source={{ uri: 'https://www.tibs.org.tw/images/default.jpg' }} />
      )}
      <Div>
        <Text>{name}</Text>
        <Text>{transliteration}</Text>
        <Text>{english}</Text>
        <Text>{pinyin}</Text>
        <Text>{korean}</Text>
        <Text>{romaji}</Text>
        <Text>{vietnamese}</Text>
        <Text>{alternative}</Text>
      </Div>
      <SelectImageButton
        pointID={pointID}
        selectedImage={selectedImage}
        setSelectedImage={setSelectedImage}
      />
      <AddImageButton>
        {/* If a user has selected an image to upload or has an uploaded image show an edit button */}
        {selectedImage || imageURL ? (
          <MatIcon name="edit" size={18} />
        ) : (
          <MatIcon name="add-a-photo" size={18} />
        )}
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
