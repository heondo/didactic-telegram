import React from 'react'
import { ButtonText, Button, PaddedView, Div, Text } from '../atoms'
import { selectImage } from '../../services'
import styled from 'styled-components/native'
import PropTypes from 'prop-types'
import selectImageService from '../../services/selectImage'

export function SelectImageButton({ selectImage, setSelectedImage }) {
  // pass in the points array when pressing the Meridian Point to enter the
  // Meridian Points List, instead of the normal meridian lists. JEez this naming convention is confusing my head

  // const select

  const handlePress = () => {
    selectImageService.handleSelectImage(setSelectedImage)
    // console.log(imageData)
  }

  return (
    <Div pd="6px">
      <Button onPress={handlePress}>
        <ButtonText>Select an image</ButtonText>
      </Button>
    </Div>
  )
}

SelectImageButton.propTypes = {
  selectImage: PropTypes.string,
  setSelectedImage: PropTypes.func,
}
