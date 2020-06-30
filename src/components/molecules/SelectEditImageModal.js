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
} from '../atoms'

const SelectEditImageModalComponent = ({
  theme,
  isModalVisible,
  setIsModalVisible,
}) => {
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
          <ModalButton>
            <ModalButtonText>Change Image...</ModalButtonText>
          </ModalButton>
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
