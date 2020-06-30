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
  Button,
  ButtonText,
  ImageAbsolute,
  TextInput,
  View,
  TransparentButton,
  SubmitNoteContainer,
  MatCommIcon,
  LoadingCircle,
} from '../atoms'
import { BottomSheetHeader, BottomSheetContent } from '../molecules'
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

  const handleSubmitNote = () => {
    dispatch(
      thunkAddNote(authState.user.uid, pointID, noteInput, setNoteLoading),
    )
  }

  const onHeaderPress = () => {
    bottomSheetRef.current.snapTo(0)
  }

  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView pd="0 0 8px 0">
        <ImageAbsolute
          source={require('../../shared/images/no-image-default.png')}
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
        <View pd="4px 4px 20px 4px">
          <Button>
            <ButtonText>Edit</ButtonText>
          </Button>
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
          initialSnap={2}
          snapPoints={[600, 450, 45]}
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
