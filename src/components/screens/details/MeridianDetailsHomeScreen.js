import React from 'react'
import { connect } from 'react-redux'
import { ThemeProvider } from 'styled-components'

import { SafeAreaView, Text } from '../../atoms'

const MeridianDetailsHomeScreenComponent = ({ navigation, theme }) => {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <Text>Create a similar list for the meridians</Text>
      </SafeAreaView>
    </ThemeProvider>
  )
}
const mapStateToProps = ({ theme }) => {
  return {
    theme,
  }
}

export const MeridianDetailsHomeScreen = connect(mapStateToProps)(
  MeridianDetailsHomeScreenComponent,
)
