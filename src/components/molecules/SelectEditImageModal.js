import React from 'react'
import { connect } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import PropTypes from 'prop-types'
import Modal from 'react-native-modal'
import { RNPhotoEditor } from 'react-native-photo-editor'

import {
  DarkHeaderText,
  ModalButtonText,
  ModalView,
  ModalButton,
  EmptySpace,
  Row,
} from '../atoms'

const SelectEditImageModalComponent = ({
  theme,
  isModalVisible,
  setIsModalVisible,
  handleAddImagePress,
  selectedImage,
  setSelectedImage,
}) => {
  const handleCancelPress = () => {
    setIsModalVisible(false)
  }

  const handleEditImage = () => {
    RNPhotoEditor.Edit({
      path: selectedImage.path,
      onDone: (imagePath) => {
        const editedImage = {
          uri: `file://${imagePath}`,
          path: imagePath,
          fileType: imagePath.split('.')[imagePath.split('.').length - 1],
        }
        setSelectedImage(editedImage)
      },
    })
    setIsModalVisible(false)
  }

  return (
    <ThemeProvider theme={theme}>
      <Modal
        animationType="fade"
        backdropOpacity={0.8}
        transparent={true}
        isVisible={isModalVisible}
        onBackdropPress={handleCancelPress}
        coverScreen={false}
        style={{ alignItems: 'center' }}>
        <ModalView>
          <DarkHeaderText fontSize="18px">Edit Selection</DarkHeaderText>
          <ModalButton onPress={handleEditImage}>
            <ModalButtonText>Edit Image...</ModalButtonText>
          </ModalButton>
          <ModalButton onPress={handleAddImagePress}>
            <ModalButtonText>Change Image...</ModalButtonText>
          </ModalButton>
          <Row>
            <EmptySpace />
            <ModalButton pd="0" onPress={handleCancelPress}>
              <ModalButtonText fontSize="16px">CANCEL</ModalButtonText>
            </ModalButton>
          </Row>
        </ModalView>
      </Modal>
    </ThemeProvider>
  )
}

const mapStateToProps = ({ theme }) => {
  return {
    theme,
  }
}

SelectEditImageModalComponent.propTypes = {
  isModalVisible: PropTypes.bool,
  setIsModalVisible: PropTypes.func,
  handleAddImagePress: PropTypes.func,
  selectedImage: PropTypes.func,
  setSelectedImage: PropTypes.func,
}

export const SelectEditImageModal = connect(mapStateToProps)(
  SelectEditImageModalComponent,
)
