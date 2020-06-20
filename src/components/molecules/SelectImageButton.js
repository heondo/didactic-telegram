import React from 'react'
import { connect } from 'react-redux'
import { ThemeProvider } from '@react-navigation/native'
import PropTypes from 'prop-types'

import selectImageService from '../../services/selectImage'
import firebaseService from '../../services/firebase'
import { thunkAddImage } from '../../state/userImages/slice'
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
  thunkAddImage,
  // addImageToState,
}) {
  // pass in the points array when pressing the Meridian Point to enter the
  // Meridian Points List, instead of the normal meridian lists. JEez this naming convention is confusing my head

  // const select

  const handleSelectImage = () => {
    selectImageService.handleSelectImage(setSelectedImage)
  }

  const handleSubmitImage = async () => {
    try {
      await thunkAddImage(
        authState.uid,
        pointID,
        selectedImage.path,
        selectedImage.fileType,
      )
      // const downloadURL = await firebaseService.putFile(
      //   authState.uid,
      //   pointID,
      //   selectedImage.path,
      //   selectedImage.fileType,
      // )
      // console.log(downloadURL)
      // addImageToState({
      //   pointID,
      //   downloadURL,
      // })
      // add the image to the user slice
    } catch (err) {
      console.error(err)
    }
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

const mapDispatchToProps = {
  // addImageToState,
  thunkAddImage,
}

export const SelectImageButton = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SelectImageButtonComponent)

SelectImageButtonComponent.propTypes = {
  selectImage: PropTypes.string,
  setSelectedImage: PropTypes.func,
  theme: PropTypes.object,
  authState: PropTypes.object,
  pointID: PropTypes.string,
}
