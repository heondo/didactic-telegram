import React, { useState } from 'react'
import { connect, useDispatch } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import PropTypes from 'prop-types'

import {
  SafeAreaView,
  HeaderText,
  EmptySpace,
  Header,
  Row,
  ImageAbsolute,
  TextInput,
  View,
  TransparentButton,
  SubmitNoteContainer,
  MatCommIcon,
  LoadingCircle,
} from '../atoms'
import MERIDIAN_POINTS_DATA from '../../shared/data/meridianPointsData'
import { thunkAddNote } from '../../state/userImages/slice'

const LoggedInDetailsScreenComponent = ({
  theme,
  authState,
  userImages,
  pointID,
}) => {
  const dispatch = useDispatch()
  const pointData = MERIDIAN_POINTS_DATA[pointID]
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

  const handleSubmitNote = () => {
    dispatch(
      thunkAddNote(authState.user.uid, pointID, noteInput, setNoteLoading),
    )
  }

  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView pd="0 0 8px 0">
        <ImageAbsolute
          source={require('../../shared/images/no-image-add.png')}
          height="100%"
          resizeMode="contain"
        />
        <Header pd="8px">
          <Row>
            <HeaderText>{pointID}: </HeaderText>
            <HeaderText>{pointData.name}</HeaderText>
            <EmptySpace />
          </Row>
        </Header>
        <EmptySpace />
        <View pd="4px 8px">
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
                    color={theme.PRIMARY_BUTTON_COLOR}
                  />
                </TransparentButton>
              )}
            </SubmitNoteContainer>
          ) : null}
        </View>
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
