import React, { useState, useEffect } from 'react'
import { connect, useDispatch } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import PropTypes from 'prop-types'

import {
  SafeAreaView,
  HeaderText,
  EmptySpace,
  Header,
  Row,
  CircleIconButton,
  Image,
  TextInput,
  NoteContainer,
  TransparentButton,
  SubmitNoteContainer,
  MatCommIcon,
  LoadingCircle,
  ImageCircleButtons,
  MatIcon,
  View,
} from '../../atoms'
import { LoadingOverlay, SelectEditImageModal } from '../../molecules'
import MERIDIAN_POINTS_DATA from '../../../shared/data/meridianPointsData'
import { thunkAddNote, thunkAddImage } from '../../../state/userImages/slice'
import { selectImageService } from '../../../services'

const LoggedInImageScreenComponent = ({
  theme,
  authState,
  userImages,
  pointID,
}) => {
  const dispatch = useDispatch()

  const [userImageURL, setUserImageURL] = useState(null)
  const [userNote, setUserNote] = useState('')

  // const userImageURL =
  //   userImages.images && userImages.images[pointID]
  //     ? userImages.images[pointID].imageURL
  //     : null

  // const userNote =
  //   userImages.images && userImages.images[pointID]
  //     ? userImages.images[pointID].note
  //     : ''

  useEffect(() => {
    if (userImages.images && userImages.images[pointID]) {
      setUserImageURL(userImages.images[pointID].imageURL || null)
      setUserNote(userImages.images[pointID].note || '')
      setNoteInput(userImages.images[pointID].note || '')
    }
  }, [pointID, userImages.images])

  const pointData = MERIDIAN_POINTS_DATA[pointID]
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
      <SafeAreaView pd="0" keyboardShouldPersistTaps="handled">
        <SelectEditImageModal
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
          handleAddImagePress={handleAddImagePress}
          isModalVisible={isModalVisible}
          setIsModalVisible={setIsModalVisible}
        />
        <Header>
          <Row>
            <HeaderText>{pointID}: </HeaderText>
            <HeaderText>{pointData.name}</HeaderText>
            <EmptySpace />
          </Row>
        </Header>
        {/* <EmptySpace /> */}
        <View width="100%" height="78%">
          {imageUploading ? (
            <LoadingOverlay loadingMessage="Uploading image and note" />
          ) : null}
          {selectedImage ? (
            <Image source={selectedImage} resizeMode="contain" />
          ) : null}
          {!selectedImage && userImageURL ? (
            <Image source={{ uri: userImageURL }} resizeMode="contain" />
          ) : null}
          {!selectedImage && !userImageURL ? (
            <Image
              source={require('../../../shared/images/no-image-default.png')}
              resizeMode="contain"
            />
          ) : null}
          {!selectedImage ? (
            <ImageCircleButtons>
              <CircleIconButton onPress={handleAddImagePress}>
                <MatIcon name="add" size={28} />
              </CircleIconButton>
            </ImageCircleButtons>
          ) : null}
          {selectedImage ? (
            <ImageCircleButtons>
              <CircleIconButton onPress={handleOpenModal}>
                <MatIcon name="edit" size={20} />
              </CircleIconButton>
              <CircleIconButton onPress={handleSubmitImage}>
                <MatIcon name="cloud-upload" size={20} />
              </CircleIconButton>
            </ImageCircleButtons>
          ) : null}
        </View>
        <EmptySpace />
        <NoteContainer>
          <TextInput
            pd="6px"
            multiline={true}
            maxHeight={80}
            numberOfLines={4}
            style={{ textAlignVertical: 'top' }}
            maxLength={500}
            placeholderTextColor={theme.FADED_TEXT_COLOR}
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
        </NoteContainer>
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

LoggedInImageScreenComponent.propTypes = {
  pointID: PropTypes.string,
}

export const LoggedInImageScreen = connect(mapStateToProps)(
  LoggedInImageScreenComponent,
)
