import React from 'react'
import { connect } from 'react-redux'
import { ThemeProvider } from '@react-navigation/native'
import PropTypes from 'prop-types'
import { RNPhotoEditor } from 'react-native-photo-editor'

import selectImageService from '../../services/selectImage'
import { thunkAddImage } from '../../state/userImages/slice'
import {
  ButtonText,
  Button,
  View,
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
  note,
  thunkAddImage,
  setLoadingState,
  existingImageURL,
  // addImageToState,
}) {
  // pass in the points array when pressing the Meridian Point to enter the
  // Meridian Points List, instead of the normal meridian lists. JEez this naming convention is confusing my head

  // const select

  const handleSelectImage = () => {
    selectImageService.handleSelectImage(setSelectedImage)
  }
  //
  const handleEditImage = (photoToEditPath) => {
    RNPhotoEditor.Edit({
      path: photoToEditPath,
      onDone: (imagePath) => {
        const editedImage = {
          uri: `file://${imagePath}`,
          path: imagePath,
          fileType: imagePath.split('.')[imagePath.split('.').length - 1],
        }
        setSelectedImage(editedImage)
      },
    })
  }

  const handleSubmitImage = async () => {
    try {
      setLoadingState(true)
      await thunkAddImage(
        authState.uid,
        pointID,
        selectedImage.path,
        selectedImage.fileType,
        note,
      )
      setLoadingState(false)
      setSelectedImage(null)
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <View pd="6px">
        {selectedImage ? (
          <Row>
            <Button onPress={handleSubmitImage} width="30%">
              <ButtonText>Submit</ButtonText>
            </Button>
            <EmptySpace />
            <SecondaryButton onPress={handleSelectImage} width="30%">
              <ButtonText>Swap Image</ButtonText>
            </SecondaryButton>
            <EmptySpace />
            <SecondaryButton
              onPress={() => handleEditImage(selectedImage.path)}
              width="30%">
              <ButtonText>Edit Image</ButtonText>
            </SecondaryButton>
          </Row>
        ) : (
          <Button onPress={handleSelectImage} width="40%">
            <ButtonText>Change Image</ButtonText>
          </Button>
        )}
      </View>
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
