import React, { createRef } from 'react'
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
  TextInput,
  NoteContainer,
} from '../atoms'
import { BottomSheetContent, BottomSheetHeader } from '../molecules'
import MERIDIAN_POINTS_DATA from '../../shared/data/meridianPointsData'

const LoggedOutDetailsScreenComponent = ({ theme, pointID }) => {
  const pointData = MERIDIAN_POINTS_DATA[pointID]
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
        <ImageAbsolute
          source={require('../../shared/images/no-image-add.png')}
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
        <NoteContainer>
          <TextInput
            pd="6px 32px 6px 6px"
            multiline={true}
            numberOfLines={2}
            style={{ textAlignVertical: 'top' }}
            maxLength={500}
            placeholderTextColor={theme.GREY}
            placeholder={'Log in to save notes'}
            editable={false}
          />
        </NoteContainer>
        <BottomSheet
          ref={bottomSheetRef}
          initialSnap={0}
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
const mapStateToProps = ({ theme, authState }) => {
  return {
    theme,
    authState,
  }
}
LoggedOutDetailsScreenComponent.propTypes = {
  pointID: PropTypes.string,
}

export const LoggedOutDetailsScreen = connect(mapStateToProps)(
  LoggedOutDetailsScreenComponent,
)
