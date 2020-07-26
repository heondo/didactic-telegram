import React from 'react'
import { connect } from 'react-redux'
import { ThemeProvider } from 'styled-components'

import {
  SafeAreaView,
  DepthButtonText,
  PointDepthButton,
  PointDepthButtonContainer,
} from '../../atoms'

const PointDepthHomeScreenComponent = ({ navigation, theme }) => {
  const navigateToFront = () => {
    navigation.navigate('Point Depth Front')
  }

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
        <PointDepthButtonContainer
          blurRadius={1.5}
          source={require('../../../shared/images/point-depth-bg.jpg')}>
          <PointDepthButton onPress={navigateToFront}>
            <DepthButtonText>FRONT</DepthButtonText>
          </PointDepthButton>
        </PointDepthButtonContainer>
        <PointDepthButtonContainer
          blurRadius={1.5}
          source={require('../../../shared/images/point-depth-bg.jpg')}>
          <PointDepthButton>
            <DepthButtonText>BACK</DepthButtonText>
          </PointDepthButton>
        </PointDepthButtonContainer>
        <PointDepthButtonContainer
          blurRadius={1.5}
          source={require('../../../shared/images/point-depth-bg.jpg')}>
          <PointDepthButton>
            <DepthButtonText>SIDE</DepthButtonText>
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
