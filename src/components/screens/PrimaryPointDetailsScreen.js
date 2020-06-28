import React from 'react'
import { connect } from 'react-redux'
import { ThemeProvider } from 'styled-components'

import { SafeAreaView, Text } from '../atoms'

const PrimaryPointDetailsScreenComponent = ({ navigation, theme, pointID }) => {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <Text>{pointID}</Text>
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
