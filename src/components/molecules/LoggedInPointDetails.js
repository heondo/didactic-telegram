import React, { useState } from 'react'
import { connect } from 'react-redux'
import { ThemeProvider } from '@react-navigation/native'
import PropTypes from 'prop-types'

import {
  Image,
  Text,
  MatIcon,
  Div,
  TransparentButton,
  MatCommIcon,
  TextInput,
  EmptySpace,
  Row,
  LoadingCircle,
} from '../atoms'
import MeridianPointsData from '../../shared/data/meridian-points-data'
import { SelectImageButton } from './SelectImageButton'
import { UsersImageContainer } from './UsersImageContainer'
import { LoadingOverlay } from './LoadingOverlay'
import { thunkAddNote } from '../../state/userImages/slice'

function LoggedInPointDetailsComponent({
  theme,
  authState,
  userImages,
  pointID,
  thunkAddNote,
}) {
  const imageURL =
    userImages.images && userImages.images[pointID]
      ? userImages.images[pointID].imageURL
      : null

  const note =
    userImages.images && userImages.images[pointID]
      ? userImages.images[pointID].note
      : ''
  const {
    name,
    transliteration,
    english,
    pinyin,
    korean,
    romaji,
    vietnamese,
    alternative,
  } = MeridianPointsData[pointID] || null
  const [selectedImage, setSelectedImage] = useState(null)
  const [imageUploading, setImageUploading] = useState(false)
  const [noteLoading, setNoteLoading] = useState(false)

  console.log(selectedImage)

  const [noteText, setNoteText] = useState(note)

  const handleSubmitNote = async () => {
    setNoteLoading(true)
    await thunkAddNote(authState.uid, pointID, noteText.trim())
    setNoteLoading(false)
  }

  return (
    <ThemeProvider theme={theme}>
      {imageUploading ? <LoadingOverlay /> : null}
      {/* If a user has uploaded an image display their image or a default image */}
      {imageURL && !selectedImage ? (
        <UsersImageContainer imageURL={imageURL} />
      ) : null}
      {selectedImage ? (
        // no uploaded image, but there is a selected image
        <Image source={{ uri: selectedImage.uri }} resizeMode="contain" />
      ) : null}
      {!imageURL && !selectedImage ? (
        // no selected or uploaded image
        <Image
          source={require('../../../public/images/no-image-add.png')}
          resizeMode="contain"
        />
      ) : null}
      <Row>
        <TextInput
          placeholder="Add a note"
          maxLength={300}
          placeholderTextColor={theme.GREY}
          onChangeText={(text) => setNoteText(text)}
          value={noteText}
        />
        {noteLoading || imageUploading ? (
          <TransparentButton width="7%" onPress={handleSubmitNote}>
            <LoadingCircle />
          </TransparentButton>
        ) : noteText.trim() !== note ? (
          <TransparentButton width="7%" onPress={handleSubmitNote}>
            <MatCommIcon name="cloud-upload-outline" size={18} />
          </TransparentButton>
        ) : (
          <TransparentButton width="7%">
            <MatIcon name="check" size={18} />
          </TransparentButton>
        )}
      </Row>
      <Div>
        <Text>{name}</Text>
        <Text>{transliteration}</Text>
        <Text>{english}</Text>
        <Text>{pinyin}</Text>
        <Text>{korean}</Text>
        <Text>{romaji}</Text>
        <Text>{vietnamese}</Text>
        <Text>{alternative}</Text>
      </Div>
      {/* <SelectImageButton
        pointID={pointID}
        selectedImage={selectedImage}
        setSelectedImage={setSelectedImage}
      /> */}
      {/* <AddImageButton>
        {selectedImage || imageURL ? (
          <MatIcon name="edit" size={18} />
        ) : (
          <MatIcon name="add-a-photo" size={18} />
        )}
      </AddImageButton> */}
      <EmptySpace />
      {/* <Text>Edit iamge, add note</Text> */}
      <SelectImageButton
        pointID={pointID}
        note={noteText}
        selectedImage={selectedImage}
        setLoadingState={setImageUploading}
        setSelectedImage={setSelectedImage}
      />
      {/* <Button width="90%" mg="6px 0">
        <ButtonText>Edit Point</ButtonText>
      </Button> */}
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

export const LoggedInPointDetails = connect(mapStateToProps, {
  thunkAddNote,
})(LoggedInPointDetailsComponent)

LoggedInPointDetails.propTypes = {
  pointID: PropTypes.string,
}
