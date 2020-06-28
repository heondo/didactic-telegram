import React from 'react'
import { connect } from 'react-redux'
import { ThemeProvider } from 'styled-components'

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

const PrimaryPointDetailsScreenComponent = ({ navigation, theme, pointID }) => {
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
          maxLength={500}
          placeholderTextColor={theme.GREY}
          placeholder="Add a note..."
        />
      </SafeAreaView>
    </ThemeProvider>
  )
}
const mapStateToProps = ({ theme }) => {
  return {
    theme,
  }
}

export const PrimaryPointDetailsScreen = connect(mapStateToProps)(
  PrimaryPointDetailsScreenComponent,
)
