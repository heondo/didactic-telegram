import React from 'react'
import { connect } from 'react-redux'
import { ThemeProvider } from 'styled-components'

import {
  SafeAreaView,
  ButtonText,
  PointDepthButton,
  PointDepthButtonContainer,
} from '../../atoms'

const PointDepthHomeScreenComponent = ({ navigation, theme }) => {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView pd="0 8px">
        <PointDepthButtonContainer
          blurRadius={1}
          source={require('../../../shared/images/point-depth-bg.jpg')}>
          <PointDepthButton>
            <ButtonText>COLOR</ButtonText>
          </PointDepthButton>
        </PointDepthButtonContainer>
        <PointDepthButtonContainer
          blurRadius={1}
          source={require('../../../shared/images/point-depth-bg.jpg')}>
          <PointDepthButton>
            <ButtonText>FRONT</ButtonText>
          </PointDepthButton>
        </PointDepthButtonContainer>
        <PointDepthButtonContainer
          blurRadius={1}
          source={require('../../../shared/images/point-depth-bg.jpg')}>
          <PointDepthButton>
            <ButtonText>BACK</ButtonText>
          </PointDepthButton>
        </PointDepthButtonContainer>
        <PointDepthButtonContainer
          blurRadius={1}
          source={require('../../../shared/images/point-depth-bg.jpg')}>
          <PointDepthButton>
            <ButtonText>SIDE</ButtonText>
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

export const PointDepthHomeScreen = connect(mapStateToProps)(
  PointDepthHomeScreenComponent,
)
