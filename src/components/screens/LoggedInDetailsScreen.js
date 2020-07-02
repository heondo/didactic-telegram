import React, { useState, createRef } from 'react'
import { connect, useDispatch } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import PropTypes from 'prop-types'
import BottomSheet from 'reanimated-bottom-sheet'

import {
  SafeAreaView,
  HeaderText,
  EmptySpace,
  Header,
  Row,
  CircleIconButton,
  ButtonText,
  ImageAbsolute,
  TextInput,
  View,
  TransparentButton,
  SubmitNoteContainer,
  MatCommIcon,
  LoadingCircle,
  MatIcon,
} from '../atoms'
import {
  BottomSheetHeader,
  BottomSheetContent,
  LoadingOverlay,
  SelectEditImageModal,
} from '../molecules'
import MERIDIAN_POINTS_DATA from '../../shared/data/meridianPointsData'
import { thunkAddNote, thunkAddImage } from '../../state/userImages/slice'
import { selectImageService } from '../../services'

const LoggedInDetailsScreenComponent = ({
  theme,
  authState,
  userImages,
  pointID,
}) => {
  const dispatch = useDispatch()
  const pointData = MERIDIAN_POINTS_DATA[pointID]
  let bottomSheetRef = createRef()

  const userImageURL =
    userImages.images && userImages.images[pointID]
      ? userImages.images[pointID].imageURL
      : null

  const userNote =
    userImages.images && userImages.images[pointID]
      ? userImages.images[pointID].note
      : ''

  const [noteInput, setNoteInput] = useState(userNote)
  const [isNoteLoading, setNoteLoading] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)
  const [imageUploading, setImageUploading] = useState(false)
  const [isModalVisible, setIsModalVisible] = useState(false)

  const handleSubmitNote = () => {
    dispatch(
      thunkAddNote(authState.user.uid, pointID, noteInput, setNoteLoading),
    )
  }

  const onHeaderPress = () => {
    bottomSheetRef.current.snapTo(0)
  }

  const handleAddImagePress = () => {
    setIsModalVisible(false)
    selectImageService.handleSelectImage(setSelectedImage)
  }

  const handleOpenModal = () => {
    setIsModalVisible(true)
  }

  const handleSubmitImage = () => {
    dispatch(
      thunkAddImage(
        authState.user.uid,
        pointID,
        selectedImage.path,
        noteInput.trim(),
        setImageUploading,
        setSelectedImage,
      ),
    )
  }

  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView pd="0 0 8px 0" keyboardShouldPersistTaps="handled">
        <SelectEditImageModal
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
          handleAddImagePress={handleAddImagePress}
          isModalVisible={isModalVisible}
          setIsModalVisible={setIsModalVisible}
        />
        {imageUploading ? (
          <LoadingOverlay loadingMessage="Uploading image and note" />
        ) : null}
        {selectedImage ? (
          <ImageAbsolute source={selectedImage} resizeMode="contain" />
        ) : null}
        {!selectedImage && userImageURL ? (
          <ImageAbsolute source={{ uri: userImageURL }} resizeMode="contain" />
        ) : null}
        {!selectedImage && !userImageURL ? (
          <ImageAbsolute
            source={require('../../shared/images/no-image-default.png')}
            resizeMode="contain"
          />
        ) : null}
        <Header pd="8px">
          <Row>
            <HeaderText>{pointID}: </HeaderText>
            <HeaderText>{pointData.name}</HeaderText>
            <EmptySpace />
          </Row>
        </Header>
        <EmptySpace />
        {!selectedImage ? (
          <Row>
            <EmptySpace />
            <CircleIconButton onPress={handleAddImagePress}>
              <MatIcon name="add" size={28} />
            </CircleIconButton>
          </Row>
        ) : null}
        {selectedImage ? (
          <Row>
            <EmptySpace />
            <CircleIconButton onPress={handleOpenModal}>
              <MatIcon name="edit" size={20} />
            </CircleIconButton>
            <CircleIconButton onPress={handleSubmitImage}>
              <MatIcon name="cloud-upload" size={20} />
            </CircleIconButton>
          </Row>
        ) : null}
        <View pd="4px 4px 24px 4px">
          <TextInput
            pd="6px 32px 6px 6px"
            multiline={true}
            numberOfLines={2}
            style={{ textAlignVertical: 'top' }}
            maxLength={500}
            placeholderTextColor={theme.GREY}
            value={noteInput}
            onChangeText={(text) => setNoteInput(text)}
            placeholder="Add a note..."
          />
          {userNote !== noteInput.trim() ? (
            <SubmitNoteContainer>
              {isNoteLoading ? (
                <TransparentButton>
                  <LoadingCircle />
                </TransparentButton>
              ) : (
                <TransparentButton onPress={handleSubmitNote}>
                  <MatCommIcon
                    name="send-circle"
                    size={26}
                    color={theme.SECONDARY_BUTTON_COLOR}
                  />
                </TransparentButton>
              )}
            </SubmitNoteContainer>
          ) : null}
        </View>
        <BottomSheet
          ref={bottomSheetRef}
          initialSnap={1}
          snapPoints={[450, 125]}
          renderContent={(props) => (
            <BottomSheetContent {...props} pointData={pointData} />
          )}
          renderHeader={(props) => (
            <BottomSheetHeader {...props} onHeaderPress={onHeaderPress} />
          )}
        />
      </SafeAreaView>
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

LoggedInDetailsScreenComponent.propTypes = {
  pointID: PropTypes.string,
}

export const LoggedInDetailsScreen = connect(mapStateToProps)(
  LoggedInDetailsScreenComponent,
)
