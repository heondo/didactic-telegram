import React, { createRef, useState } from 'react'
import { connect } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import PropTypes from 'prop-types'
import BottomSheet from 'reanimated-bottom-sheet'

import {
  SafeAreaView,
  HeaderText,
  EmptySpace,
  Header,
  Row,
  ImageAbsolute,
  View,
  TextInput,
  NoteContainer,
} from '../../atoms'
import { BottomSheetContent, BottomSheetHeader } from '../../molecules'
import MERIDIAN_POINTS_DATA from '../../../shared/data/meridianPointsData'

const LoggedOutImageScreenComponent = ({ theme, pointID }) => {
  const [pointData, setPointData] = useState(MERIDIAN_POINTS_DATA[pointID])
  let bottomSheetRef = createRef()

  const onHeaderPress = () => {
    bottomSheetRef.current.snapTo(0)
  }

  const closeBottomSheet = () => {
    bottomSheetRef.current.snapTo(1)
  }

  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView pd="0 0 8px 0" onTouchStart={closeBottomSheet}>
        <Header>
          <Row>
            <HeaderText>{pointID}: </HeaderText>
            <HeaderText>{pointData.name}</HeaderText>
            <EmptySpace />
          </Row>
        </Header>
        <View width="100%" height="78%">
          <ImageAbsolute
            source={require('../../../shared/images/no-image-add.png')}
            resizeMode="contain"
          />
        </View>

        <EmptySpace />
        <NoteContainer>
          <TextInput
            pd="6px 32px 6px 6px"
            multiline={true}
            numberOfLines={2}
            style={{ textAlignVertical: 'top' }}
            maxLength={500}
            placeholderTextColor={theme.FADED_TEXT_COLOR}
            placeholder={'Log in to save notes'}
            editable={false}
          />
        </NoteContainer>
      </SafeAreaView>
    </ThemeProvider>
  )
}
const mapStateToProps = ({ theme, authState }) => {
  return {
    theme,
    authState,
  }
}
LoggedOutImageScreenComponent.propTypes = {
  pointID: PropTypes.string,
}

export const LoggedOutImageScreen = connect(mapStateToProps)(
  LoggedOutImageScreenComponent,
)
