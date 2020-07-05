import React from 'react'
import { connect } from 'react-redux'
import { ThemeProvider } from 'styled-components'

import { SafeAreaView, Text } from '../../atoms'

const BodyMapHomeScreenComponent = ({ navigation, theme }) => {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <Text>Image Map Incoming...</Text>
      </SafeAreaView>
    </ThemeProvider>
  )
}
const mapStateToProps = ({ theme }) => {
  return {
    theme,
  }
}

export const BodyMapHomeScreen = connect(mapStateToProps)(
  BodyMapHomeScreenComponent,
)
