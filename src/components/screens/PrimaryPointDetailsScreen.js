import React from 'react'
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
} from '../atoms'
import MERIDIAN_POINTS_DATA from '../../shared/data/meridianPointsData'

const PrimaryPointDetailsScreenComponent = ({ theme, authState, pointID }) => {
  const pointData = MERIDIAN_POINTS_DATA[pointID]
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView pd="0 0 8px 0">
        {/* <HeaderText>{pointID}: </HeaderText> */}
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
        <TextInput
          multiline={true}
          numberOfLines={6}
          style={{ textAlignVertical: 'top' }}
          maxLength={500}
          placeholderTextColor={theme.GREY}
          placeholder={
            authState.isLoggedIn ? 'Add a note...' : 'Log in to save notes'
          }
          editable={authState.isLoggedIn ? true : false}
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
PrimaryPointDetailsScreenComponent.propTypes = {
  pointID: PropTypes.string,
}

export const PrimaryPointDetailsScreen = connect(mapStateToProps)(
  PrimaryPointDetailsScreenComponent,
)
