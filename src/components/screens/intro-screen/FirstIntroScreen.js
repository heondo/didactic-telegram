import React from 'react'
import { connect } from 'react-redux'
import { ThemeProvider } from 'styled-components/native'

import { SafeAreaView, Text } from '../../atoms'

const FirstIntroScreenComponent = ({ theme }) => {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView pd="12px">
        <Text>First tutorial screen, etc etc</Text>
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
