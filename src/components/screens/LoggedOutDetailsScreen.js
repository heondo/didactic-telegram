import React from 'react'
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
  View,
} from '../atoms'
import { BottomSheetContent, BottomSheetHeader } from '../molecules'
import MERIDIAN_POINTS_DATA from '../../shared/data/meridianPointsData'

const LoggedOutDetailsScreenComponent = ({ theme, pointID }) => {
  const pointData = MERIDIAN_POINTS_DATA[pointID]

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
        <View pd="4px 4px 16px 4px">
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
        </View>
        <BottomSheet
          initialSnap={1}
          snapPoints={[550, 70]}
          renderContent={(props) => (
            <BottomSheetContent {...props} pointData={pointData} />
          )}
          renderHeader={(props) => <BottomSheetHeader {...props} />}
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
