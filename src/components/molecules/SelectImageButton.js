import React from 'react'
import { connect } from 'react-redux'
import { ThemeProvider } from '@react-navigation/native'
import PropTypes from 'prop-types'

import selectImageService from '../../services/selectImage'
import firebaseService from '../../services/firebase'
import {
  ButtonText,
  Button,
  Div,
  Row,
  EmptySpace,
  SecondaryButton,
} from '../atoms'

function SelectImageButtonComponent({
  authState,
  selectedImage,
  setSelectedImage,
  theme,
  pointID,
}) {
  // pass in the points array when pressing the Meridian Point to enter the
  // Meridian Points List, instead of the normal meridian lists. JEez this naming convention is confusing my head

  // const select

  const handleSelectImage = () => {
    selectImageService.handleSelectImage(setSelectedImage)
  }

  const handleSubmitImage = () => {
    firebaseService.putFile(
      authState.uid,
      pointID,
      selectedImage.path,
      selectedImage.fileType,
    )
  }

  return (
    <ThemeProvider theme={theme}>
      <Div pd="6px">
        {selectedImage ? (
          <Row>
            <Button onPress={handleSubmitImage} width="45%">
              <ButtonText>Submit</ButtonText>
            </Button>
            <EmptySpace />
            <SecondaryButton onPress={handleSelectImage} width="45%">
              <ButtonText>Change Image</ButtonText>
            </SecondaryButton>
          </Row>
        ) : (
          <Button onPress={handleSelectImage}>
            <ButtonText>Select an image</ButtonText>
          </Button>
        )}
      </Div>
    </ThemeProvider>
  )
}

const mapStateToProps = ({ theme, authState }) => {
  return {
    theme,
    authState,
  }
}

export const SelectImageButton = connect(mapStateToProps)(
  SelectImageButtonComponent,
)

SelectImageButtonComponent.propTypes = {
  selectImage: PropTypes.string,
  setSelectedImage: PropTypes.func,
  theme: PropTypes.object,
  authState: PropTypes.object,
  pointID: PropTypes.string,
}
