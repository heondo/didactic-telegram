import React, { useState } from 'react'
import { connect } from 'react-redux'
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
  DarkText,
  SubmitNoteContainer,
} from '../atoms'
import MERIDIAN_POINTS_DATA from '../../shared/data/meridianPointsData'

const LoggedInDetailsScreenComponent = ({
  theme,
  authState,
  userImages,
  pointID,
}) => {
  const pointData = MERIDIAN_POINTS_DATA[pointID]
  const userPointData = userImages.images[pointID] || {}

  const [noteInput, setNoteInput] = useState(userPointData.note)

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
            multiline={true}
            numberOfLines={2}
            style={{ textAlignVertical: 'top' }}
            maxLength={500}
            placeholderTextColor={theme.GREY}
            // value={noteInput}
            // onChangeText={setNoteInput}
            placeholder="Add a note..."
          />
          <SubmitNoteContainer>
            <TransparentButton>
              <DarkText>></DarkText>
            </TransparentButton>
          </SubmitNoteContainer>
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
