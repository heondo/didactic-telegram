import React from 'react'
import { connect } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { SafeAreaView, Text } from '../../atoms'

const DetailsPointScreenComponent = ({ navigation, pointID, theme }) => {
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

export const DetailsPointScreen = connect(mapStateToProps)(
  DetailsPointScreenComponent,
)
