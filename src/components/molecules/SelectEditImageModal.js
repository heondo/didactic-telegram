import React, { useState, createRef } from 'react'
import { connect, useDispatch } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import PropTypes from 'prop-types'
import Modal from 'react-native-modal'

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
}) => {
  const handleCancelPress = () => {
    setIsModalVisible(false)
  }

  return (
    <ThemeProvider theme={theme}>
      <Modal
        animationType="slide"
        backdropColor="black"
        backdropOpacity={0.8}
        transparent={true}
        isVisible={isModalVisible}
        coverScreen={false}
        style={{ alignItems: 'center' }}>
        <ModalView>
          <DarkHeaderText fontSize="18px">Edit Selection</DarkHeaderText>
          <ModalButton>
            <ModalButtonText>Edit Image...</ModalButtonText>
          </ModalButton>
          <ModalButton onPress={handleAddImagePress}>
            <ModalButtonText>Change Image...</ModalButtonText>
          </ModalButton>
          <Row>
            <EmptySpace />
            <ModalButton width="auto" pd="0" onPress={handleCancelPress}>
              <DarkHeaderText fontSize="14px">CANCEL</DarkHeaderText>
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
}

export const SelectEditImageModal = connect(mapStateToProps)(
  SelectEditImageModalComponent,
)
