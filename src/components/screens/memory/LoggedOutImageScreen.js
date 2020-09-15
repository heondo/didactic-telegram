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
  Image,
  View,
  TextInput,
  NoteContainer,
} from '../../atoms'
import MERIDIAN_POINTS_DATA from '../../../shared/data/meridianPointsData'

const LoggedOutImageScreenComponent = ({ theme, pointID }) => {
  const [pointData, setPointData] = useState(MERIDIAN_POINTS_DATA[pointID])

  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView pd="0 0 8px 0">
        <Header>
          <Row>
            <HeaderText>{pointID}: </HeaderText>
            <HeaderText>{pointData.name} </HeaderText>
            <HeaderText>{pointData.transliteration}</HeaderText>
            <EmptySpace />
          </Row>
        </Header>
        <View width="100%" height="78%">
          <Image
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
const mapStateToProps = ({ theme }) => {
  return {
    theme,
  }
}
LoggedOutImageScreenComponent.propTypes = {
  pointID: PropTypes.string,
}

export const LoggedOutImageScreen = connect(mapStateToProps)(
  LoggedOutImageScreenComponent,
)
