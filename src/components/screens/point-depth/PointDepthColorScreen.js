import React from 'react'
import { connect } from 'react-redux'
import { ThemeProvider } from 'styled-components'

import {
  SafeAreaView,
  DepthButtonText,
  PointDepthButton,
  PointDepthButtonContainer,
} from '../../atoms'

const PointDepthColorScreenComponent = ({ navigation, theme }) => {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView pd="0 8px">
        <PointDepthButtonContainer
          blurRadius={1.5}
          source={require('../../../shared/images/point-depth-bg.jpg')}>
          <PointDepthButton>
            <DepthButtonText>COLOR</DepthButtonText>
          </PointDepthButton>
        </PointDepthButtonContainer>
      </SafeAreaView>
    </ThemeProvider>
  )
}
const mapStateToProps = ({ theme }) => {
  return {
    theme,
  }
}

export const PointDepthColorScreen = connect(mapStateToProps)(
  PointDepthColorScreenComponent,
)
