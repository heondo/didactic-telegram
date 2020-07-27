import React from 'react'
import { connect } from 'react-redux'
import { ThemeProvider } from 'styled-components/native'

import { SafeAreaView, Text, HeaderText, EmptySpace, Image } from '../../atoms'

const FirstIntroScreenComponent = ({ navigation, route, theme }) => {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView pd="12px">
        {/* <Image
          resizeMode="contain"
          source={require('../../../shared/images/guy-checking-map.jpg')}
        /> */}
        <EmptySpace />
      </SafeAreaView>
    </ThemeProvider>
  )
}

const mapStateToProps = ({ theme }) => {
  return {
    theme,
  }
}

export const FirstIntroScreen = connect(mapStateToProps)(
  FirstIntroScreenComponent,
)
