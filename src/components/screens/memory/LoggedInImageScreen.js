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
import ImageZoom from 'react-native-image-pan-zoom'
import { Dimensions } from 'react-native'

const LoggedInImageScreenComponent = ({
  theme,
  authState,
  userImages,
  pointID,
}) => {
  const dispatch = useDispatch()
  const pointData = MERIDIAN_POINTS_DATA[pointID]

  const [userImageURL, setUserImageURL] = useState(null)
  const [userNote, setUserNote] = useState('')
  const [noteInput, setNoteInput] = useState(userNote)

  useEffect(() => {
    if (userImages.images && userImages.images[pointID]) {
      setUserImageURL(userImages.images[pointID].imageURL || null)
      setUserNote(userImages.images[pointID].note || '')
      setNoteInput(userImages.images[pointID].note || '')
    }
  }, [pointID, userImages.images])

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

  const { width: deviceWidth, height: deviceHeight } = Dimensions.get('screen')

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
        {imageUploading ? (
          <LoadingOverlay loadingMessage="Uploading image and note" />
        ) : null}
        <Header>
          <Row>
            <HeaderText>{pointID}: </HeaderText>
            <HeaderText>{pointData.name} </HeaderText>
            <HeaderText>{pointData.transliteration}</HeaderText>
            <EmptySpace />
          </Row>
        </Header>
        <View width="100%">
          <ImageZoom
            cropWidth={deviceWidth * 0.85}
            imageWidth={deviceWidth * 0.85}
            cropHeight={deviceHeight * 0.64}
            imageHeight={deviceHeight * 0.64}
            minScale={1}
            useNativeDriver={true}>
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
          </ImageZoom>
          {!selectedImage ? (
            <ImageCircleButtons>
              <CircleIconButton onPress={handleAddImagePress}>
                <MatIcon name="add" size={36} />
              </CircleIconButton>
            </ImageCircleButtons>
          ) : null}
          {selectedImage ? (
            <ImageCircleButtons>
              <CircleIconButton onPress={handleOpenModal}>
                <MatIcon name="edit" size={26} />
              </CircleIconButton>
              <CircleIconButton onPress={handleSubmitImage}>
                <MatIcon name="save" size={28} />
              </CircleIconButton>
            </ImageCircleButtons>
          ) : null}
        </View>
        <EmptySpace />
        <NoteContainer>
          <TextInput
            pd="6px 50px 6px 6px"
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
                    size={36}
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
